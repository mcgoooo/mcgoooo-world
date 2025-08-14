# Background
Planned to build a site showing the BPM of the current Spotify track with recommendations like:
- More energy
- No lyrics
- Same BPM

Intended to use Spotify’s [Get Recommendations API](https://developer.spotify.com/documentation/web-api/reference/get-recommendations).  
Sites like [Sort Your Music](http://sortyourmusic.playlistmachinery.com/) already do this, but [Spotify’s announcement](https://developer.spotify.com/blog/2024-11-27-changes-to-the-web-api) means only existing sites can keep using those endpoints.  
I’d used them before but missed the “deprecated” badge — this is just a side project I work on while watching movies.

# Alternatives Tried
- [Recobeats](https://reccobeats.com/): Similar output, but limited catalog.
- [MusicBrainz](https://en.wikipedia.org/wiki/MusicBrainz) + [AcousticBrainz](https://acousticbrainz.org/): Coverage too small.

i Found this endpoint:  
`https://musicbrainz.org/ws/2/url?resource=https://open.spotify.com/album/2C74sO3IjfXbiEPKD6kjQo&fmt=json&inc=release-rels`  
which converts a Spotify album/release to the equivalent MusicBrainz entry (tracks not supported).
