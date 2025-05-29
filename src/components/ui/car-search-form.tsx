import React, { useState } from "react";
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

interface SearchFormData {
  make: string;
  model: string;
  maxMileage: string;
  maxPrice: string;
}

const CarSearchForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SearchFormData>({
    make: "",
    model: "",
    maxMileage: "",
    maxPrice: "",
  });

  const carMakes = [
    "Toyota",
    "Honda",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Volkswagen",
    "Ford",
    "Nissan",
    "Hyundai",
    "Kia",
    "Mazda",
    "Subaru",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();

    if (formData.make) searchParams.set("make", formData.make);
    if (formData.model) searchParams.set("model", formData.model);
    if (formData.maxMileage)
      searchParams.set("maxMileage", formData.maxMileage);
    if (formData.maxPrice) searchParams.set("maxPrice", formData.maxPrice);

    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <div className=" max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2  gap-4">
          <div className="space-y-2">
            <Label htmlFor="make">Make</Label>
            <Select
              value={formData.make}
              onValueChange={(value) =>
                setFormData({ ...formData, make: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select make" />
              </SelectTrigger>
              <SelectContent>
                {carMakes.map((make) => (
                  <SelectItem key={make} value={make}>
                    {make}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Input
              id="model"
              placeholder="Enter model"
              value={formData.model}
              onChange={(e) =>
                setFormData({ ...formData, model: e.target.value })
              }
            />
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
