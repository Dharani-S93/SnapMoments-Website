
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Essential",
      price: 599,
      duration: "4 hours",
      photos: "50+ edited photos",
      popular: false,
      features: [
        "4 hours of coverage",
        "50+ professionally edited photos",
        "Online gallery access",
        "High-resolution downloads",
        "Basic photo retouching",
        "Email support"
      ],
      description: "Perfect for intimate gatherings and smaller events"
    },
    {
      id: 2,
      name: "Premium",
      price: 999,
      duration: "6 hours",
      photos: "100+ edited photos",
      popular: true,
      features: [
        "6 hours of coverage",
        "100+ professionally edited photos",
        "Online gallery with sharing options",
        "High-resolution downloads",
        "Advanced photo retouching",
        "15 printed photos (5x7)",
        "Priority email & phone support",
        "Second photographer available"
      ],
      description: "Our most popular package for weddings and major celebrations"
    },
    {
      id: 3,
      name: "Luxury",
      price: 1599,
      duration: "8 hours",
      photos: "200+ edited photos",
      popular: false,
      features: [
        "8 hours of coverage",
        "200+ professionally edited photos",
        "Premium online gallery",
        "High-resolution downloads",
        "Professional retouching & color grading",
        "Custom photo album (50 pages)",
        "30 printed photos (8x10)",
        "Same-day sneak peek (5 photos)",
        "Dedicated support manager",
        "Second photographer included",
        "Drone photography (if permitted)"
      ],
      description: "The ultimate photography experience for your special day"
    }
  ];

  const addOns = [
    { name: "Additional Hour", price: 150, description: "Extend your coverage time" },
    { name: "Engagement Session", price: 300, description: "1-hour pre-event session" },
    { name: "Photo Booth Setup", price: 250, description: "DIY photo booth with props" },
    { name: "Same-Day Edit Video", price: 400, description: "3-5 minute highlight reel" },
    { name: "Extra Photo Album", price: 200, description: "Additional 50-page album" },
    { name: "Rush Delivery", price: 100, description: "Photos delivered within 3 days" }
  ];

  return (
    <div className="min-h-screen py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Photography Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your event. All packages include professional editing, 
            online gallery access, and our commitment to capturing your special moments.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative overflow-hidden ${
                pkg.popular 
                  ? "border-2 border-blue-500 shadow-xl scale-105" 
                  : "border border-gray-200 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2">
                  <div className="flex items-center justify-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    <span className="font-semibold text-sm">MOST POPULAR</span>
                  </div>
                </div>
              )}
              
              <CardHeader className={`text-center ${pkg.popular ? "pt-12" : "pt-6"}`}>
                <CardTitle className="text-2xl font-bold text-gray-800">{pkg.name}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">{pkg.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-800">${pkg.price}</span>
                  <div className="text-sm text-gray-500 mt-2">
                    <p>{pkg.duration} • {pkg.photos}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full mt-6 ${
                    pkg.popular 
                      ? "bg-blue-600 hover:bg-blue-700" 
                      : "bg-gray-800 hover:bg-gray-900"
                  }`}
                  size="lg"
                >
                  Choose {pkg.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Enhance Your Package</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-800">{addon.name}</h3>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    +${addon.price}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">When will I receive my photos?</h3>
                <p className="text-gray-600">Standard delivery is 2-3 weeks. Rush delivery available for additional fee.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Can I purchase additional hours?</h3>
                <p className="text-gray-600">Yes! Additional hours can be added at $150/hour.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Do you travel for events?</h3>
                <p className="text-gray-600">We cover the NYC area. Travel fees may apply for distant locations.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What's your cancellation policy?</h3>
                <p className="text-gray-600">50% refund if cancelled 30+ days before event date.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Do you offer payment plans?</h3>
                <p className="text-gray-600">Yes! 50% deposit required, balance due on event date.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Can I see full galleries?</h3>
                <p className="text-gray-600">Full client galleries available upon request during consultation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
