export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center text-success mb-6">Whats My Bpm</h1>
      <section>
        <div className="card w-full shadow-sm bg-secondary mb-4">
          <div className="card-body">
            <span className="badge badge-xs badge-warning">a Badge</span>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Spotify</h2>
              <span className="text-xl">Some text</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <span>More text</span>
              </li>
            </ul>
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
