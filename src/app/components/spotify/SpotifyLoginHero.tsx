export const SpotifyLoginHero = () => (
  <div className="hero bg-mcgoo-purple-to-orange-super-fade min-h-screen ">
    <div className="hero-content">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Welcome to Clean My Music</h1>
        <p className="py-6">
          Because in a digital world<br/> it shoud be as easy to remove as to add.
        </p>
        <h3>Login to get started</h3>
        <br/>
      <a className="btn btn-primary" href={`${process.env.MCGOOOO_SPOTIFY_DOMAIN}/login?return_to=${encodeURIComponent(process.env.MCGOOOO_ROOT_DOMAIN!)}`}>Spotify</a>
      </div>
  </div>
  </div>
);
