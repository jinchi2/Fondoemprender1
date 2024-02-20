import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: "dx5l2dklx",
    api_key: "219114651716773",
    api_secret: "mfWz8X7G4_hGdxqx1yjcZvA7stg"
})

//IMG
export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'imagenes'
    })
}
export const deleteImg = async id => {
    return await cloudinary.uploader.destroy(id)
}
