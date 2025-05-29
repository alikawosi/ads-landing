
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchCars } from '@/utils/searchApi';

interface SearchResult {
  Name: string;
  Desc: string;
  Link: string;
  Details: string[];
  Year: number;
  Mileage: number | null;
  Price: string;
  Image: string;
}

interface SearchFilters {
  make?: string;
  model?: string;
  postcode?: string;
  distance?: string;
  minPrice?: string;
  maxPrice?: string;
  minYear?: string;
  maxYear?: string;
  maxMileage?: string;
  fuelType?: string;
  transmission?: string;
  bodyType?: string;
  doors?: string;
  engineSize?: string;
  color?: string;
  sort?: string;
}

export const useCarSearch = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState<SearchResult[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getFiltersFromParams = (): SearchFilters => {
    const filters: SearchFilters = {};
    
    // Extract all filter parameters from URL
    const make = searchParams.get("make");
    const model = searchParams.get("model");
    const postcode = searchParams.get("postcode");
    const distance = searchParams.get("distance");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const minYear = searchParams.get("minYear");
    const maxYear = searchParams.get("maxYear");
    const maxMileage = searchParams.get("maxMileage");
    const fuelType = searchParams.get("fuelType");
    const transmission = searchParams.get("transmission");
    const bodyType = searchParams.get("bodyType");
    const doors = searchParams.get("doors");
    const color = searchParams.get("color");
    const sort = searchParams.get("sort");

    if (make) filters.make = make;
    if (model) filters.model = model;
    if (postcode) filters.postcode = postcode;
    if (distance) filters.distance = distance;
    if (minPrice) filters.minPrice = minPrice;
    if (maxPrice) filters.maxPrice = maxPrice;
    if (minYear) filters.minYear = minYear;
    if (maxYear) filters.maxYear = maxYear;
    if (maxMileage) filters.maxMileage = maxMileage;
    if (fuelType) filters.fuelType = fuelType;
    if (transmission) filters.transmission = transmission;
    if (bodyType) filters.bodyType = bodyType;
    if (doors) filters.doors = doors;
    if (color) filters.color = color;
    if (sort) filters.sort = sort;

    return filters;
  };

  const performSearch = async (page: number = 1) => {
    const filters = getFiltersFromParams();
    
    // Only require postcode now (distance is optional)
    if (!filters.postcode) {
      setResults([]);
      setTotalItems(0);
      setError("Postcode is required for search");
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      console.log("Performing search with filters:", filters);
      const response = await searchCars(filters, page);
      console.log("Search response received:", response);
      
      setResults(response.results);
      setTotalItems(response.total_items);
      setCurrentPage(page);
    } catch (err) {
      console.error("Search error:", err);
      
      let errorMessage = 'Failed to search cars';
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      setResults([]);
      setTotalItems(0);
    } finally {
      setLoading(false);
    }
  };

  // Trigger search when search parameters change
  useEffect(() => {
    console.log("Search params changed, triggering search");
    performSearch(1); // Always start from page 1 when filters change
  }, [searchParams]);

  const searchNextPage = (page: number) => {
    performSearch(page);
  };

  return {
    results,
    totalItems,
    loading,
    error,
    currentPage,
    performSearch,
    searchNextPage,
    hasResults: results.length > 0
  };
};
