export const SpotifyLoginHero = () => (
  <div className="hero bg-mcgoo-purple-to-orange-super-fade min-h-screen ">
    <div className="hero-content">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold"></h1>
        <br/>
        <a className="btn btn-primary" href={`${process.env.MCGOOOO_SPOTIFY_DOMAIN!}/spotify/login?return_to=${encodeURIComponent(process.env.MCGOOOO_ROOT_DOMAIN!)}`}>login</a>
      </div>
  </div>
  </div>
);
