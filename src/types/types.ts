type AccessToken = {
  issued_at: string; // ISO String
  access_token: string;
  expires_in: number;
};

class Duration {
  static fromMilliseconds(ms: number): Duration {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return new Duration(hours, minutes % 60, seconds % 60);
  }

  getStringSeconds(): string {
    return this.seconds.toString().padStart(2, "0");
  }
  getStringMinutes(): string {
    return this.minutes.toString().padStart(2, "0");
  }
  getStringHours(): string {
    return this.hours.toString().padStart(2, "0");
  }
  constructor(
    public hours: number,
    public minutes: number,
    public seconds: number
  ) {}

  toString(): string {
    return `${this.hours}:${this.minutes
      .toString()
      .padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`;
  }
}

type SimplifiedArtist = {
  id: string;
  name: string;
  type: string;
};

type Color = {
  name: string;
  values: {
    rgb: {
      r: number;
      g: number;
      b: number;
    };
    hex: string;
  };
};
type ElementSize = {
  width: number;
  height: number;
};
type Image = {
  url: string;
  height: number;
  width: number;
};
type Scannable = {
  size: ImageSizes;
  uri: string;
};

enum ImageSizes {
  Normal = 640,
  Small = 300,
  Tiny = 64,
}

enum ResourceType {
  Album = "album",
  Track = "track",
  Playlist = "playlist",
  Artist = "artist",
}

// type ArtistDto = Pick<Artist, 'name' | 'id' | 'type' | 'images'>;
// type AlbumDto = Pick<Album, 'name' | 'id' | 'genres' | 'release_date' | 'total_tracks' | 'images'> & {
//     artists: Array<ArtistDto>;
// };

type SimplifiedAlbum = {
  name: string;
  id: string;
  release_date: string;
  total_tracks: number;
  images: Image[];
};

type Album = {
  name: string;
  id: string;
  genres: Array<string>;
  release_date: string;
  total_tracks: number;
  images: Array<Image>;
  label: string;
  artists: Array<SimplifiedArtist>;
  tracks: Array<SimplifiedTrack>;
  scannables: Array<Scannable>;
};

type Track = {
  name: string;
  id: string;
  duration_ms: number;
  artists: Array<SimplifiedArtist>;
  album: SimplifiedAlbum;
  scannables: Scannable[];
};

type SimplifiedTrack = {
  name: string;
  duration_ms: number;
  track_number: number;
};

export type {
  AccessToken,
  Track,
  SimplifiedAlbum,
  SimplifiedArtist,
  SimplifiedTrack,
  Album,
  Scannable,
  Color,
  ElementSize,
  
};
export { ImageSizes, ResourceType, Duration };
