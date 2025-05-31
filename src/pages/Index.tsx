
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
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-yellow-200 bg-clip-text text-transparent">
            SnapMoments
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            Capturing Life's Most Precious Moments
          </p>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            Professional event photography for weddings, birthdays, corporate events, and special occasions. 
            Every moment deserves to be remembered beautifully.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Why Choose SnapMoments?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 5 years of experience and hundreds of satisfied clients, we bring passion, 
              professionalism, and artistic vision to every event.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Camera className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Professional Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg">
                  State-of-the-art equipment and expert editing ensure your photos are picture-perfect.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Personal Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg">
                  We work closely with you to understand your vision and capture your unique story.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Memorable Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg">
                  From planning to delivery, we ensure a seamless and enjoyable photography experience.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Capture Your Moment?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your event and create something beautiful together.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
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
              <Camera className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-gray-800">SnapMoments</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"
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
                className="text-gray-700 hover:text-blue-600"
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
                  className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? "text-blue-600 bg-blue-50" : "text-gray-700"
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
                <Camera className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-xl font-bold">SnapMoments</span>
              </div>
              <p className="text-gray-400">
                Professional event photography capturing life's most precious moments.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-400 mb-2">📧 hello@snapmoments.com</p>
              <p className="text-gray-400 mb-2">📞 (555) 123-4567</p>
              <p className="text-gray-400">📍 New York, NY</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Wedding Photography</li>
                <li>Birthday Parties</li>
                <li>Corporate Events</li>
                <li>Family Portraits</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SnapMoments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
