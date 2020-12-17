import axios from "axios";

export const getGallery = name => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/view_gallery/${name}`)
      .then(res => {
        resolve(res.data.images);
      })
      .catch(error => {
        reject(error.response.data.error);
      });
  });
};
