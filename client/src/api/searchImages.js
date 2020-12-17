import axios from "axios";

export const searchImages = search => {
  const queryString = search.replace(/ /g, "+");
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://pixabay.com/api/?key=11400340-39d37035ee7138701f3119e49&q=" +
          queryString +
          "&image_type=photo&pretty=true"
      )
      .then(res => {
        const urls = res.data.hits.slice(0, 6).map(hit => {
          return hit.largeImageURL;
        });
        resolve(urls);
      });
  });
};
