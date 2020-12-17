import axios from "axios";

export const saveGallery = (name, images) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/save_gallery", {
        name: name,
        images: images
      })
      .then(res => {
        resolve(name);
      })
      .catch(error => {
        reject(error.response.data.error);
      });
  });
};
