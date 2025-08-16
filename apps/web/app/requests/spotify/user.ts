"use server";

import { type SpotifyUser } from "@/types/Spotify/User";
import { spotifyUserUrl } from "./urls";
import { isAuthedForSpotify, spotifyGetOptions } from "./utils";

export default async function getSpotifyUser(): Promise<SpotifyUser | null> {
  if (!(await isAuthedForSpotify())) {
    return null;
  }
  
  try {
    const options = await spotifyGetOptions();
    const spotifyUser = await fetch(spotifyUserUrl(), options);
    const json = (await spotifyUser.json()) as SpotifyUser;
    return json;
  } catch {
    return null;
  }
}
