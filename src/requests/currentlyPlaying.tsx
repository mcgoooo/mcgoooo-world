"use server";

import { type CurrentlyPlaying } from "@/types/CurrentlyPlaying";
import { cookies } from "next/headers";

export default async function currentlyPlaying() {
      const allCookies = (await cookies()).getAll()
    console.log("All cookies:", allCookies);
  const token = (await cookies()).get("spotify_access_token")?.value;
  const url =    process.env.MCGOOOO_SPOTIFY_DOMAIN + "/currently-playing"
  console.log("URL",url);
  if (!token) {

    throw new Error("No Spotify access token found in cookies");
  }
  const currentlyPlaying = await fetch(url
    ,{
      method: "get",
      headers: {
        Cookie: "spotify_access_token=" + token!,
      },
    },
  );
  const json = (await currentlyPlaying.json()) as CurrentlyPlaying;

  return json
}
