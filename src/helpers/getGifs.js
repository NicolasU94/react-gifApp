export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${category}&limit=10`;
  const res = await fetch(URL);
  const { data } = await res.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
