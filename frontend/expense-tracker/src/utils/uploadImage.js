import axiosInstance from "./axiosInstance";
import { API_PATHS } from "./apiPaths";

/**
 * Uploads an image file and returns the resulting image URL.
 * @param {File} file - The image file to upload
 * @returns {Promise<{ imageUrl: string }>} Resolves with the image URL from the server
 */
async function uploadImage(file) {
  if (!file) {
    return { imageUrl: "" };
  }

  const formData = new FormData();
  formData.append("image", file);

  const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export default uploadImage;
