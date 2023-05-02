import { useCallback, useState } from "react";

const datas = [
  {
    title: "the WET Codbase",
    time: "Sunday 4th, 2020 11 min read",
    message: "Come waste your time with me",
  },
  {
    title: "goodby, clean code",
    time: "Friday 22nd, 2019 5 min read",
    message: "Let clean code guide you. Then let it go.",
  },
  {
    title: "my decade in review",
    time: "Saturday 11th, 2018 5 min read",
    message: "A personal reflection.",
  },
  {
    title: "what are the react team principles",
    time: "Thursday 4th, 2015 5 min read",
    message: "UI Before API.",
  },
];

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <div
      className="h-screen flex justify-center transition-all ease-in-out duration-500"
      style={{
        backgroundColor: toggle ? "#282c35" : "white",
      }}
    >
      <header className="w-11/12 max-w-2xl">
        <nav className="flex justify-between pt-8 pb-4">
          <h1
            className="text-5xl font-bold tracking-widest"
            style={{ color: toggle ? "white" : "black" }}
          >
            Overreacted
          </h1>

          <button
            className="bg-[#d23669] h-8 w-20 text-white rounded tracking-widest font-bold"
            onClick={handleToggle}
            style={{
              backgroundColor: toggle ? "#FFA8C3" : "#d23669",
              color: toggle ? "white" : "black",
            }}
          >
            Toggle
          </button>
        </nav>

        <section className="flex flex-col gap-12 py-20">
          {datas.map((data) => (
            <article>
              <h2
                className="tracking-widest font-bold text-3xl capitalize text-[#d23669]"
                style={{
                  color: toggle ? "#FFA8C3" : "#d23669",
                }}
              >
                {data.title}
              </h2>

              <span
                className="italic"
                style={{
                  color: toggle ? "white" : "black",
                }}
              >
                {data.time}
              </span>

              <p
                style={{
                  color: toggle ? "white" : "black",
                }}
              >
                {data.message}
              </p>
            </article>
          ))}
        </section>
      </header>
    </div>
  );
}

export default App;
