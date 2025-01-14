import { useEffect, useRef, useState } from "react";
import { Dictionary } from "../types";
import { fetchDataDictionary } from "../services/fetchDataDictionary";

const cache = new Map<string, Dictionary | null>();

const useSearch = (search: string) => {
  const [data, setData] = useState<Dictionary | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(true);
  const isFirstSearch = useRef(true);

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = false;
      setMessage("What do you want to search?");
      return;
    }

    if (search.startsWith(" ")) {
      setError(true);
      setMessage("The word should not start with a space");
      return;
    }

    if (search === "") {
      setError(true);
      setMessage("The word should not be empty");
      return;
    }

    async function fetchData() {
      setLoading(true);
      setError(false);
      if (cache.has(search)) {
        setData(cache.get(search) || null);
        setLoading(false);
        setError(false);
        return;
      }

      try {
        const dataFetch = await fetchDataDictionary({ search });
        setData(dataFetch);
        setMessage(null);
        setError(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
            setMessage("Word not found");
        } else {
          setMessage("An unknown error occurred.");
        }
        setData(null);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [search]);

  return { data, message, error, loading };
};


export default useSearch;