
import { useState } from "react";
import { Upload, Plus, Edit, Trash2, Calendar, Users, Package, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showAddForm, setShowAddForm] = useState(false);

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Calendar },
    { id: "bookings", label: "Bookings", icon: Users },
    { id: "packages", label: "Packages", icon: Package },
    { id: "portfolio", label: "Portfolio", icon: Image }
  ];

  // Sample data
  const bookings = [
    {
      id: 1,
      client: "Sarah Johnson",
      event: "Wedding",
      date: "2024-06-15",
      package: "Premium",
      status: "confirmed",
      total: 999
    },
    {
      id: 2,
      client: "Mike Chen",
      event: "Birthday Party",
      date: "2024-06-20",
      package: "Essential",
      status: "pending",
      total: 599
    },
    {
      id: 3,
      client: "Tech Corp",
      event: "Corporate Event",
      date: "2024-06-25",
      package: "Luxury",
      status: "confirmed",
      total: 1599
    }
  ];

  const packages = [
    { id: 1, name: "Essential", price: 599, duration: "4 hours", active: true },
    { id: 2, name: "Premium", price: 999, duration: "6 hours", active: true },
    { id: 3, name: "Luxury", price: 1599, duration: "8 hours", active: true }
  ];

  const portfolioItems = [
    { id: 1, title: "Sarah & Michael's Wedding", category: "wedding", status: "published" },
    { id: 2, title: "Emma's Sweet 16", category: "birthday", status: "published" },
    { id: 3, title: "Tech Corp Gala", category: "corporate", status: "draft" }
  ];

  const handleStatusChange = (bookingId: number, newStatus: string) => {
    toast({
      title: "Booking Updated",
      description: `Booking status changed to ${newStatus}`,
    });
  };

  const handleAddItem = (type: string) => {
    toast({
      title: `${type} Added`,
      description: `New ${type.toLowerCase()} has been created successfully.`,
    });
    setShowAddForm(false);
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-800">24</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-800">8</p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Revenue</p>
                <p className="text-2xl font-bold text-gray-800">$12,450</p>
              </div>
              <Package className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Portfolio Items</p>
                <p className="text-2xl font-bold text-gray-800">42</p>
              </div>
              <Image className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
          <CardDescription>Latest booking requests and confirmations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bookings.slice(0, 3).map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">{booking.client}</h4>
                  <p className="text-sm text-gray-600">{booking.event} • {booking.date}</p>
                </div>
                <div className="text-right">
                  <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                    {booking.status}
                  </Badge>
                  <p className="text-sm font-medium mt-1">${booking.total}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderBookings = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Bookings</h2>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Booking
        </Button>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <Card key={booking.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{booking.client}</h3>
                  <p className="text-gray-600">{booking.event}</p>
                  <p className="text-sm text-gray-500">Date: {booking.date}</p>
                  <p className="text-sm text-gray-500">Package: {booking.package}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-800">${booking.total}</p>
                  <Select 
                    value={booking.status} 
                    onValueChange={(value) => handleStatusChange(booking.id, value)}
                  >
                    <SelectTrigger className="w-32 mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPackages = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Packages</h2>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Package
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Package</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="packageName">Package Name</Label>
                <Input id="packageName" placeholder="e.g. Premium Wedding" />
              </div>
              <div>
                <Label htmlFor="packagePrice">Price ($)</Label>
                <Input id="packagePrice" type="number" placeholder="999" />
              </div>
            </div>
            <div>
              <Label htmlFor="packageDescription">Description</Label>
              <Textarea id="packageDescription" placeholder="Package description..." />
            </div>
            <div className="flex gap-2">
              <Button onClick={() => handleAddItem("Package")}>Save Package</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Card key={pkg.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{pkg.name}</h3>
                <Badge variant={pkg.active ? "default" : "secondary"}>
                  {pkg.active ? "Active" : "Inactive"}
                </Badge>
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-2">${pkg.price}</p>
              <p className="text-gray-600 mb-4">{pkg.duration}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPortfolio = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Portfolio</h2>
        <Button onClick={() => setShowAddForm(true)}>
          <Upload className="h-4 w-4 mr-2" />
          Upload Photos
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add Portfolio Item</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="itemTitle">Title</Label>
                <Input id="itemTitle" placeholder="Event title" />
              </div>
              <div>
                <Label htmlFor="itemCategory">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="itemDescription">Description</Label>
              <Textarea id="itemDescription" placeholder="Event description..." />
            </div>
            <div>
              <Label htmlFor="photoUpload">Photos</Label>
              <Input id="photoUpload" type="file" multiple accept="image/*" />
            </div>
            <div className="flex gap-2">
              <Button onClick={() => handleAddItem("Portfolio Item")}>Save Item</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <Badge variant={item.status === "published" ? "default" : "secondary"}>
                  {item.status}
                </Badge>
              </div>
              <p className="text-gray-600 mb-4 capitalize">{item.category}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "bookings":
        return renderBookings();
      case "packages":
        return renderPackages();
      case "portfolio":
        return renderPortfolio();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Admin Panel</h1>
          <p className="text-gray-600">Manage your photography business</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white p-1 rounded-lg shadow-sm">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel;
