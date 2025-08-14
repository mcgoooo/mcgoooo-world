"use server";

import { SpotifyPlaylist } from "@/types/Spotify/Playlist";
import { spotifyUserPlaylistsUrl } from "../urls";
import { isAuthedForSpotify, spotifyGetOptions } from "../utils";

export default async function getSpotifyUserPlaylists(): Promise<SpotifyPlaylist[] | null> {
  if (!(await isAuthedForSpotify())) {
    return null;
  }
  
  try {
    const options = await spotifyGetOptions();
    const spotifyUserPlaylists = await fetch(spotifyUserPlaylistsUrl(), options);
    const json = (await spotifyUserPlaylists.json()) as SpotifyPlaylist[];
    return json;
  } catch {
    return null;
  }
}
