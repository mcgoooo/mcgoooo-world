import getSpotifyUser from "@/requests/spotify/SpotifyUser";
import { SpotifyLoginHero } from "./components/spotify/SpotifyLoginHero";

export default async function Home() {
  const spotifyUser = await getSpotifyUser();
  console.log("Spotify User:", spotifyUser);
  return (
    <>
      {!spotifyUser && <SpotifyLoginHero />}
      {spotifyUser && (
        <div className="navbar bg-mcgoo-purple shadow-sm">
          <h1 className="text-3xl font-bold text-white">
            Clean My Music - {spotifyUser.display_name}
          </h1>
        </div>
      )}
    </>
  );
}
