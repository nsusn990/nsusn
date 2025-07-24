import Image from "next/image";

const navElem = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Reports",
    link: "/reports",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Home() {
  return (
    <div className="font-sans border grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="lg:flex hidden space-x-4 mt-2">
          {navElem.map((item) => (
            <div
              className="hover:font-bold transition-all ease-in hover:text-blue-700"
              key={item.name}
            >
              <a href={item.link}>{item.name}</a>
            </div>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
