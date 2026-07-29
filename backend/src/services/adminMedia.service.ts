import cloudinary from "../config/cloudinary";

export async function uploadImage(

    file: Buffer

) {

    return new Promise((resolve, reject) => {

        cloudinary.uploader.upload_stream(

            {

                folder:
                    "techharvest",

            },

            (error, result) => {

                if (error)
                    return reject(error);

                resolve(result);

            }

        ).end(file);

    });

}
