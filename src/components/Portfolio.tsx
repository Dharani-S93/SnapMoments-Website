
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Sarah & Michael's Wedding",
      category: "wedding",
      date: "2024-05-15",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      description: "A beautiful spring wedding in Central Park"
    },
    {
      id: 2,
      title: "Emma's Sweet 16",
      category: "birthday",
      date: "2024-04-20",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
      description: "A magical sweet sixteen celebration"
    },
    {
      id: 3,
      title: "Tech Corp Annual Gala",
      category: "corporate",
      date: "2024-03-10",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      description: "Professional corporate event photography"
    },
    {
      id: 4,
      title: "Johnson Family Reunion",
      category: "family",
      date: "2024-02-28",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
      description: "Three generations celebrating together"
    },
    {
      id: 5,
      title: "David & Lisa's Engagement",
      category: "wedding",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
      description: "Romantic engagement session at sunset"
    },
    {
      id: 6,
      title: "Startup Launch Party",
      category: "corporate",
      date: "2024-01-05",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      description: "Celebrating innovation and success"
    }
  ];

  const filters = [
    { id: "all", label: "All Events" },
    { id: "wedding", label: "Weddings" },
    { id: "birthday", label: "Birthdays" },
    { id: "corporate", label: "Corporate" },
    { id: "family", label: "Family" }
  ];

  const filteredItems = selectedFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedFilter);

  return (
    <div className="min-h-screen py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of captured moments from weddings, birthdays, corporate events, and more. 
            Each photo tells a unique story.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter.id)}
              className={`${
                selectedFilter === filter.id 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-white/90 text-gray-800 capitalize"
                  >
                    {item.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <p className="text-sm text-gray-500">
                  📅 {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Love What You See?</h3>
          <p className="text-gray-600 mb-6">
            Ready to create your own beautiful memories? Let's discuss your upcoming event.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Book Your Session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
