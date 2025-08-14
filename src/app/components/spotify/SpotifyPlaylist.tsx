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
      <li className="list-row">
        <div className="flex gap-4 w-lg">
          <img
            className="rounded-box max-w-(--playlist-image-size)"
            src={playlist.images ? playlist.images[0]?.url : ""}
          />
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
        <button className="btn btn-square btn-ghost">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 3L20 12 6 21 6 3z"></path>
            </g>
          </svg>
        </button>
        <button className="btn btn-square btn-ghost">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </g>
          </svg>
        </button>
      </li>
    ))}
  </ul>
);
