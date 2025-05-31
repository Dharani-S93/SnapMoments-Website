
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Heritage Essential",
      price: 45000,
      duration: "4 hours",
      photos: "100+ edited photos",
      popular: false,
      features: [
        "4 hours of coverage",
        "100+ professionally edited photos",
        "Traditional ceremony highlights",
        "Online gallery access",
        "High-resolution downloads",
        "Basic cultural retouching",
        "WhatsApp support"
      ],
      description: "Perfect for intimate South Indian ceremonies and small family gatherings"
    },
    {
      id: 2,
      name: "Cultural Premium",
      price: 75000,
      duration: "8 hours",
      photos: "200+ edited photos",
      popular: true,
      features: [
        "8 hours of coverage",
        "200+ professionally edited photos",
        "Complete ceremony documentation",
        "Traditional ritual close-ups",
        "Family portrait session",
        "Online gallery with sharing",
        "High-resolution downloads",
        "Cultural color enhancement",
        "25 printed photos (8x10)",
        "Priority support",
        "Second photographer for large events"
      ],
      description: "Our most popular package for traditional South Indian weddings and major celebrations"
    },
    {
      id: 3,
      name: "Royal Heritage",
      price: 125000,
      duration: "12 hours",
      photos: "400+ edited photos",
      popular: false,
      features: [
        "12 hours of coverage (multi-day available)",
        "400+ professionally edited photos",
        "Complete wedding documentation",
        "Pre-wedding rituals coverage",
        "Traditional jewelry photography",
        "Family legacy portraits",
        "Premium online gallery",
        "High-resolution downloads",
        "Professional cultural retouching",
        "Custom photo album (100 pages)",
        "50 printed photos (various sizes)",
        "Same-day preview (10 photos)",
        "Dedicated support manager",
        "Two photographers included",
        "Drone photography (where permitted)",
        "Traditional music integration"
      ],
      description: "The ultimate South Indian wedding photography experience for grand celebrations"
    }
  ];

  const addOns = [
    { name: "Additional Hour", price: 3500, description: "Extend your ceremony coverage" },
    { name: "Pre-Wedding Shoot", price: 15000, description: "Traditional engagement/couple session" },
    { name: "Mehendi Photography", price: 12000, description: "Dedicated mehendi ceremony coverage" },
    { name: "Temple Video", price: 25000, description: "Traditional ceremony highlight reel" },
    { name: "Heritage Album", price: 8000, description: "Additional 50-page traditional album" },
    { name: "Express Delivery", price: 5000, description: "Photos delivered within 5 days" },
    { name: "Traditional Frames", price: 6000, description: "Set of 10 culturally-themed frames" },
    { name: "Festival Coverage", price: 18000, description: "Diwali, Dussehra, Onam documentation" }
  ];

  return (
    <div className="min-h-screen py-16 px-6 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">South Indian Photography Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your South Indian celebration. All packages include cultural-sensitive editing, 
            traditional ceremony documentation, and our commitment to preserving your heritage beautifully.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative overflow-hidden ${
                pkg.popular 
                  ? "border-2 border-orange-500 shadow-xl scale-105" 
                  : "border border-gray-200 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center py-2">
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
                  <span className="text-4xl font-bold text-gray-800">₹{pkg.price.toLocaleString('en-IN')}</span>
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
                      ? "bg-orange-600 hover:bg-orange-700" 
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
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Enhance Your Cultural Package</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-800">{addon.name}</h3>
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    +₹{addon.price.toLocaleString('en-IN')}
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
                <p className="text-gray-600">Standard delivery is 2-3 weeks. Express delivery available for additional fee.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Do you understand South Indian traditions?</h3>
                <p className="text-gray-600">Yes! Our team specializes in Tamil, Telugu, Kannada & Malayalam wedding traditions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Do you travel across South India?</h3>
                <p className="text-gray-600">We cover Tamil Nadu, Karnataka, Andhra Pradesh, Telangana & Kerala. Travel fees may apply.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What's your cancellation policy?</h3>
                <p className="text-gray-600">50% refund if cancelled 30+ days before event date.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Do you offer payment plans?</h3>
                <p className="text-gray-600">Yes! 40% advance, 40% before event, 20% on delivery.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Can I see traditional wedding galleries?</h3>
                <p className="text-gray-600">Full South Indian wedding galleries available upon request during consultation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
