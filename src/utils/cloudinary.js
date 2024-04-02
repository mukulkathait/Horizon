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

    //on successful upload
    console.log(
      "File has been uploaded successfully on Cloudinary : ",
      response.url
    );
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the local copy of file as upload has failed
    return null;
  }
};

export { uploadOnCloudinary };
