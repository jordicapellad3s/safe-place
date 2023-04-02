import Section from "./components/Section";

function App() {
  return (
    <main className="layout h-[96.8vh]">
      <Section>
        <div className="mt-20">
          <h1 className="font-medium text-xl text-primary leading-7 mb-2">
            Hey! How's it going? I'm Jordi.
          </h1>
          <p className="text-secondary leading-8 mb-2">
            Frontend Developer from Barcelona, Spain. I'm passionate about
            building and crafting beautiful web applications. I'm currently
            working at{" "}
            <span className="font-medium text-primary">Ticketdoor</span> as a
            Frontend Developer.
          </p>
          <p className="text-secondary leading-8">
            When I'm not coding, I'm probably at the gym or park doing
            calisthenics, meditating or reading a book. I'm also a big fan of
            the outdoors and nature. I love to travel and explore new places.
            Music is also a big part of my life.
          </p>
        </div>
        <div className="flex flex-col mt-10">
          <div className="bg-white -rotate-6 w-[152px] mt-10 h-auto min-h-[152px] rounded-lg shadow-lg shadow-[0 3px 6px rgba(52,53,71,.1)] pt-2 px-2 pb-6">
            <img
              src="src/assets/portrait.jpeg"
              alt="Jordi"
              className="rounded-sm"
            />
          </div>
          <div className="-z-10 rotate-12 ml-10 w-[152px] h-auto min-h-[152px] rounded-lg shadow-lg shadow-[0 3px 6px rgba(52,53,71,.1)]">
            <img
              src="src/assets/barcelona.png"
              alt="Vallirana"
              className="rounded-md bg-cover bg-center"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}

export default App;
