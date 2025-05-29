
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Manufacturer {
  id: string;
  name: string;
}

interface Model {
  id: string;
  name: string;
  manufacturer_id: string;
}

export const useCarData = () => {
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchManufacturers();
  }, []);

  const fetchManufacturers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('manufacturers')
        .select('id, name')
        .order('name');

      if (error) throw error;
      setManufacturers(data || []);
    } catch (err) {
      console.error('Error fetching manufacturers:', err);
      setError('Failed to load car makes');
    } finally {
      setLoading(false);
    }
  };

  const fetchModelsForManufacturer = async (manufacturerId: string) => {
    try {
      const { data, error } = await supabase
        .from('models')
        .select('id, name, manufacturer_id')
        .eq('manufacturer_id', manufacturerId)
        .order('name');

      if (error) throw error;
      setModels(data || []);
    } catch (err) {
      console.error('Error fetching models:', err);
      setError('Failed to load car models');
    }
  };

  return {
    manufacturers,
    models,
    loading,
    error,
    fetchModelsForManufacturer
  };
};
