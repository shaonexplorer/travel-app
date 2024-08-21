import { Link } from "react-router-dom";

function MobileMenu({ show, setShow }) {
  const menuItem = [
    { name: "Home", link: "/" },
    { name: "Best Places", link: "/places" },
    { name: "Blogs", link: "/blogs" },
    { name: "About", link: "/about" },
  ];
  return (
    <div
      onClick={() => setShow(!show)}
      className={`${
        show ? "left-0" : "-left-[100%]"
      } fixed top-0 bottom-0 h-screen w-[70%] bg-stone-300 bg-opacity-90 backdrop-blur-sm transition-all duration-500`}
    >
      <div className="">
        <ul className="mt-20 text-xl font-semibold">
          <div className="mx-auto w-32 py-10">
            <img src="src/assets/logo.png" className="w-32"></img>
          </div>
          {menuItem.map((item) => (
            <li
              className="hover:bg-primary/30 px-10 py-4 hover:text-stone-50 cursor-pointer transition-all duration-500"
              key={item.name}
            >
              <Link
                className=""
                to={item.link}
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
