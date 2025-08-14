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
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { submitToHubSpot, HubSpotFormData } from "@/lib/hubspot";

interface BehindTheScenesFormData {
  fullName: string;
  email: string;
  phone: string;
  dreamTrip: string[];
  unforgettableMoments: boolean;
}

interface BehindTheScenesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestCuratedCall: () => void;
}

const BehindTheScenesModal = ({ isOpen, onClose, onRequestCuratedCall }: BehindTheScenesModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [showBookButton, setShowBookButton] = useState(false);
  const { toast } = useToast();

  // Custom CSS for animations
  const customStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate(-50%, 20px);
      }
      to {
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    @keyframes shine {
      0% {
        transform: translateX(-100%) translateY(-100%) rotate(45deg);
      }
      100% {
        transform: translateX(100%) translateY(100%) rotate(45deg);
      }
    }
    
    .shine-effect {
      position: relative;
      overflow: hidden;
    }
    
    .shine-effect::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
      animation: shine 3s ease-in-out infinite;
      pointer-events: none;
    }
  `;
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue
  } = useForm<BehindTheScenesFormData>({
    defaultValues: {
      unforgettableMoments: false,
      dreamTrip: []
    }
  });

  const dreamTripOptions = [
    "Private villa experiences",
    "Luxury yacht charters",
    "Exclusive truffle hunting",
    "Michelin-star chef experiences"
  ];

  const handleCheckboxChange = (value: string, checked: boolean) => {
    const currentValues = watch("dreamTrip");
    if (checked) {
      setValue("dreamTrip", [...currentValues, value]);
    } else {
      setValue("dreamTrip", currentValues.filter(item => item !== value));
    }
  };

  const onSubmit = async (data: BehindTheScenesFormData) => {
    try {
      // Show processing state
      setIsProcessing(true);
      
      // Simulate processing time
      setTimeout(() => {
        setIsProcessing(false);
        setIsApproved(true);
      }, 3000); // 3 seconds processing time
      
      // Submit to HubSpot CRM
      await submitToHubSpot({
        ...data,
        formType: "behind-the-scenes",
        additionalRequests: `Dream Trip Preferences: ${data.dreamTrip.join(", ")}`
      } as HubSpotFormData);
      
      console.log("Behind the Scenes form submitted:", data);
      
      toast({
        title: "Access Granted!",
        description: "You'll receive exclusive behind-the-scenes content within 24 hours.",
      });
    } catch (error) {
      console.error("HubSpot submission error:", error);
      setIsProcessing(false);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setIsProcessing(false);
    setIsApproved(false);
    setShowBookButton(false);
    reset();
    onClose();
  };

  return (
    <>
      <style>{customStyles}</style>
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className={`${
          isApproved 
            ? 'sm:max-w-[95vw] max-w-[95vw] max-h-[95vh] h-[95vh] p-0 bg-black' 
            : 'sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-cream border-secondary/20'
        }`}>
          {!isApproved && (
            <DialogHeader className="text-center pb-6">
              <DialogTitle className="text-3xl font-display font-semibold text-charcoal mb-2">
                {isSubmitted ? "Access Granted!" : "Request Exclusive Behind the Scenes"}
              </DialogTitle>
              <p className="text-charcoal/70">
                {isSubmitted 
                  ? "You'll receive exclusive behind-the-scenes content within 24 hours." 
                  : "Get exclusive access to our latest Tuscany journey footage."
                }
              </p>
            </DialogHeader>
          )}

          {isProcessing ? (
            <div className="text-center py-12">
              {/* Elegant Wine Glass Animation */}
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto relative">
                  {/* Wine Glass */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-20 bg-gradient-to-b from-warm-gold/20 to-tuscan-red/20 rounded-t-full border-2 border-warm-gold/40 relative">
                      {/* Wine Liquid */}
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-tuscan-red/60 to-warm-gold/40 rounded-b-full animate-pulse"></div>
                      {/* Glass Stem */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-warm-gold/40"></div>
                      {/* Glass Base */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-warm-gold/40 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Floating Vines */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 text-secondary animate-bounce">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 text-warm-gold animate-bounce" style={{animationDelay: '0.5s'}}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-charcoal mb-3">
                Processing Your Application
              </h3>
              <p className="text-charcoal/70 mb-4">
                Please wait while we review your request...
              </p>
              
              {/* Approval Message - Shows after delay */}
              <div className="mt-6 p-4 bg-gradient-to-r from-warm-gold/10 to-antique-champagne/10 rounded-lg border border-warm-gold/20 opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
                <p className="text-warm-gold font-medium">
                  🎉 Congratulations! You have been approved!
                </p>
              </div>
            </div>
          ) : isApproved ? (
            <div className="w-full h-full flex items-center justify-center">
              {/* Full-Screen Video - No padding, no margins, just video */}
              <div className="relative w-full h-full">
                <iframe
                  src="https://www.youtube.com/embed/868jQUqlZYs?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1&enablejsapi=1"
                  className="w-full h-full"
                  title="Exclusive Tuscany Behind the Scenes"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => {
                    // Show book button after watching video for a while (simulating engagement)
                    setTimeout(() => setShowBookButton(true), 8000); // 8 seconds delay
                  }}
                />
                
                {/* Elegant Book Call Button - Appears after watching video */}
                {showBookButton && (
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <Button 
                      onClick={onRequestCuratedCall}
                      className="shine-effect bg-gradient-to-r from-secondary to-tuscan-red text-white hover:from-tuscan-red hover:to-secondary font-medium px-8 py-4 text-lg transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-3xl backdrop-blur-sm bg-white/10 border border-white/20"
                    >
                      Book Your Curated Call
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ) : isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-r from-warm-gold to-antique-champagne rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-charcoal/80 mb-6">
                Your exclusive access has been granted! We'll send you behind-the-scenes footage from our latest Tuscany journey within 24 hours.
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
              {/* Unforgettable Moments Checkbox */}
              <div className="space-y-3 p-4 bg-white/30 rounded-lg border border-secondary/20">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="unforgettableMoments"
                    checked={watch("unforgettableMoments")}
                    onCheckedChange={(checked) => setValue("unforgettableMoments", checked as boolean)}
                    className="border-secondary data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                  />
                  <Label 
                    htmlFor="unforgettableMoments" 
                    className="text-lg font-display font-medium text-charcoal cursor-pointer"
                  >
                    Are you ready to experience a Tuscany trip no one else you know could buy?
                  </Label>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
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
              </div>

              {/* Dream Trip Checkboxes */}
              <div className="space-y-3">
                <Label className="text-lg font-display font-medium text-charcoal">
                  What does your dream trip look like? *
                </Label>
                <div className="space-y-3 p-4 bg-white/30 rounded-lg border border-secondary/20">
                  {dreamTripOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-3">
                      <Checkbox
                        id={option}
                        checked={watch("dreamTrip").includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                        className="border-secondary data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                      />
                      <Label 
                        htmlFor={option} 
                        className="text-charcoal cursor-pointer"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.dreamTrip && (
                  <p className="text-chianti-wine text-sm">Please select at least one option</p>
                )}
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-warm-gold to-antique-champagne text-charcoal hover:from-antique-champagne hover:to-warm-gold font-medium py-3 text-lg"
                >
                  {isSubmitting ? "Getting Access..." : "Get Access"}
                </Button>
                <p className="text-charcoal/60 text-sm text-center mt-3">
                  Exclusive content delivered directly to your inbox.
                </p>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BehindTheScenesModal; 