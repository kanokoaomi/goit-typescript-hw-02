import axios from "axios";
import { Image } from "./components/ImageGallery/ImageGallery";

// interface Image {
//   id: string;
//   description: string | null;
//   imageSrc: string; 
//   imageAlt: string;
//   urls: {
//     raw: string;
//     full: string;
//     regular: string;
//     small: string;
//     thumb: string;
//   };
// }

type FetchResponse = {
  results: Image[];
  total: number;
  total_pages: number;
}


const fetchRequestForPictures = async (searchTerm: string, page: number): Promise<FetchResponse> => {
  const responce = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=_BXOgMDV2oTwC1KdQ137XwmJyta7xEJMYYnU7N2Jbt0&page=${page}&query=${searchTerm}`
  );
  return responce.data;
};

export default fetchRequestForPictures;
