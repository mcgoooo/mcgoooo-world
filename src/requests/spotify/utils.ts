"use server";

import { cookies } from "next/headers";

export const isAuthedForSpotify = async (): Promise<boolean> => {
  // TODO check the refresh date of the cookie when we are doign refresh tokens
  const token = (await cookies()).get("spotify_access_token")?.value;
  return token ? true : false;
};

export const spotifyGetOptions = async () => {
  const token = (await cookies()).get("spotify_access_token")?.value;
  if (!token) {
    throw new Error("No Spotify access token found, this shoudl be checked before this is called via hasToken");
  }
  return {
    method: "get",
    headers: {
      Cookie: "spotify_access_token=" + token!,
    },
  };
};
