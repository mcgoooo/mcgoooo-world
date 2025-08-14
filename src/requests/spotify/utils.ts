"use server";

import { cookies } from "next/headers";

export const isAuthedForSpotify = async (): Promise<Boolean> => {
  // TODO check the refresh date of the cookie when we are doign refresh tokens
  const token = (await cookies()).get("spotify_access_token")?.value;
  return token ? true : false;
};

export const spotifyGetOptions = async () => {
  const token = (await cookies()).get("spotify_access_token")?.value;
  if (!token) {
    throw new Error("No Spotify access token found, shoudl call isAuthedForSpotify first");
  }
  return {
    method: "get",
    headers: {
      Cookie: "spotify_access_token=" + token!,
    },
  };
};
