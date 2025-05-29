import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CarCard from "@/components/ui/car-card";
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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useCarData } from "@/hooks/useCarData";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCarSearch } from "@/hooks/useCarSearch";
import { getCarValuation, calculatePriceTag } from "@/utils/valuationApi";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [carValuations, setCarValuations] = useState<Record<string, { estimatedPrice: number; priceTag: "good" | "fair" | "high" }>>({});
  const itemsPerPage = 12;
  const isMobile = useIsMobile();

  // Session-based valuation count - persists across page reloads
  const [valuationCount, setValuationCount] = useState(() => {
    const stored = sessionStorage.getItem('valuationCount');
    return stored ? parseInt(stored) : 0;
  });

  // Update sessionStorage whenever valuationCount changes
  useEffect(() => {
    sessionStorage.setItem('valuationCount', valuationCount.toString());
  }, [valuationCount]);

  // Use the car search hook
  const { 
    results, 
    totalItems, 
    loading, 
    error, 
    currentPage, 
    searchNextPage,
    hasResults 
  } = useCarSearch();

  // Use the car data hook for filter options
  const { manufacturers, models, loading: carDataLoading, error: carDataError, fetchModelsForManufacturer } = useCarData();

  // Filter states for the sheet - sync with current search params
  const [tempFilters, setTempFilters] = useState({
    make: "",
    model: "",
    postcode: "",
    distance: "",
    minPrice: "",
    maxPrice: "",
    minYear: "",
    maxYear: "",
    maxMileage: "",
    fuelType: "",
    transmission: "",
    bodyType: "",
    doors: "",
    engineSize: "",
    color: "",
  });

  // Update tempFilters when searchParams change
  useEffect(() => {
    setTempFilters({
      make: searchParams.get("make") || "",
      model: searchParams.get("model") || "",
      postcode: searchParams.get("postcode") || "",
      distance: searchParams.get("distance") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
      minYear: searchParams.get("minYear") || "",
      maxYear: searchParams.get("maxYear") || "",
      maxMileage: searchParams.get("maxMileage") || "",
      fuelType: searchParams.get("fuelType") || "",
      transmission: searchParams.get("transmission") || "",
      bodyType: searchParams.get("bodyType") || "",
      doors: searchParams.get("doors") || "",
      engineSize: searchParams.get("engineSize") || "",
      color: searchParams.get("color") || "",
    });
  }, [searchParams]);

  const handleFilterMakeChange = (value: string) => {
    console.log("Filter make changed to:", value);
    const makeValue = value === "any" ? "" : value;
    setTempFilters(prev => ({ ...prev, make: makeValue, model: "" }));
    
    // Fetch models for the selected manufacturer
    if (value !== "any") {
      const selectedManufacturer = manufacturers.find(m => m.name === value);
      if (selectedManufacturer) {
        fetchModelsForManufacturer(selectedManufacturer.id);
      }
    }
  };

  const handleFilterModelChange = (value: string) => {
    console.log("Filter model changed to:", value);
    const modelValue = value === "any" ? "" : value;
    setTempFilters(prev => ({ ...prev, model: modelValue }));
  };

  const handleCardClick = (result: any) => {
    // Show sign-in modal instead of opening AutoTrader link
    setShowSignIn(true);
  };

  const handleCheckValuation = async (result: any) => {
    // Check if user has exceeded the 3 valuation limit FIRST
    if (valuationCount >= 3) {
      setShowSignIn(true);
      return;
    }

    // Increment the valuation count immediately when button is clicked
    setValuationCount(prev => prev + 1);

    try {
      const response = await getCarValuation(result);
      
      if (response.results.StatusCode === "Success") {
        const estimatedPrice = response.results.DataItems.ValuationList.DealerForecourt;
        const currentPrice = parseInt(result.Price);
        const priceTag = calculatePriceTag(currentPrice, estimatedPrice);
        
        // Store the valuation result
        const carKey = `${result.Link}-${result.Name}`;
        setCarValuations(prev => ({
          ...prev,
          [carKey]: { estimatedPrice, priceTag }
        }));
      }
    } catch (error) {
      console.error("Error getting car valuation:", error);
      // If API call fails, we still keep the count incremented
      // This prevents users from spamming failed requests
    }
  };

  const handleFavorite = (result: any) => {
    setShowSignIn(true);
  };

  const handleAddToList = (result: any) => {
    setShowSignIn(true);
  };

  const removeSearchParam = (param: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(param);
    
    // If removing make, also remove model
    if (param === "make") {
      newParams.delete("model");
    }
    
    setSearchParams(newParams);
  };

  const getSearchTags = () => {
    const tags = [];
    const make = searchParams.get("make");
    const model = searchParams.get("model");
    const maxMileage = searchParams.get("maxMileage");
    const maxPrice = searchParams.get("maxPrice");
    const distance = searchParams.get("distance");
    const minPrice = searchParams.get("minPrice");
    const minYear = searchParams.get("minYear");
    const maxYear = searchParams.get("maxYear");
    const fuelType = searchParams.get("fuelType");
    const transmission = searchParams.get("transmission");
    const bodyType = searchParams.get("bodyType");
    const doors = searchParams.get("doors");
    const color = searchParams.get("color");

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
    if (minPrice)
      tags.push({
        label: `Min Price: £${parseInt(minPrice).toLocaleString()}`,
        param: "minPrice",
      });
    if (distance) {
      const distanceLabel = distance === "national" ? "National" : `${distance} miles`;
      tags.push({ label: `Distance: ${distanceLabel}`, param: "distance" });
    }
    if (minYear) tags.push({ label: `From Year: ${minYear}`, param: "minYear" });
    if (maxYear) tags.push({ label: `To Year: ${maxYear}`, param: "maxYear" });
    if (fuelType) tags.push({ label: `Fuel: ${fuelType}`, param: "fuelType" });
    if (transmission) tags.push({ label: `Transmission: ${transmission}`, param: "transmission" });
    if (bodyType) tags.push({ label: `Body: ${bodyType}`, param: "bodyType" });
    if (doors) tags.push({ label: `Doors: ${doors}`, param: "doors" });
    if (color) tags.push({ label: `Color: ${color}`, param: "color" });

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
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const searchTags = getSearchTags();
  const hasSearchTags = searchTags.length > 0;

  // Filter content component to avoid duplication
  const FilterContent = () => (
    <div className="space-y-6 py-6">
      {/* Location Filters */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Location</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Postcode *
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
              <option value="200">Within 200 miles</option>
              <option value="national">National</option>
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
              value={tempFilters.make || "any"}
              onValueChange={handleFilterMakeChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Any Make" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Make</SelectItem>
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
              value={tempFilters.model || "any"}
              onValueChange={handleFilterModelChange}
              disabled={!tempFilters.make}
            >
              <SelectTrigger className={!tempFilters.make ? "opacity-50" : ""}>
                <SelectValue 
                  placeholder={!tempFilters.make ? "Select make first" : "Any Model"} 
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Model</SelectItem>
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
  );

  const FilterFooter = () => (
    <div className="flex flex-col gap-2 pt-4">
      <Button onClick={applyFilters} className="w-full">
        Apply Filters
      </Button>
      {isMobile ? (
        <DrawerClose asChild>
          <Button variant="outline" className="w-full">
            Cancel
          </Button>
        </DrawerClose>
      ) : (
        <SheetClose asChild>
          <Button variant="outline" className="w-full">
            Cancel
          </Button>
        </SheetClose>
      )}
    </div>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24">
        {/* Results Header */}
        <div className="mb-6">
          {loading ? (
            <p className="text-gray-600">Searching cars...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : (
            <p className="text-gray-600">
              Found {totalItems.toLocaleString()} cars matching your criteria
              {valuationCount > 0 && (
                <span className="ml-4 text-sm text-blue-600">
                  Valuations used: {valuationCount}/3
                </span>
              )}
            </p>
          )}

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className={`flex flex-col-reverse md:flex-row gap-2 w-full ${hasSearchTags ? 'justify-between' : 'justify-start'}`}>
              {/* Search Tags */}
              {hasSearchTags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {searchTags.map((tag, index) => (
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
                {/* Sort Dropdown */}
                <div className="w-48">
                  <Select
                    value={searchParams.get("sort") || "most-recent"}
                    onValueChange={(value) => {
                      const newParams = new URLSearchParams(searchParams);
                      if (value && value !== "most-recent") {
                        newParams.set("sort", value);
                      } else {
                        newParams.delete("sort");
                      }
                      setSearchParams(newParams);
                    }}
                  >
                    <SelectTrigger>
                      <div className="flex items-center gap-2">
                        <SortAsc className="h-4 w-4" />
                        <SelectValue placeholder="Sort by" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="most-recent">Most Recent</SelectItem>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="distance">Distance</SelectItem>
                      <SelectItem value="mileage">Mileage</SelectItem>
                      <SelectItem value="year-dsc">Year: Newest First</SelectItem>
                      <SelectItem value="year-asc">Year: Oldest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Mobile Drawer and Desktop Sheet for filters */}
                {isMobile ? (
                  <Drawer open={showFilters} onOpenChange={setShowFilters}>
                    <DrawerTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex w-full sm:w-48 items-center gap-2"
                      >
                        <Filter className="h-4 w-4" />
                        Filters
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent className="max-h-[85vh]">
                      <DrawerHeader>
                        <DrawerTitle>Filter Cars</DrawerTitle>
                        <DrawerDescription>
                          Refine your search with additional filters
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="overflow-y-auto px-4">
                        <FilterContent />
                      </div>
                      <DrawerFooter>
                        <FilterFooter />
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                ) : (
                  /* Desktop Sheet */
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
                      <FilterContent />
                      <SheetFooter>
                        <FilterFooter />
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Car Cards Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : hasResults ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {results.map((result, index) => {
              const carKey = `${result.Link}-${result.Name}`;
              const valuation = carValuations[carKey];
              
              return (
                <CarCard
                  key={`${result.Link}-${index}`}
                  make={result.Name.split(' ')[0] || 'Unknown'}
                  model={result.Name.split(' ').slice(1).join(' ') || result.Desc}
                  year={result.Year}
                  price={parseInt(result.Price) || 0}
                  mileage={result.Mileage || 0}
                  image={result.Image}
                  estimatedPrice={valuation?.estimatedPrice}
                  priceTag={valuation?.priceTag}
                  carData={result}
                  onClick={() => handleCardClick(result)}
                  onCheckValuation={() => handleCheckValuation(result)}
                  onFavorite={() => handleFavorite(result)}
                  onAddToList={() => handleAddToList(result)}
                  showValuation={false}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No cars found</h3>
            <p className="text-gray-600">
              {searchParams.get("postcode") 
                ? "Try adjusting your search criteria" 
                : "Please enter a postcode to search"}
            </p>
          </div>
        )}

        {/* Pagination - Hide when loading */}
        {!loading && totalPages > 1 && hasResults && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => searchNextPage(Math.max(1, currentPage - 1))}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
                {[...Array(Math.min(5, totalPages))].map((_, i) => {
                  const pageNum = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
                  if (pageNum > totalPages) return null;
                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        onClick={() => searchNextPage(pageNum)}
                        isActive={currentPage === pageNum}
                        className="cursor-pointer"
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      searchNextPage(Math.min(totalPages, currentPage + 1))
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

        {/* Sign In Modal */}
        <Dialog open={showSignIn} onOpenChange={setShowSignIn}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Sign In Required</DialogTitle>
              <DialogDescription>
                {valuationCount >= 3 
                  ? "You've used all 3 free valuations. Please sign in to continue."
                  : "Please sign in to view car details and access premium features."
                }
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col space-y-4 mt-4">
              <Button className="w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
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
