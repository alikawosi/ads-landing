
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
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

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
  const [showValuation, setShowValuation] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const itemsPerPage = 10; // Increased to show more cards per page

  // Filter states for the drawer
  const [tempFilters, setTempFilters] = useState({
    minPrice: "",
    maxPrice: "",
    minYear: "",
    maxYear: "",
    fuelType: "",
    transmission: "",
  });

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
    const carIndex = mockCars.findIndex(c => c.id === car.id);
    if (carIndex < 3 && car.estimatedPrice) {
      setSelectedCar(car);
      setShowValuation(true);
    } else {
      setShowSignIn(true);
    }
  };

  const handleCheckValuation = (car: Car) => {
    const carIndex = mockCars.findIndex(c => c.id === car.id);
    if (carIndex < 3 && car.estimatedPrice) {
      setSelectedCar(car);
      setShowValuation(true);
    } else {
      setShowSignIn(true);
    }
  };

  const handleViewDetails = () => {
    setShowSignIn(true);
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
    const postcode = searchParams.get("postcode");
    const distance = searchParams.get("distance");

    if (make) tags.push({ label: `Make: ${make}`, param: "make" });
    if (model) tags.push({ label: `Model: ${model}`, param: "model" });
    if (maxMileage) tags.push({ label: `Max Mileage: ${parseInt(maxMileage).toLocaleString()}`, param: "maxMileage" });
    if (maxPrice) tags.push({ label: `Max Price: £${parseInt(maxPrice).toLocaleString()}`, param: "maxPrice" });
    if (postcode) tags.push({ label: `Postcode: ${postcode}`, param: "postcode" });
    if (distance) tags.push({ label: `Distance: ${distance} miles`, param: "distance" });

    return tags;
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCars = filteredCars.slice(startIndex, endIndex);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Search Results</h1>
              <p className="text-gray-600">
                Found {filteredCars.length} cars matching your criteria
              </p>
            </div>
            <div className="flex gap-2">
              <Sheet open={showFilters} onOpenChange={setShowFilters}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Cars</SheetTitle>
                    <SheetDescription>
                      Refine your search with additional filters
                    </SheetDescription>
                  </SheetHeader>
                  <div className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Price Range</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          placeholder="Min"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={tempFilters.minPrice}
                          onChange={(e) => setTempFilters({...tempFilters, minPrice: e.target.value})}
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={tempFilters.maxPrice}
                          onChange={(e) => setTempFilters({...tempFilters, maxPrice: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Year Range</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          placeholder="From"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={tempFilters.minYear}
                          onChange={(e) => setTempFilters({...tempFilters, minYear: e.target.value})}
                        />
                        <input
                          type="number"
                          placeholder="To"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={tempFilters.maxYear}
                          onChange={(e) => setTempFilters({...tempFilters, maxYear: e.target.value})}
                        />
                      </div>
                    </div>
                    <Button className="w-full mt-6" onClick={() => setShowFilters(false)}>
                      Apply Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SortAsc className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
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

          {/* Search Tags */}
          {getSearchTags().length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {getSearchTags().map((tag, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {tag.label}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-red-500"
                    onClick={() => removeSearchParam(tag.param)}
                  />
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Car Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
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
              onViewDetails={handleViewDetails}
              onCheckValuation={() => handleCheckValuation(car)}
              showValuation={mockCars.findIndex(c => c.id === car.id) < 3}
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
      </div>

      {/* Sign In Modal */}
      {showSignIn && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowSignIn(false)}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSignIn(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6">Sign In Required</h2>
            <p className="text-gray-600 mb-6">
              Please sign in or create an account to view car details and check
              valuations.
            </p>
            <div className="space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Sign In
              </Button>
              <Button variant="outline" className="w-full">
                Create Account
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Valuation Modal */}
      {showValuation && selectedCar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowValuation(false)}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowValuation(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6">Car Valuation</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold">{selectedCar.make} {selectedCar.model}</h3>
                <p className="text-gray-600">{selectedCar.year} • {selectedCar.mileage.toLocaleString()} miles</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Listed Price:</span>
                  <span className="font-semibold">£{selectedCar.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Value:</span>
                  <span className="font-semibold">£{selectedCar.estimatedPrice?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span>Price Rating:</span>
                  <Badge variant={selectedCar.priceTag === "good" ? "default" : selectedCar.priceTag === "fair" ? "secondary" : "destructive"} className="capitalize">
                    {selectedCar.priceTag}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Search;
