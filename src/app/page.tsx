import currentlyPlaying from "../requests/currentlyPlaying";

export default async function Home() {
  const current = await currentlyPlaying();
  return (
    <>
      <h1 className="text-4xl text-center text-success mb-6">Whats My Bpm</h1>
      <h1 className="text-xl text-center text-success mb-6">it is 126BPM</h1>
      <section>
        <div className="card w-full shadow-sm bg-secondary mb-4">
          <div className="card-body">
              <h2 className="text-xl font-bold">
                {current.album.artists.map((artist)=> 
                  <span key={artist.spotifyUri} className="text-success">{artist.name}</span>
                )}
              </h2>
              <h2 className="text-xl font-bold">
                {current.name}
              </h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
              <img
                src={current?.album?.images?.large}
                width={"300px"}
                height={"300px"}
              ></img>
              <ul className="text-xs">
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero,
                </li>
                <li>More text</li>
                <li>More text</li>
              </ul>
            </div>

            <div className="mt-6">
              <button className="btn btn-primary btn-block w-40">
                Does nothing
              </button>
            </div>
          </div>
        </div>
        <div className="card shadow-sm bg-secondary text-success mb-4">
          <div className="card-body">
            <span className="badge badge-xs badge-warning">bla</span>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">bla</h2>
              <span className="text-xl">bla</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <span>bla</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block">bla</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
