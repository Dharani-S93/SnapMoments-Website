
import { useState } from "react";
import { Camera, Calendar, Users, Star, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Portfolio from "@/components/Portfolio";
import Packages from "@/components/Packages";
import BookingForm from "@/components/BookingForm";
import AdminPanel from "@/components/AdminPanel";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", id: "home" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Packages", id: "packages" },
    { name: "Book Now", id: "booking" },
    { name: "Admin", id: "admin" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "portfolio":
        return <Portfolio />;
      case "packages":
        return <Packages />;
      case "booking":
        return <BookingForm />;
      case "admin":
        return <AdminPanel />;
      default:
        return <HomeSection />;
    }
  };

  const HomeSection = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-orange-900 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-yellow-200 bg-clip-text text-transparent">
            SnapMoments
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            South Indian Heritage Photography Specialists
          </p>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            Capturing the essence of South Indian traditions - from grand Tamil, Telugu, Kannada & Malayalam weddings 
            to sacred temple ceremonies, vibrant festivals, and precious family moments with cultural authenticity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-gold-500 to-yellow-500 hover:from-gold-600 hover:to-yellow-600 text-black font-semibold px-8 py-4 text-lg"
              onClick={() => setActiveSection("portfolio")}
            >
              View Portfolio
              <Camera className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              onClick={() => setActiveSection("booking")}
            >
              Book Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Why Choose SnapMoments for South Indian Photography?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the cultural nuances, traditional rituals, and emotional significance of South Indian ceremonies. 
              With deep respect for customs and artistic vision, we preserve your heritage beautifully.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Camera className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Cultural Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg">
                  Deep understanding of South Indian traditions, rituals, and ceremonies. We capture every meaningful moment with cultural sensitivity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Family Heritage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg">
                  We understand the importance of family bonds and generational traditions in South Indian culture. Every photo tells your family's story.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Authentic Storytelling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg">
                  From mehendi ceremonies to temple rituals, we capture the authentic essence of your celebrations with artistic excellence.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our South Indian Photography Specializations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Tamil Weddings", desc: "Traditional ceremonies, Muhurtham, Sapthapadi", icon: "🌸" },
              { name: "Telugu Weddings", desc: "Pellikuthuru, Jeelakarra-Bellam, Mangalsutra", icon: "🪷" },
              { name: "Kannada Weddings", desc: "Naandi, Var Puja, Sath Phere", icon: "🌺" },
              { name: "Malayalam Weddings", desc: "Thaali, Saptapadi, Aashirwad", icon: "🌼" },
              { name: "Temple Events", desc: "Festivals, Pujas, Abhishekam ceremonies", icon: "🕉️" },
              { name: "Cultural Festivals", desc: "Diwali, Dussehra, Onam, Pongal", icon: "🎭" },
              { name: "Sacred Thread", desc: "Upanayanam, Janeu ceremonies", icon: "📿" },
              { name: "Naming Ceremonies", desc: "Namakarana, Annaprashana rituals", icon: "👶" }
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Preserve Your Heritage?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Let's discuss your South Indian celebration and create timeless memories together.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            onClick={() => setActiveSection("booking")}
          >
            Start Your Journey
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Camera className="h-8 w-8 text-orange-600 mr-2" />
              <span className="text-2xl font-bold text-gray-800">SnapMoments</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                    activeSection === item.id ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors hover:text-orange-600 ${
                    activeSection === item.id ? "text-orange-600 bg-orange-50" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Camera className="h-6 w-6 text-orange-400 mr-2" />
                <span className="text-xl font-bold">SnapMoments</span>
              </div>
              <p className="text-gray-400">
                South Indian heritage photography capturing life's most precious cultural moments.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-400 mb-2">📧 hello@snapmoments.in</p>
              <p className="text-gray-400 mb-2">📞 +91 98765 43210</p>
              <p className="text-gray-400">📍 Chennai, Tamil Nadu</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Specializations</h3>
              <ul className="text-gray-400 space-y-2">
                <li>South Indian Weddings</li>
                <li>Temple Ceremonies</li>
                <li>Cultural Festivals</li>
                <li>Heritage Family Portraits</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SnapMoments. Preserving South Indian heritage through photography.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
