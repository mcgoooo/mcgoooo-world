import getSpotifyUser from "@/requests/spotify/user";
import getSpotifyUserPlaylists from "@/requests/spotify/user/playlists";
import { SpotifyLoginHero } from "./components/spotify/SpotifyLoginHero";
import { SpotifyPlaylists } from "./components/spotify/SpotifyPlaylist";

export default async function Home() {
  const spotifyUser = await getSpotifyUser();
  if (!spotifyUser) {
    return <SpotifyLoginHero />;
  }
  const playlists = await getSpotifyUserPlaylists()
  return (
    <>
        <div className="navbar bg-mcgoo-purple shadow-sm">
          <h1 className="text-3xl font-bold text-white">
            Clean My Music - {spotifyUser.display_name}
          </h1>
        </div>
        <SpotifyPlaylists playlists={playlists!}></SpotifyPlaylists>

    </>
  );
}
