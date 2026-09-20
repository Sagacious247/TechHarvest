// import multer from "multer";

// const storage = multer.memoryStorage();

// const upload = multer({

//     storage,

//     limits: {

//         fileSize:
//             1024 * 1024 * 1024,

//     },

// });

// export default upload;


import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({

  storage,

  limits: {

    fileSize: 1024 * 1024 * 1024,

  },

});

export const uploadImage =
  upload.single("image");

export const uploadVideo =
  upload.single("video");

export const uploadDocument =
  upload.single("document");

export default upload;