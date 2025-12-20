import { useEffect, useState } from "react"

interface Flight {
  id: string;
  aeronave: string;
  matricula: string;
  ondeEsta: string;
  linhaAerea:string;
  paraOndeVai: string;
  data: string;
  saldo: string;
}

interface FetchResponse {
  data: Flight[];
  total: number;
  totalPages: number;
  hasNextPage:boolean
}

export const useFetch = (url: string) => {
    const [data, setData] = useState<FetchResponse | null>(null);
    const[loading,setLoading] = useState(false);
   const [error, setError] = useState<any>(null);
    useEffect(() => {
      let isMounted = true;
        const fetchData = async () => {
          setLoading(true);

          try {
             const res = await fetch(url);

               const json: FetchResponse = await res.json();
           if (isMounted) setData(json);
          } catch (error:any) {
           if (isMounted) setError(error);
          }finally{
           if (isMounted) setLoading(false);
          }
           
          
        }
        fetchData();
        return () => { isMounted = false; };
    }, [url])
    return { data,loading,error };
};