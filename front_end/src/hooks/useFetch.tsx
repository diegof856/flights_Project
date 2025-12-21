import { useEffect, useState } from "react"

interface Flight {
  id: string;
  aeronave: string;
  matricula: string;
  ondeEsta: string;
  linhaAerea: string;
  paraOndeVai: string;
  data: string;
  saldo: string;
}

export interface FetchResponse {
  data: Flight[];
  total: number;
  page: number;
  totalPages: number;
  hasNextPage: boolean
}
interface FetchResponseById {
  id: string,
  aeronave: string,
  bonus: string,
  data: string,
  ganhosTotais: string,
  linhaAerea: string,
  matricula: string,
  ondeEsta: string,
  paraOndeVai: string;
  xp: number
}
export const useFetchHome = (url: string) => {
  const [data, setData] = useState<FetchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        const json: FetchResponse = await res.json();
        if (isMounted) setData(json);
      } catch (error: any) {
        if (isMounted) setError(error);
      } finally {
        if (isMounted) setLoading(false);
      }


    }
    fetchData();
    return () => { isMounted = false; };
  }, [url])
  return { data, loading, error };
};
export const useFetchById = (url: string) => {
  const [data, setData] = useState<FetchResponseById | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        const json: FetchResponseById = await res.json();
        if (isMounted) setData(json);
      } catch (error: any) {
        if (isMounted) setError(error);
      } finally {
        if (isMounted) setLoading(false);
      }


    }
    fetchData();
    return () => { isMounted = false; };
  }, [url])
  return { data, loading, error };
}