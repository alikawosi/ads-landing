
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface FilterOption {
  id: string;
  name?: string;
  display_name: string;
  value?: string;
  sort_order?: number;
}

export const useFilterData = () => {
  const [bodyTypes, setBodyTypes] = useState<FilterOption[]>([]);
  const [carColors, setCarColors] = useState<FilterOption[]>([]);
  const [doorOptions, setDoorOptions] = useState<FilterOption[]>([]);
  const [fuelTypes, setFuelTypes] = useState<FilterOption[]>([]);
  const [mileageOptions, setMileageOptions] = useState<FilterOption[]>([]);
  const [seatOptions, setSeatOptions] = useState<FilterOption[]>([]);
  const [transmissionTypes, setTransmissionTypes] = useState<FilterOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFilterData();
  }, []);

  const fetchFilterData = async () => {
    try {
      setLoading(true);
      
      // Fetch all filter data in parallel
      const [
        bodyTypesRes,
        carColorsRes,
        doorOptionsRes,
        fuelTypesRes,
        mileageOptionsRes,
        seatOptionsRes,
        transmissionTypesRes
      ] = await Promise.all([
        supabase.from('body_types').select('id, name, display_name').order('display_name'),
        supabase.from('car_colors').select('id, name, display_name').order('display_name'),
        supabase.from('door_options').select('id, value, display_name').order('display_name'),
        supabase.from('fuel_types').select('id, name, display_name').order('display_name'),
        supabase.from('mileage_options').select('id, value, display_name, sort_order').order('sort_order'),
        supabase.from('seat_options').select('id, value, display_name').order('display_name'),
        supabase.from('transmission_types').select('id, name, display_name').order('display_name')
      ]);

      // Check for errors
      if (bodyTypesRes.error) throw bodyTypesRes.error;
      if (carColorsRes.error) throw carColorsRes.error;
      if (doorOptionsRes.error) throw doorOptionsRes.error;
      if (fuelTypesRes.error) throw fuelTypesRes.error;
      if (mileageOptionsRes.error) throw mileageOptionsRes.error;
      if (seatOptionsRes.error) throw seatOptionsRes.error;
      if (transmissionTypesRes.error) throw transmissionTypesRes.error;

      // Set the data
      setBodyTypes(bodyTypesRes.data || []);
      setCarColors(carColorsRes.data || []);
      setDoorOptions(doorOptionsRes.data || []);
      setFuelTypes(fuelTypesRes.data || []);
      setMileageOptions(mileageOptionsRes.data || []);
      setSeatOptions(seatOptionsRes.data || []);
      setTransmissionTypes(transmissionTypesRes.data || []);
      
    } catch (err) {
      console.error('Error fetching filter data:', err);
      setError('Failed to load filter options');
    } finally {
      setLoading(false);
    }
  };

  return {
    bodyTypes,
    carColors,
    doorOptions,
    fuelTypes,
    mileageOptions,
    seatOptions,
    transmissionTypes,
    loading,
    error
  };
};
