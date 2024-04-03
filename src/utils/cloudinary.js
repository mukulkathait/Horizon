import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    //uploading file to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //on successful upload - remove file for temp server storage
    fs.unlinkSync(localFilePath);

    // TESTING
    console.log("CLOUDINARY RESPONSE: ", response);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the local copy of file as upload has failed
    return null;
  }
};

export { uploadOnCloudinary };
