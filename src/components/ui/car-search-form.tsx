import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCarData } from "@/hooks/useCarData";

interface SearchFormData {
  make: string;
  model: string;
  postcode: string;
  distance: string;
  maxMileage: string;
  maxPrice: string;
}

const CarSearchForm = () => {
  const navigate = useNavigate();
  const { manufacturers, models, loading, error, fetchModelsForManufacturer } = useCarData();
  const [formData, setFormData] = useState<SearchFormData>({
    make: "",
    model: "",
    postcode: "",
    distance: "",
    maxMileage: "",
    maxPrice: "",
  });

  const distanceOptions = [
    { value: "5", label: "5 miles" },
    { value: "10", label: "10 miles" },
    { value: "20", label: "20 miles" },
    { value: "30", label: "30 miles" },
    { value: "50", label: "50 miles" },
    { value: "100", label: "100 miles" },
    { value: "200", label: "200 miles" },
  ];

  const handleMakeChange = (value: string) => {
    console.log("Make changed to:", value);
    setFormData(prev => ({ ...prev, make: value, model: "" }));
    
    // Fetch models for the selected manufacturer
    const selectedManufacturer = manufacturers.find(m => m.name === value);
    if (selectedManufacturer) {
      fetchModelsForManufacturer(selectedManufacturer.id);
    }
  };

  const handleModelChange = (value: string) => {
    console.log("Model changed to:", value);
    setFormData(prev => ({ ...prev, model: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check required fields
    if (!formData.postcode || !formData.distance) {
      alert("Please fill in all required fields (Postcode and Distance)");
      return;
    }

    const searchParams = new URLSearchParams();

    if (formData.make) searchParams.set("make", formData.make);
    if (formData.model) searchParams.set("model", formData.model);
    if (formData.postcode) searchParams.set("postcode", formData.postcode);
    if (formData.distance) searchParams.set("distance", formData.distance);
    if (formData.maxMileage) searchParams.set("maxMileage", formData.maxMileage);
    if (formData.maxPrice) searchParams.set("maxPrice", formData.maxPrice);

    navigate(`/search?${searchParams.toString()}`);
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-4">
          <p>Loading car data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-4 text-red-600">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="make">Make</Label>
            <Select
              value={formData.make}
              onValueChange={handleMakeChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select make" />
              </SelectTrigger>
              <SelectContent>
                {manufacturers.map((manufacturer) => (
                  <SelectItem key={manufacturer.id} value={manufacturer.name}>
                    {manufacturer.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Select
              value={formData.model}
              onValueChange={handleModelChange}
              disabled={!formData.make}
            >
              <SelectTrigger className={!formData.make ? "opacity-50" : ""}>
                <SelectValue 
                  placeholder={!formData.make ? "Select make first" : "Select model"} 
                />
              </SelectTrigger>
              <SelectContent>
                {models.map((model) => (
                  <SelectItem key={model.id} value={model.name}>
                    {model.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="postcode">Postcode *</Label>
            <Input
              id="postcode"
              placeholder="e.g. SW1A 1AA"
              value={formData.postcode}
              onChange={(e) =>
                setFormData({ ...formData, postcode: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="distance">Distance *</Label>
            <Select
              value={formData.distance}
              onValueChange={(value) =>
                setFormData({ ...formData, distance: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select distance" />
              </SelectTrigger>
              <SelectContent>
                {distanceOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mileage">Max Mileage</Label>
            <Input
              id="mileage"
              type="number"
              placeholder="e.g. 50000"
              value={formData.maxMileage}
              onChange={(e) =>
                setFormData({ ...formData, maxMileage: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Max Price (£)</Label>
            <Input
              id="price"
              type="number"
              placeholder="e.g. 25000"
              value={formData.maxPrice}
              onChange={(e) =>
                setFormData({ ...formData, maxPrice: e.target.value })
              }
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-primary">
          <Search className="h-4 w-4 mr-2" />
          Search Cars
        </Button>
      </form>
    </div>
  );
};

export default CarSearchForm;
