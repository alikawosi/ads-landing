import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CarCard from "@/components/ui/car-card";
import CarSearchForm from "@/components/ui/car-search-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, SortAsc, X } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useCarData } from "@/hooks/useCarData";

interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  image: string;
  estimatedPrice?: number;
  priceTag?: "good" | "fair" | "high";
}

const mockCars: Car[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: 24500,
    mileage: 15000,
    image: "/placeholder.svg",
    estimatedPrice: 25000,
    priceTag: "good",
  },
  {
    id: "2",
    make: "Honda",
    model: "Accord",
    year: 2023,
    price: 28900,
    mileage: 8500,
    image: "/placeholder.svg",
    estimatedPrice: 27500,
    priceTag: "fair",
  },
  {
    id: "3",
    make: "BMW",
    model: "3 Series",
    year: 2021,
    price: 35000,
    mileage: 22000,
    image: "/placeholder.svg",
    estimatedPrice: 32000,
    priceTag: "high",
  },
  {
    id: "4",
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2022,
    price: 42000,
    mileage: 12000,
    image: "/placeholder.svg",
  },
  {
    id: "5",
    make: "Audi",
    model: "A4",
    year: 2023,
    price: 38500,
    mileage: 6000,
    image: "/placeholder.svg",
  },
  {
    id: "6",
    make: "Ford",
    model: "Focus",
    year: 2020,
    price: 18900,
    mileage: 35000,
    image: "/placeholder.svg",
  },
  {
    id: "7",
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    price: 22000,
    mileage: 18000,
    image: "/placeholder.svg",
  },
  {
    id: "8",
    make: "Honda",
    model: "Civic",
    year: 2020,
    price: 19500,
    mileage: 25000,
    image: "/placeholder.svg",
  },
];

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [sortBy, setSortBy] = useState<string>("price-low");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSignIn, setShowSignIn] = useState(false);
  const itemsPerPage = 12;

  // Use the car data hook
  const { manufacturers, models, loading: carDataLoading, error: carDataError, fetchModelsForManufacturer } = useCarData();

  // Filter states for the sheet
  const [tempFilters, setTempFilters] = useState({
    make: searchParams.get("make") || "",
    model: searchParams.get("model") || "",
    postcode: searchParams.get("postcode") || "",
    distance: searchParams.get("distance") || "",
    minPrice: "",
    maxPrice: searchParams.get("maxPrice") || "",
    minYear: "",
    maxYear: "",
    maxMileage: searchParams.get("maxMileage") || "",
    fuelType: "",
    transmission: "",
    bodyType: "",
    doors: "",
    engineSize: "",
    color: "",
  });

  const handleFilterMakeChange = (value: string) => {
    console.log("Filter make changed to:", value);
    setTempFilters(prev => ({ ...prev, make: value, model: "" }));
    
    // Fetch models for the selected manufacturer
    const selectedManufacturer = manufacturers.find(m => m.name === value);
    if (selectedManufacturer) {
      fetchModelsForManufacturer(selectedManufacturer.id);
    }
  };

  const handleFilterModelChange = (value: string) => {
    console.log("Filter model changed to:", value);
    setTempFilters(prev => ({ ...prev, model: value }));
  };

  useEffect(() => {
    const make = searchParams.get("make");
    const model = searchParams.get("model");
    const maxMileage = searchParams.get("maxMileage");
    const maxPrice = searchParams.get("maxPrice");

    let filtered = mockCars;

    if (make) {
      filtered = filtered.filter((car) =>
        car.make.toLowerCase().includes(make.toLowerCase())
      );
    }
    if (model) {
      filtered = filtered.filter((car) =>
        car.model.toLowerCase().includes(model.toLowerCase())
      );
    }
    if (maxMileage) {
      filtered = filtered.filter((car) => car.mileage <= parseInt(maxMileage));
    }
    if (maxPrice) {
      filtered = filtered.filter((car) => car.price <= parseInt(maxPrice));
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "mileage-low":
        filtered.sort((a, b) => a.mileage - b.mileage);
        break;
      case "mileage-high":
        filtered.sort((a, b) => b.mileage - a.mileage);
        break;
      case "year-new":
        filtered.sort((a, b) => b.year - a.year);
        break;
      case "year-old":
        filtered.sort((a, b) => a.year - b.year);
        break;
    }

    setFilteredCars(filtered);
    setCurrentPage(1);
  }, [searchParams, sortBy]);

  const handleCardClick = (car: Car) => {
    setShowSignIn(true);
  };

  const handleCheckValuation = (car: Car) => {
    const carIndex = mockCars.findIndex((c) => c.id === car.id);
    if (carIndex >= 3) {
      setShowSignIn(true);
    }
  };

  const removeSearchParam = (param: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(param);
    setSearchParams(newParams);
  };

  const getSearchTags = () => {
    const tags = [];
    const make = searchParams.get("make");
    const model = searchParams.get("model");
    const maxMileage = searchParams.get("maxMileage");
    const maxPrice = searchParams.get("maxPrice");

    if (make) tags.push({ label: `Make: ${make}`, param: "make" });
    if (model) tags.push({ label: `Model: ${model}`, param: "model" });
    if (maxMileage)
      tags.push({
        label: `Max Mileage: ${parseInt(maxMileage).toLocaleString()}`,
        param: "maxMileage",
      });
    if (maxPrice)
      tags.push({
        label: `Max Price: £${parseInt(maxPrice).toLocaleString()}`,
        param: "maxPrice",
      });

    return tags;
  };

  const applyFilters = () => {
    const newParams = new URLSearchParams(searchParams);

    // Update URL params with filter values
    Object.entries(tempFilters).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });

    setSearchParams(newParams);
    setShowFilters(false);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCars = filteredCars.slice(startIndex, endIndex);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24">
        {/* Results Header */}
        <div className="mb-6">
          <p className="text-gray-600 block">
            Found {filteredCars.length} cars matching your criteria
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col-reverse md:flex-row gap-2  justify-between w-full">
              {/* Search Tags */}
              {getSearchTags().length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {getSearchTags().map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="flex items-center px-4 py-2 cursor-default gap-1 bg-blue-50 text-blue-700 border-blue-200"
                    >
                      {tag.label}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => removeSearchParam(tag.param)}
                      />
                    </Badge>
                  ))}
                </div>
              )}

              <div className="flex justify-center items-center gap-2">
                <Sheet open={showFilters} onOpenChange={setShowFilters}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex w-48 items-center gap-2"
                    >
                      <Filter className="h-4 w-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-full sm:max-w-md overflow-y-auto"
                  >
                    <SheetHeader>
                      <SheetTitle>Filter Cars</SheetTitle>
                      <SheetDescription>
                        Refine your search with additional filters
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-6 py-6">
                      {/* Location Filters */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Location</h3>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Postcode
                            </label>
                            <input
                              type="text"
                              placeholder="Enter postcode"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              value={tempFilters.postcode}
                              onChange={(e) =>
                                setTempFilters({
                                  ...tempFilters,
                                  postcode: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Distance
                            </label>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              value={tempFilters.distance}
                              onChange={(e) =>
                                setTempFilters({
                                  ...tempFilters,
                                  distance: e.target.value,
                                })
                              }
                            >
                              <option value="">Select distance</option>
                              <option value="5">Within 5 miles</option>
                              <option value="10">Within 10 miles</option>
                              <option value="25">Within 25 miles</option>
                              <option value="50">Within 50 miles</option>
                              <option value="100">Within 100 miles</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* Make and Model */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Make & Model</h3>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Make</label>
                            <Select
                              value={tempFilters.make}
                              onValueChange={handleFilterMakeChange}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Any Make" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="">Any Make</SelectItem>
                                {manufacturers.map((manufacturer) => (
                                  <SelectItem key={manufacturer.id} value={manufacturer.name}>
                                    {manufacturer.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Model</label>
                            <Select
                              value={tempFilters.model}
                              onValueChange={handleFilterModelChange}
                              disabled={!tempFilters.make}
                            >
                              <SelectTrigger className={!tempFilters.make ? "opacity-50" : ""}>
                                <SelectValue 
                                  placeholder={!tempFilters.make ? "Select make first" : "Any Model"} 
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="">Any Model</SelectItem>
                                {models.map((model) => (
                                  <SelectItem key={model.id} value={model.name}>
                                    {model.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      {/* Price Range */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Price Range</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Min Price
                            </label>
                            <input
                              type="number"
                              placeholder="£0"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              value={tempFilters.minPrice}
                              onChange={(e) =>
                                setTempFilters({
                                  ...tempFilters,
                                  minPrice: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Max Price
                            </label>
                            <input
                              type="number"
                              placeholder="£100,000"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              value={tempFilters.maxPrice}
                              onChange={(e) =>
                                setTempFilters({
                                  ...tempFilters,
                                  maxPrice: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* Year Range */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Year Range</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              From Year
                            </label>
                            <input
                              type="number"
                              placeholder="2000"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              value={tempFilters.minYear}
                              onChange={(e) =>
                                setTempFilters({
                                  ...tempFilters,
                                  minYear: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              To Year
                            </label>
                            <input
                              type="number"
                              placeholder="2024"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              value={tempFilters.maxYear}
                              onChange={(e) =>
                                setTempFilters({
                                  ...tempFilters,
                                  maxYear: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* Mileage */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Mileage</h3>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Max Mileage
                          </label>
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            value={tempFilters.maxMileage}
                            onChange={(e) =>
                              setTempFilters({
                                ...tempFilters,
                                maxMileage: e.target.value,
                              })
                            }
                          >
                            <option value="">Any Mileage</option>
                            <option value="10000">Under 10,000 miles</option>
                            <option value="25000">Under 25,000 miles</option>
                            <option value="50000">Under 50,000 miles</option>
                            <option value="75000">Under 75,000 miles</option>
                            <option value="100000">Under 100,000 miles</option>
                          </select>
                        </div>
                      </div>
                      {/* Additional Filters */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">
                          Additional Filters
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Fuel Type
                            </label>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              value={tempFilters.fuelType}
                              onChange={(e) =>
                                setTempFilters({
                                  ...tempFilters,
                                  fuelType: e.target.value,
                                })
                              }
                            >
                              <option value="">Any Fuel Type</option>
                              <option value="petrol">Petrol</option>
                              <option value="diesel">Diesel</option>
                              <option value="electric">Electric</option>
                              <option value="hybrid">Hybrid</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Transmission
                            </label>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              value={tempFilters.transmission}
                              onChange={(e) =>
                                setTempFilters({
                                  ...tempFilters,
                                  transmission: e.target.value,
                                })
                              }
                            >
                              <option value="">Any Transmission</option>
                              <option value="manual">Manual</option>
                              <option value="automatic">Automatic</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Body Type
                            </label>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              value={tempFilters.bodyType}
                              onChange={(e) =>
                                setTempFilters({
                                  ...tempFilters,
                                  bodyType: e.target.value,
                                })
                              }
                            >
                              <option value="">Any Body Type</option>
                              <option value="hatchback">Hatchback</option>
                              <option value="saloon">Saloon</option>
                              <option value="estate">Estate</option>
                              <option value="suv">SUV</option>
                              <option value="coupe">Coupe</option>
                              <option value="convertible">Convertible</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Doors</label>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              value={tempFilters.doors}
                              onChange={(e) =>
                                setTempFilters({
                                  ...tempFilters,
                                  doors: e.target.value,
                                })
                              }
                            >
                              <option value="">Any Doors</option>
                              <option value="2">2 Doors</option>
                              <option value="3">3 Doors</option>
                              <option value="4">4 Doors</option>
                              <option value="5">5 Doors</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SheetFooter>
                      <Button onClick={applyFilters} className="w-full">
                        Apply Filters
                      </Button>
                      <SheetClose asChild>
                        <Button variant="outline" className="w-full">
                          Cancel
                        </Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SortAsc className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="mileage-low">
                      Mileage: Low to High
                    </SelectItem>
                    <SelectItem value="mileage-high">
                      Mileage: High to Low
                    </SelectItem>
                    <SelectItem value="year-new">Year: Newest First</SelectItem>
                    <SelectItem value="year-old">Year: Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {currentCars.map((car) => (
            <CarCard
              key={car.id}
              make={car.make}
              model={car.model}
              year={car.year}
              price={car.price}
              mileage={car.mileage}
              image={car.image}
              estimatedPrice={car.estimatedPrice}
              priceTag={car.priceTag}
              onClick={() => handleCardClick(car)}
              onCheckValuation={() => handleCheckValuation(car)}
              showValuation={mockCars.findIndex((c) => c.id === car.id) < 3}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      onClick={() => setCurrentPage(i + 1)}
                      isActive={currentPage === i + 1}
                      className="cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No cars found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Sign In Modal */}
        <Dialog open={showSignIn} onOpenChange={setShowSignIn}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Sign In Required</DialogTitle>
              <DialogDescription>
                Please sign in to view car details and access premium features.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col space-y-4 mt-4">
              <Button className="w-full">Sign In</Button>
              <Button variant="outline" className="w-full">
                Create Account
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Search;
