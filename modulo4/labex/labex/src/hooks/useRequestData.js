import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.trips);
      })
      .catch((erro) => {
        alert("Deu erro!");
      });
  }, [url]);

  return [data];
};

