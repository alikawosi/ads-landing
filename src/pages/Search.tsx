
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CarCard from "@/components/ui/car-card";
import CarSearchForm from "@/components/ui/car-search-form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, SortAsc, X } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  image: string;
}

const mockCars: Car[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: 24500,
    mileage: 15000,
    image: "/placeholder.svg"
  },
  {
    id: "2",
    make: "Honda",
    model: "Accord",
    year: 2023,
    price: 28900,
    mileage: 8500,
    image: "/placeholder.svg"
  },
  {
    id: "3",
    make: "BMW",
    model: "3 Series",
    year: 2021,
    price: 35000,
    mileage: 22000,
    image: "/placeholder.svg"
  },
  {
    id: "4",
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2022,
    price: 42000,
    mileage: 12000,
    image: "/placeholder.svg"
  },
  {
    id: "5",
    make: "Audi",
    model: "A4",
    year: 2023,
    price: 38500,
    mileage: 6000,
    image: "/placeholder.svg"
  },
  {
    id: "6",
    make: "Ford",
    model: "Focus",
    year: 2020,
    price: 18900,
    mileage: 35000,
    image: "/placeholder.svg"
  },
  {
    id: "7",
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    price: 22000,
    mileage: 18000,
    image: "/placeholder.svg"
  },
  {
    id: "8",
    make: "Honda",
    model: "Civic",
    year: 2020,
    price: 19500,
    mileage: 25000,
    image: "/placeholder.svg"
  }
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [sortBy, setSortBy] = useState<string>("price-low");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSignIn, setShowSignIn] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    const make = searchParams.get('make');
    const model = searchParams.get('model');
    const maxMileage = searchParams.get('maxMileage');
    const maxPrice = searchParams.get('maxPrice');

    let filtered = mockCars;

    if (make) {
      filtered = filtered.filter(car => car.make.toLowerCase().includes(make.toLowerCase()));
    }
    if (model) {
      filtered = filtered.filter(car => car.model.toLowerCase().includes(model.toLowerCase()));
    }
    if (maxMileage) {
      filtered = filtered.filter(car => car.mileage <= parseInt(maxMileage));
    }
    if (maxPrice) {
      filtered = filtered.filter(car => car.price <= parseInt(maxPrice));
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

  const handleViewDetails = () => {
    setShowSignIn(true);
  };

  const handleCheckValuation = () => {
    setShowSignIn(true);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCars = filteredCars.slice(startIndex, endIndex);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Search Form */}
        <div className="mb-8">
          <CarSearchForm />
        </div>

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
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SortAsc className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
                  <SelectItem value="mileage-high">Mileage: High to Low</SelectItem>
                  <SelectItem value="year-new">Year: Newest First</SelectItem>
                  <SelectItem value="year-old">Year: Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Car Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentCars.map((car) => (
            <CarCard
              key={car.id}
              make={car.make}
              model={car.model}
              year={car.year}
              price={car.price}
              mileage={car.mileage}
              image={car.image}
              onViewDetails={handleViewDetails}
              onCheckValuation={handleCheckValuation}
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
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
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
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
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
              Please sign in or create an account to view car details and check valuations.
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
    </Layout>
  );
};

export default Search;
