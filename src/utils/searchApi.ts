
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

interface ApiResponse {
  results: SearchResult[];
  total_items: number;
}

const BASE_URL = "https://api.autodealersolution.com";
const AUTOTRADER_BASE = "https://www.autotrader.co.uk/car-search";

export const buildAutoTraderUrl = (filters: SearchFilters, page: number = 1): string => {
  const params = new URLSearchParams();
  
  // Always include these defaults
  params.set("advertising-location", "at_cars");
  params.set("seller-type", "private");
  params.set("homeDeliveryAdverts", "include");
  params.set("sort", filters.sort || "most-recent");
  
  // Add page number (AutoTrader uses 1-based pagination)
  if (page > 1) {
    params.set("page", page.toString());
  }
  
  // Add filters if they exist
  if (filters.make) params.set("make", filters.make);
  if (filters.model) params.set("model", filters.model);
  if (filters.postcode) params.set("postcode", filters.postcode);
  // Only add radius if distance is not "national"
  if (filters.distance && filters.distance !== "national") {
    params.set("radius", filters.distance);
  }
  if (filters.minPrice) params.set("price-from", filters.minPrice);
  if (filters.maxPrice) params.set("price-to", filters.maxPrice);
  if (filters.minYear) params.set("year-from", filters.minYear);
  if (filters.maxYear) params.set("year-to", filters.maxYear);
  if (filters.maxMileage) params.set("maximum-mileage", filters.maxMileage);
  if (filters.fuelType) params.set("fuel-type", filters.fuelType);
  if (filters.transmission) params.set("transmission", filters.transmission);
  if (filters.bodyType) params.set("body-type", filters.bodyType);
  if (filters.doors) params.set("quantity-of-doors", filters.doors);
  if (filters.color) params.set("colour", filters.color);
  
  return `${AUTOTRADER_BASE}?${params.toString()}`;
};

export const searchCars = async (filters: SearchFilters, page: number = 1): Promise<ApiResponse> => {
  const autoTraderUrl = buildAutoTraderUrl(filters, page);
  console.log("Generated AutoTrader URL:", autoTraderUrl);
  
  const apiUrl = `${BASE_URL}/dealer/search/cars`;
  
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: autoTraderUrl
      })
    });
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data: ApiResponse = await response.json();
    console.log("API Response:", data);
    
    return data;
  } catch (error) {
    console.error("Error searching cars:", error);
    throw error;
  }
};
