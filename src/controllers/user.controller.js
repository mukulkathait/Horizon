import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  return await res.status(200).json({
    message: "User registered",
  });
});

export { registerUser };
