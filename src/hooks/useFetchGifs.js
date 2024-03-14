import { useEffect, useState, React } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const setGifs = async () => {
      const newImages = await getGifs(category);
      setimages(newImages);
      setIsLoading(false);
    };
    setGifs();
  }, []);

  return {
    images,
    isLoading,
  };
};
