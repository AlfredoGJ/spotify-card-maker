import { Album, Track } from "../../types/types";

const getTrack = (id: string): Promise<Track> => {
  return fetch(`${process.env.REACT_APP_API_BASE}?trackId=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data.track;
    })
    .catch((error) => {
      console.error("Error fetching track data:", error);
      throw error;
    });
};

const getAlbum = (id: string): Promise<Album> => {
  return fetch(`${process.env.REACT_APP_API_BASE}?albumId=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data.album;
    })
    .catch((error) => {
      console.error("Error fetching album data:", error);
      throw error;
    });
};

const getImage = (url: string) => {
  return fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
};

const getScannable = (url:string): Promise<string> =>{
    return fetch(url)
    .then((response: Response) => response.text())
}



export { getTrack, getAlbum, getImage, getScannable };
