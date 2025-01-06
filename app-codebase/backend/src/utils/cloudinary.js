import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
// import dotenv from "dotenv";


// dotenv.config();



cloudinary.config({
  cloud_name: "dp8fisnhs",
  api_key: "853372525533455",
  api_secret: "GmDsZ-Uap-Z5bUpdtMVbzXvWUNc",
});

const uploadOnCloudinary = async (localFilePath, upload_options) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(
      localFilePath,
      upload_options
    );
    if (response) fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log(error);
    return null;
  }
};

const deleteFromCloudinary = async (fileId) => {
  try {
    if (!fileId) return null;
    //delete the file on cloudinary
    const response = await cloudinary.uploader.destroy(fileId);
    if (response) fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    return null;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
