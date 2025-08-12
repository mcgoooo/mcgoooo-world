"use server";

import { type CurrentlyPlaying } from "@/types/CurrentlyPlaying";
import { cookies } from "next/headers";

export default async function currentlyPlaying() {
      const allCookies = (await cookies()).getAll()
    console.log("All cookies:", allCookies);
  const token = (await cookies()).get("spotify_access_token")?.value;
  if (!token) {

    throw new Error("No Spotify access token found in cookies");
  }
  const currentlyPlaying = await fetch(
    "https://mcgoooo.world/currently-playing",
    {
      method: "get",
      headers: {
        Cookie: "spotify_access_token=" + token!,
      },
    },
  );
  console.log(await currentlyPlaying.text())
  const json = (await currentlyPlaying.json()) as CurrentlyPlaying;

  return json
}
