import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitToHubSpot, HubSpotFormData } from "@/lib/hubspot";

interface ItineraryFormData {
  fullName: string;
  email: string;
  phone?: string;
  travelDates?: string;
  additionalRequests?: string;
}

interface ItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ItineraryModal = ({ isOpen, onClose }: ItineraryModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ItineraryFormData>();

  const onSubmit = async (data: ItineraryFormData) => {
    try {
      // Submit to HubSpot CRM
      await submitToHubSpot(data as HubSpotFormData);
      
      console.log("Form submitted to HubSpot:", data);
      setIsSubmitted(true);
      
      // Auto-close after 5 seconds
      setTimeout(() => {
        handleClose();
      }, 5000);
      
      toast({
        title: "Request Submitted Successfully",
        description: "We'll review your request and get back to you within 24 hours.",
      });
    } catch (error) {
      console.error("HubSpot submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-cream border-secondary/20">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-3xl font-display font-semibold text-charcoal mb-2">
            {isSubmitted ? "Thank You!" : "Apply for Your Dream Tuscany Trip"}
          </DialogTitle>
          <p className="text-charcoal/70">
            {isSubmitted 
              ? "We'll review your request and get back to you within 24 hours." 
              : "We'll craft your exclusive itinerary and reach out personally."
            }
          </p>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-r from-warm-gold to-antique-champagne rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-charcoal/80 mb-6">
              Your dream trip request has been received. Our travel curator will personally review your preferences and contact you within 24 hours.
            </p>
            <Button 
              onClick={handleClose}
              className="bg-gradient-to-r from-warm-gold to-antique-champagne text-charcoal hover:from-antique-champagne hover:to-warm-gold"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-charcoal font-medium">
                Full Name *
              </Label>
              <Input
                id="fullName"
                {...register("fullName", { required: "Full name is required" })}
                className="bg-white/50 border-secondary/30 focus:border-secondary text-charcoal"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-chianti-wine text-sm">{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-charcoal font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email address"
                  }
                })}
                className="bg-white/50 border-secondary/30 focus:border-secondary text-charcoal"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-chianti-wine text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-charcoal font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                className="bg-white/50 border-secondary/30 focus:border-secondary text-charcoal"
                placeholder="Enter your phone number (optional)"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="travelDates" className="text-charcoal font-medium">
                Desired Travel Dates or Month
              </Label>
              <Input
                id="travelDates"
                {...register("travelDates")}
                className="bg-white/50 border-secondary/30 focus:border-secondary text-charcoal"
                placeholder="e.g., October 2024, Spring 2025"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalRequests" className="text-charcoal font-medium">
                Additional Requests or Questions
              </Label>
              <Textarea
                id="additionalRequests"
                {...register("additionalRequests")}
                className="bg-white/50 border-secondary/30 focus:border-secondary text-charcoal min-h-[100px]"
                placeholder="Tell us about any special interests, dietary requirements, or specific experiences you'd like to include..."
              />
            </div>

            <div className="pt-4">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-warm-gold to-antique-champagne text-charcoal hover:from-antique-champagne hover:to-warm-gold font-medium py-3 text-lg"
              >
                {isSubmitting ? "Submitting to HubSpot..." : "Apply for Your Private Itinerary"}
              </Button>
              <p className="text-charcoal/60 text-sm text-center mt-3">
                No obligation — your dream trip, your decision.
              </p>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ItineraryModal;