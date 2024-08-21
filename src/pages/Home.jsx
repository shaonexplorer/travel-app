import mainVid from "../assets/video/main.mp4";
import BannerImg from "../components/BannerImg/BannerImg";
import Blogs from "../components/Blogs/Blogs";

import Hero from "../components/Hero/Hero";
import Places from "../components/Places/Places";
import Poster from "../components/Poster";
import Testimonials from "../components/Testimonials/Testimonials";

const poster1 = "/src/assets/cover-women.jpg";
const poster2 = "/src/assets/travel-cover2.jpg";

function Home() {
  return (
    <section className="">
      <div className="relative h-[700px] w-screen content-center">
        <video
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 object-cover h-[700px] w-screen z-[-1]"
        >
          <source src={mainVid}></source>
        </video>
        <Hero />
        {/* hero section */}
        {/* <div className="max-w-7xl mx-auto py-44 md:py-56 min-h-full"></div> */}
      </div>
      <div className="w-screen ">
        {" "}
        <Places />
        <BannerImg poster={poster1} my={10} />
        <Blogs />
        <Poster />
        <BannerImg poster={poster2} my={0} />
        <Testimonials />
      </div>
    </section>
  );
}

export default Home;
