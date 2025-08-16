export const spotifyUserUrl = () => process.env.MCGOOOO_SPOTIFY_DOMAIN + "/spotify/current-user";
export const spotifyUserPlaylistsUrl = () => spotifyUserUrl() + "/playlists";
