
import { useState } from "react";
import { Calendar, Clock, Users, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    eventType: "",
    package: "",
    location: "",
    guestCount: "",
    duration: "",
    details: "",
    addOns: [] as string[]
  });

  const [selectedStep, setSelectedStep] = useState(1);

  const packages = [
    { id: "heritage-essential", name: "Heritage Essential", price: 45000, duration: "4 hours" },
    { id: "cultural-premium", name: "Cultural Premium", price: 75000, duration: "8 hours" },
    { id: "royal-heritage", name: "Royal Heritage", price: 125000, duration: "12 hours" }
  ];

  const eventTypes = [
    "Tamil Wedding",
    "Telugu Wedding", 
    "Kannada Wedding",
    "Malayalam Wedding",
    "Temple Ceremony",
    "Upanayanam (Sacred Thread)",
    "Namakarana (Naming Ceremony)",
    "Annaprashana (First Rice)",
    "Diwali Celebration",
    "Dussehra Festival",
    "Onam Celebration",
    "Pongal Festival",
    "Engagement Ceremony",
    "Mehendi Ceremony",
    "Other South Indian Event"
  ];

  const addOns = [
    { id: "extra-hour", name: "Additional Hour", price: 3500 },
    { id: "pre-wedding", name: "Pre-Wedding Shoot", price: 15000 },
    { id: "mehendi", name: "Mehendi Photography", price: 12000 },
    { id: "temple-video", name: "Temple Video", price: 25000 },
    { id: "heritage-album", name: "Heritage Album", price: 8000 },
    { id: "express-delivery", name: "Express Delivery", price: 5000 }
  ];

  const steps = [
    { id: 1, title: "Event Details", description: "Tell us about your South Indian celebration" },
    { id: 2, title: "Package Selection", description: "Choose your photography package" },
    { id: 3, title: "Contact Info", description: "Your contact information" },
    { id: 4, title: "Review & Submit", description: "Review your booking details" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddOnToggle = (addOnId: string) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter(id => id !== addOnId)
        : [...prev.addOns, addOnId]
    }));
  };

  const calculateTotal = () => {
    const selectedPackage = packages.find(pkg => pkg.id === formData.package);
    const packagePrice = selectedPackage ? selectedPackage.price : 0;
    const addOnPrice = formData.addOns.reduce((total, addOnId) => {
      const addOn = addOns.find(ao => ao.id === addOnId);
      return total + (addOn ? addOn.price : 0);
    }, 0);
    return packagePrice + addOnPrice;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to discuss your South Indian celebration.",
    });
    console.log("Booking submitted:", formData);
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.eventDate && formData.eventType && formData.location;
      case 2:
        return formData.package;
      case 3:
        return formData.name && formData.email && formData.phone;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (selectedStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="eventDate">Event Date *</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => handleInputChange("eventDate", e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <Label htmlFor="eventTime">Muhurtham Time / Event Time</Label>
                <Input
                  id="eventTime"
                  type="time"
                  value={formData.eventTime}
                  onChange={(e) => handleInputChange("eventTime", e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="eventType">Event Type *</Label>
                <Select onValueChange={(value) => handleInputChange("eventType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your celebration type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="guestCount">Expected Guest Count</Label>
                <Input
                  id="guestCount"
                  type="number"
                  placeholder="e.g. 200"
                  value={formData.guestCount}
                  onChange={(e) => handleInputChange("guestCount", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="location">Event Location *</Label>
              <Input
                id="location"
                placeholder="Temple name, kalyana mandapam, or venue address"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="details">Cultural Details & Special Requests</Label>
              <Textarea
                id="details"
                placeholder="Tell us about specific rituals, family traditions, special ceremonies, cultural requirements, etc."
                value={formData.details}
                onChange={(e) => handleInputChange("details", e.target.value)}
                rows={4}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.id}
                  className={`cursor-pointer transition-all ${
                    formData.package === pkg.id 
                      ? "border-orange-500 shadow-lg" 
                      : "border-gray-200 hover:shadow-md"
                  }`}
                  onClick={() => handleInputChange("package", pkg.id)}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription>₹{pkg.price.toLocaleString('en-IN')} • {pkg.duration}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    {formData.package === pkg.id && (
                      <Badge className="bg-orange-500">Selected</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Optional Cultural Add-ons</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {addOns.map((addOn) => (
                  <div
                    key={addOn.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      formData.addOns.includes(addOn.id)
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                    onClick={() => handleAddOnToggle(addOn.id)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{addOn.name}</span>
                      <Badge variant="outline">+₹{addOn.price.toLocaleString('en-IN')}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
          </div>
        );

      case 4:
        const selectedPackage = packages.find(pkg => pkg.id === formData.package);
        const selectedAddOns = addOns.filter(addOn => formData.addOns.includes(addOn.id));
        
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>South Indian Celebration Booking Summary</CardTitle>
                <CardDescription>Please review your booking details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Event:</strong> {formData.eventType}</p>
                    <p><strong>Date:</strong> {formData.eventDate}</p>
                    <p><strong>Time:</strong> {formData.eventTime || "To be confirmed"}</p>
                    <p><strong>Location:</strong> {formData.location}</p>
                  </div>
                  <div>
                    <p><strong>Contact:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Guests:</strong> {formData.guestCount || "Not specified"}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Package & Add-ons</h4>
                  {selectedPackage && (
                    <div className="flex justify-between">
                      <span>{selectedPackage.name} Package</span>
                      <span>₹{selectedPackage.price.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {selectedAddOns.map((addOn) => (
                    <div key={addOn.id} className="flex justify-between">
                      <span>{addOn.name}</span>
                      <span>+₹{addOn.price.toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                  <div className="border-t mt-2 pt-2 font-bold flex justify-between">
                    <span>Total</span>
                    <span>₹{calculateTotal().toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-16 px-6 bg-orange-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Book Your South Indian Celebration</h1>
          <p className="text-xl text-gray-600">
            Let's preserve your cultural heritage together. Share details about your special celebration.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  selectedStep === step.id 
                    ? "bg-orange-600 text-white" 
                    : selectedStep > step.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}>
                  {selectedStep > step.id ? "✓" : step.id}
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm font-medium text-gray-800">{step.title}</p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`absolute top-5 left-12 w-24 h-0.5 ${
                    selectedStep > step.id ? "bg-green-600" : "bg-gray-200"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Step {selectedStep}: {steps[selectedStep - 1].title}</CardTitle>
            <CardDescription>{steps[selectedStep - 1].description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {renderStep()}
              
              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSelectedStep(Math.max(1, selectedStep - 1))}
                  disabled={selectedStep === 1}
                >
                  Previous
                </Button>
                
                {selectedStep < 4 ? (
                  <Button
                    type="button"
                    onClick={() => setSelectedStep(selectedStep + 1)}
                    disabled={!isStepValid(selectedStep)}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                    Submit Booking Request
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need help with your South Indian celebration booking?</p>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-orange-600" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-orange-600" />
              <span>hello@snapmoments.in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
