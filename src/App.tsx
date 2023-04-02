import { motion, AnimatePresence } from "framer-motion";
import Section from "./components/Section";
import Work from "./components/Work";

function App() {
  return (
    <main className="p-4 layout">
      <Section>
        <AnimatePresence>
          <motion.div className="mt-20">
            <h1 className="mb-2 text-xl font-medium leading-7 text-primary">
              Hey! How's it going? I'm Jordi.
            </h1>
            <p className="mb-2 leading-8 text-secondary">
              Frontend Developer from Barcelona, Spain. I'm passionate about
              building and crafting beautiful web applications. I'm currently
              working at{" "}
              <span className="font-medium text-primary">Ticketdoor</span> as a
              Frontend Developer.
            </p>
            <p className="leading-8 text-secondary">
              When I'm not coding, I'm probably at the gym or park doing
              calisthenics, meditating or reading a book. I'm also a big fan of
              the outdoors and nature, love to travel and explore new places.
              Music is also a big part of my life.
            </p>
          </motion.div>
          <div className="flex flex-col md:mt-10">
            <motion.div
              className="bg-white -rotate-6 w-[152px] mt-10 h-auto min-h-[152px] rounded-lg shadow-lg shadow-[0 3px 6px rgba(52,53,71,.1)] pt-2 px-2 pb-6"
              initial={{ opacity: 0, y: -60, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 1 }}
            >
              <img
                src="src/assets/portrait.jpeg"
                alt="Jordi"
                className="rounded-sm"
              />
            </motion.div>
            <motion.div
              className="-z-10 rotate-12 ml-10 w-[152px] h-auto min-h-[152px] rounded-lg shadow-lg shadow-[0 3px 6px rgba(52,53,71,.1)]"
              initial={{ opacity: 0, x: 60, rotate: 0 }}
              animate={{ opacity: 1, x: 0, rotate: 12 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <img
                src="src/assets/barcelona.png"
                alt="Vallirana"
                className="bg-center bg-cover rounded-md"
              />
            </motion.div>
          </div>
        </AnimatePresence>
      </Section>
      <Section>
        <div className="flex flex-col items-start w-full rounded-2xl">
          <h1 className="mb-2 text-xl font-medium leading-7 text-primary">
            Apps that I use
          </h1>
          <p className="mb-6 text-secondary">
            Daily basis apps that I use to get things done.
          </p>
          <div className="group mb-2 w-full p-2 text-secondary transition-all duration-500 hover:bg-white rounded-xl shadow-[0 3px 6px rgba(52,53,71,.1)]">
            <div className="flex items-center gap-4">
              <div className="p-2 group-hover:bg-[#F2F2F6] group-hover:bg-opacity-50 transition-all duration-500 rounded-lg">
                <img
                  src="src/assets/figma.png"
                  alt="Figma"
                  className="rounded-lg w-28 md:w-12"
                />
              </div>
              <div className="">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="font-semibold text-primary">Figma</h2>
                  <p className="text-sm bg-[#F3F2F9] px-2 rounded-full">
                    Design
                  </p>
                </div>
                <p className="">
                  Figma is my go-to tool for designing and prototyping.
                </p>
              </div>
            </div>
          </div>
          <div className="group mb-2 w-full p-2 text-secondary transition-all duration-500 hover:bg-white rounded-xl shadow-[0 3px 6px rgba(52,53,71,.1)]">
            <div className="flex items-center gap-4">
              <div className="p-2 group-hover:bg-[#F2F2F6] group-hover:bg-opacity-50 transition-all duration-500 rounded-lg">
                <img
                  src="src/assets/notion.png"
                  alt="Figma"
                  className="w-12 h-12 rounded-lg"
                />
              </div>
              <div className="">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="font-semibold text-primary">Notion</h2>
                  <p className="text-sm bg-[#F3F2F9] px-2 rounded-full">
                    Productivity
                  </p>
                </div>
                <p className="">
                  Notion is my save time tool for managing my tasks and
                  projects.
                </p>
              </div>
            </div>
          </div>
          <div className="group mb-2 w-full p-2 text-secondary transition-all duration-500 hover:bg-white rounded-xl shadow-[0 3px 6px rgba(52,53,71,.1)]">
            <div className="flex items-center gap-4">
              <div className="p-2 group-hover:bg-[#F2F2F6] group-hover:bg-opacity-50 transition-all duration-500 rounded-lg">
                <img
                  src="src/assets/warp.png"
                  alt="Figma"
                  className="w-12 h-12 rounded-lg"
                />
              </div>
              <div className="">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="font-semibold text-primary">Warp</h2>
                  <p className="text-sm bg-[#F3F2F9] px-2 rounded-full">
                    Terminal
                  </p>
                </div>
                <p className="">
                  Warp is my terminal of choice. It's fast, simple and has a lot
                  of features.
                </p>
              </div>
            </div>
          </div>
          <div className="group mb-2 w-full p-2 text-secondary transition-all duration-500 hover:bg-white rounded-xl shadow-[0 3px 6px rgba(52,53,71,.1)]">
            <div className="flex items-center gap-4">
              <div className="p-2 group-hover:bg-[#F2F2F6] group-hover:bg-opacity-50 transition-all duration-500 rounded-lg">
                <img
                  src="src/assets/arc.png"
                  alt="Figma"
                  className="w-12 h-12 rounded-lg"
                />
              </div>
              <div className="">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="font-semibold text-primary">Arc</h2>
                  <p className="text-sm bg-[#F3F2F9] px-2 rounded-full">
                    Browser
                  </p>
                </div>
                <p className="">
                  Arc is a fast, secure and privacy focused browser. It's based
                  on Chromium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

export default App;
