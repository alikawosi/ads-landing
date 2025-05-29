
const BASE_URL = "https://api.autodealersolution.com";

interface ValuationRequest {
  id: null;
  link: string;
  name: string;
  description: string;
  year: number;
  mileage: number | null;
  price: string;
  image_url: string;
  details: string;
  search_request_id: string;
  created_at: string;
  estimated_value: null;
  reg_number: null;
  estimator: null;
  price_tag: null;
}

interface ValuationResponse {
  results: {
    StatusCode: string;
    DataItems: {
      ValuationList: {
        DealerForecourt: number;
      };
    };
  };
  reg_number: string;
  estimator: string;
}

export const getCarValuation = async (carData: any): Promise<ValuationResponse> => {
  // Transform the search result data to the required format
  const valuationRequest: ValuationRequest = {
    id: null,
    link: carData.Link,
    name: carData.Name,
    description: carData.Desc,
    year: carData.Year,
    mileage: carData.Mileage,
    price: carData.Price,
    image_url: carData.Image,
    details: JSON.stringify(carData.Details),
    search_request_id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
    estimated_value: null,
    reg_number: null,
    estimator: null,
    price_tag: null
  };

  const response = await fetch(`${BASE_URL}/dealer/valuation/car`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(valuationRequest)
  });

  if (!response.ok) {
    throw new Error(`Valuation API request failed: ${response.status}`);
  }

  return response.json();
};

export const calculatePriceTag = (currentPrice: number, estimatedPrice: number): "good" | "fair" | "high" => {
  const difference = currentPrice - estimatedPrice;
  const percentageDifference = (difference / estimatedPrice) * 100;
  
  if (percentageDifference <= -5) return "good"; // 5% or more below estimated value
  if (percentageDifference >= 10) return "high"; // 10% or more above estimated value
  return "fair"; // Within reasonable range
};
