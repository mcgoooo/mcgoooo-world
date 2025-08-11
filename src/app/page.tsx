export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center text-success mb-6">Whats My Bpm</h1>
      <h1 className="text-xl text-center text-success mb-6">it is 126BPM</h1>
      <section>
        <div className="card w-full shadow-sm bg-secondary mb-4">
          <div className="card-body">
              <h2 className="text-3xl font-bold">Artist - Song Name</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
              <img
                src="https://images.ctfassets.net/lnhrh9gqejzl/4RJFvBlo32QPu531qSsqod/bd232dbbe64607a164f1f785a021e338/S4A_Showcase_LP_Module_04.gif?fm=webp&q=80&w=960"
                alt="Another placeholder image of a cat"
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
