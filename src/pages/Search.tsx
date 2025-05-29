
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CarCard from "@/components/ui/car-card";
import { Button } from "@/components/ui/button";

interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  priceTag: "good" | "fair" | "high";
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
    priceTag: "good",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    make: "Honda",
    model: "Accord",
    year: 2023,
    price: 28900,
    mileage: 8500,
    priceTag: "fair",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    make: "BMW",
    model: "3 Series",
    year: 2021,
    price: 35000,
    mileage: 22000,
    priceTag: "high",
    image: "/placeholder.svg"
  },
  {
    id: "4",
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2022,
    price: 42000,
    mileage: 12000,
    priceTag: "fair",
    image: "/placeholder.svg"
  },
  {
    id: "5",
    make: "Audi",
    model: "A4",
    year: 2023,
    price: 38500,
    mileage: 6000,
    priceTag: "good",
    image: "/placeholder.svg"
  },
  {
    id: "6",
    make: "Ford",
    model: "Focus",
    year: 2020,
    price: 18900,
    mileage: 35000,
    priceTag: "good",
    image: "/placeholder.svg"
  }
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [showSignIn, setShowSignIn] = useState(false);

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

    setFilteredCars(filtered);
  }, [searchParams]);

  const handleCheckValuation = () => {
    setShowSignIn(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Search Results</h1>
          <p className="text-gray-600">
            Found {filteredCars.length} cars matching your criteria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="relative">
              <CarCard
                make={car.make}
                model={car.model}
                year={car.year}
                price={car.price}
                mileage={car.mileage}
                priceTag={car.priceTag}
                image={car.image}
              />
              <div className="mt-4">
                <Button 
                  onClick={handleCheckValuation}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Check Valuation
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No cars found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-6">Sign In Required</h2>
            <p className="text-gray-600 mb-6">
              Please sign in or create an account to check car valuations.
            </p>
            <div className="space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Sign In
              </Button>
              <Button variant="outline" className="w-full">
                Create Account
              </Button>
              <Button 
                variant="ghost" 
                className="w-full"
                onClick={() => setShowSignIn(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Search;
