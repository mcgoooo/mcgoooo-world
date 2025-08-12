"use server";

import { type CurrentlyPlaying } from "@/types/CurrentlyPlaying";
import { cookies } from "next/headers";

export default async function currentlyPlaying() {
  const token = (await cookies()).get("spotify_access_token")?.value;

  const currentlyPlaying = await fetch(
    "http://127.0.0.1:8787/currently-playing",
    {
      method: "get",
      headers: {
        Cookie: "spotify_access_token=" + token!,
      },
    },
  );
  const json = (await currentlyPlaying.json()) as CurrentlyPlaying;
  return json
}
