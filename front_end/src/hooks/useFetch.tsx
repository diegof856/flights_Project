import { useEffect, useState } from "react"

interface Flight {
  id: string,
  aircraft: string,
  airline: string
  registration: string,
  from: string,
  to: string
  date: string
  sold: string
}

interface FetchResponse {
  date: Flight[];
  total: number;
  page: number;
  totalPages: number;
  hasNextPage: boolean
}
interface FetchResponseById {
  id: string,
  totalEarnings: string,
  xp: number
  bonus: string,
  airline: string,
  aircraft: string,
  from: string,
  to: string
  registration: string,
  date: string
}
interface TotalBalanceResponse{
     totalBalance: string
    totalFlights: number
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
export const useFetchTotal = (url:string) =>{
  const [data, setData] = useState<TotalBalanceResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        const json: TotalBalanceResponse = await res.json();

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