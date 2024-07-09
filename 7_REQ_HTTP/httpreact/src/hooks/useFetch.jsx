import { useState, useEffect } from "react";

// Custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // Refactoring POST
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // Loading
  const [loading, setLoading] = useState(false);

  // Handling errors
  const [error, setError] = useState(null);

  // Challenge 6
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    async function fetchData() {
      // Start loading
      setLoading(true);

      try {

        const res = await fetch(url);
        const json = await res.json();
        setData(json);

      } catch (error) {

        console.log(error.message);
        setError("Houve algum erro ao carregar os dados!");
        
      }

      // Finish loading
      setLoading(false);
    }

    fetchData();
  }, [url, callFetch]);

  // Refactoring POST and DELETE
  useEffect(() => {
    const httpRequest = async () => {
      let json;

      if (method === "POST") {

        const res = await fetch(url, config);
        json = await res.json();

      } else if (method === "DELETE") {

        const deleteUrl = `${url}/${itemId}`;
        const res = await fetch(deleteUrl, config);
        json = await res.json();

      }

      setCallFetch(json);
    };

    if (config && method) {
      httpRequest();
    }
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};
