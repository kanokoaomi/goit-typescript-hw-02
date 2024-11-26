import axios from "axios";

const fetchRequestForPictures = async (searchTerm: string, page: number) => {
  const responce = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=_BXOgMDV2oTwC1KdQ137XwmJyta7xEJMYYnU7N2Jbt0&page=${page}&query=${searchTerm}`
  );
  return responce.data;
};

export default fetchRequestForPictures;
