import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Best Places", link: "/places" },
    { title: "Blogs", link: "/blogs" },
  ];

  return (
    <div className="relative mt-10 md:h-[600px] content-center">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 right-0 w-full h-full object-cover -z-30"
      >
        <source src="/src/assets/video/footer.mp4"></source>
      </video>
      <div className="bg-stone-100 bg-opacity-80 max-w-7xl mx-8 md:mx-auto rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-10 py-10 my-10 md:my-0">
        <div className="flex flex-col justify-center items-center md:items-start">
          <div>
            <img className="w-32" src="src/assets/logo.png"></img>
          </div>

          <p className="my-2 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsa
            nulla ipsum eos, nihil sequi possimus quas, consequuntur labore ab
            soluta laboriosam vero, repellat adipisci a nisi fuga libero
            reiciendis!
          </p>

          <div className="flex justify-center items-center gap-2 my-2">
            <FaLocationArrow />

            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="flex justify-center items-center gap-2 my-2">
            <FaPhoneSquareAlt className="text-xl" />

            <span>+123 456 789</span>
          </div>

          <div className="flex justify-between items-center text-3xl gap-4 my-2">
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
        {/* links section */}
        <div className="grid grid-cols-1 md:grid-cols-3 tracking-wide ">
          {/* link1 */}
          <div className="flex flex-col justify-center items-center md:justify-center md:items-start">
            <h1 className="text-xl font-semibold my-4">Links</h1>
            <ul>
              {links.map((item, index) => (
                <li
                  className="hover:translate-x-1 transition-all duration-500 cursor-pointer text-base text-center md:text-left my-2 hover:text-secondary"
                  key={index}
                >
                  <Link to={item.link} onClick={() => window.scrollTo(0, 0)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* link2 */}
          <div className="hidden md:flex flex-col justify-center items-center md:justify-center md:items-start">
            <h1 className="text-xl font-semibold my-4">Links</h1>
            <ul>
              {links.map((item, index) => (
                <li
                  className="hover:translate-x-1 transition-all duration-500 cursor-pointer text-base text-center md:text-left my-2 hover:text-secondary"
                  key={index}
                >
                  <Link to={item.link} onClick={() => window.scrollTo(0, 0)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* link3 */}
          <div className="hidden md:flex flex-col justify-center items-center md:justify-center md:items-start">
            <h1 className="text-xl font-semibold my-4">Links</h1>
            <ul>
              {links.map((item, index) => (
                <li
                  className="hover:translate-x-1 transition-all duration-500 cursor-pointer text-base text-center md:text-left my-2 hover:text-secondary"
                  key={index}
                >
                  <Link to={item.link} onClick={() => window.scrollTo(0, 0)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
