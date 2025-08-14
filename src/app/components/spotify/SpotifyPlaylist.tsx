import Image from 'next/image';

import { SpotifyPlaylist } from "@/types/Spotify/Playlist";

export const SpotifyPlaylists = ({
  playlists,
}: {
  playlists: SpotifyPlaylist[];
}) => (
  <ul className="list bg-base-100 rounded-box shadow-md">
    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
      Your playlists
    </li>
    {playlists.map((playlist) => (
      <li className="list-row" key={playlist.id}>
        <div className="flex gap-4 w-lg">
          {playlist.images &&
          <Image
            className="rounded-box max-w-(--playlist-image-size)"
            src={playlist.images[0]?.url}
            alt="Playlist cover"
            width={160}
            height={160}
          />
          }
          <div>
            {playlist.name}
            <div className="badge badge-soft badge-primary">
              <a href={playlist.external_urls.spotify}>link</a>
            </div>
                        <br/>
            <div>{decodeURIComponent(playlist.description)}</div>

          </div>
          
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className={`badge ${playlist.collaborative ? "badge-primary" : "badge-secondary"}`}>
            collaborative: {playlist.collaborative ? "yes" : "no"}
          </div>
          <div className={`badge ${playlist.public ? "badge-primary" : "badge-secondary"}`}>
            public: {playlist.public.toString()}
          </div>
          <div className="badge badge-soft badge-primary">
            owner:{" "}
            <a href={playlist.owner.external_urls.spotify}>
              {playlist.owner.display_name}
            </a>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
