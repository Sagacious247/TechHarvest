import Media from "../models/media.model";

interface CreateMediaData {
  name: string;
  url: string;
  publicId: string;
  type: "video" | "image" | "pdf" | "audio" | "document";
  format: string;
  size: number;
  duration?: number;
  width?: number;
  height?: number;
  thumbnail?: string;
  folder: string;
  uploadedBy: string;
}

export const createMedia = async (
  data: CreateMediaData
) => {
  return await Media.create({
    name: data.name,
    url: data.url,
    publicId: data.publicId,
    type: data.type,
    format: data.format,
    size: data.size,
    duration: data.duration ?? 0,
    width: data.width,
    height: data.height,
    thumbnail: data.thumbnail ?? "",
    folder: data.folder,
    uploadedBy: data.uploadedBy,
  });
};