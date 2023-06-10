import multer from "multer";




    // // Define the storage for uploaded files
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // Specify the destination folder for uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname); // Specify the file name
    }
  });

  // Create the multer instance with the defined storage
  export const upload = multer({ storage:multer.memoryStorage() });


  export default upload;

