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
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitToHubSpot, HubSpotFormData } from "@/lib/hubspot";

interface CuratedCallFormData {
  fullName: string;
  email: string;
  phone: string;
  selectedSlot: string;
}

interface CuratedCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CuratedCallModal = ({ isOpen, onClose }: CuratedCallModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue
  } = useForm<CuratedCallFormData>({
    defaultValues: {
      selectedSlot: ""
    }
  });

  const timeSlots = [
    "Monday 2:00 PM - 3:00 PM",
    "Tuesday 10:00 AM - 11:00 AM", 
    "Wednesday 3:00 PM - 4:00 PM",
    "Thursday 11:00 AM - 12:00 PM",
    "Friday 2:00 PM - 3:00 PM"
  ];

  const comparisonData = [
    {
      feature: "Planning Time",
      traditional: "Weeks of research",
      curated: "15-minute call",
      benefit: "Save 20+ hours"
    },
    {
      feature: "Access Level",
      traditional: "Public tours only",
      curated: "Private estates & wineries",
      benefit: "Exclusive access"
    },
    {
      feature: "Personalization",
      traditional: "One-size-fits-all",
      curated: "Tailored to your tastes",
      benefit: "Perfect match"
    },
    {
      feature: "Local Knowledge",
      traditional: "Guidebook research",
      curated: "Insider connections",
      benefit: "Hidden gems"
    },
    {
      feature: "Total Cost",
      traditional: "$5,000+ per person",
      curated: "Premium but transparent",
      benefit: "Value-driven"
    }
  ];

  const onSubmit = async (data: CuratedCallFormData) => {
    try {
      // Submit to HubSpot CRM
      await submitToHubSpot({
        ...data,
        formType: "curated-call",
        additionalRequests: `Selected Time Slot: ${data.selectedSlot}`
      } as HubSpotFormData);
      
      console.log("Curated Call form submitted:", data);
      setIsSubmitted(true);
      
      // Auto-close after 5 seconds
      setTimeout(() => {
        handleClose();
      }, 5000);
      
      toast({
        title: "Call Scheduled!",
        description: "We'll send you a calendar invite and call details within 24 hours.",
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
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-cream border-secondary/20">
        <DialogHeader className="text-center pb-8">
          <div className="flex flex-col items-center justify-center">
            <DialogTitle className="text-3xl md:text-4xl font-display font-semibold text-charcoal mb-3 text-center">
              {isSubmitted ? "Call Scheduled!" : "Book Your Curated Call"}
            </DialogTitle>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed text-center">
              {isSubmitted 
                ? "We'll send you a calendar invite and call details within 24 hours." 
                : "15 minutes that will change how you experience Tuscany forever."
              }
            </p>
          </div>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-r from-warm-gold to-antique-champagne rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-charcoal/80 mb-6">
              Your curated call has been scheduled! We'll send you a calendar invite and call details within 24 hours.
            </p>
            <Button 
              onClick={handleClose}
              className="bg-gradient-to-r from-warm-gold to-antique-champagne text-charcoal hover:from-antique-champagne hover:to-warm-gold"
            >
              Close
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Time Slot Selection */}
            <div className="space-y-4">
              <Label className="text-lg font-display font-medium text-charcoal">
                Select Your Preferred Time Slot *
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {timeSlots.map((slot) => (
                  <div key={slot} className="relative">
                    <input
                      type="radio"
                      id={slot}
                      value={slot}
                      {...register("selectedSlot", { required: "Please select a time slot" })}
                      className="sr-only"
                    />
                    <label
                      htmlFor={slot}
                      className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        watch("selectedSlot") === slot
                          ? "border-secondary bg-secondary/10 text-secondary"
                          : "border-secondary/30 bg-white/50 text-charcoal hover:border-secondary/50"
                      }`}
                    >
                      <span className="font-medium">{slot}</span>
                    </label>
                  </div>
                ))}
              </div>
              {errors.selectedSlot && (
                <p className="text-chianti-wine text-sm">Please select a time slot</p>
              )}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Label htmlFor="phone" className="text-charcoal font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone", { required: "Phone number is required" })}
                    className="bg-white/50 border-secondary/30 focus:border-secondary text-charcoal"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-chianti-wine text-sm">{errors.phone.message}</p>
                  )}
                </div>
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

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-warm-gold to-antique-champagne text-charcoal hover:from-antique-champagne hover:to-warm-gold font-medium py-3 text-lg"
                >
                  {isSubmitting ? "Scheduling Call..." : "Apply for Your Curated Call"}
                </Button>
                <p className="text-charcoal/60 text-sm text-center mt-3">
                  No sales pitch — just pure value and insider knowledge.
                </p>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CuratedCallModal; 