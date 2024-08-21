import { useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Hero() {
  const [price, setPrice] = useState(150);
  function handleChange(e) {
    setPrice(e);
  }
  return (
    <section className=" max-w-7xl mx-8 mt-20 md:mt-0 md:mx-auto">
      <div className="grid grid-cols-1 capitalize">
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          className="text-stone-50 font-semibold text-xl"
        >
          our packages
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          className="text-4xl font-semibold text-stone-50 pb-2"
        >
          search your destination
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <form
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1000"
          className="relative grid grid-cols-1 md:grid-cols-3 md:gap-4 bg-stone-50 py-6 px-4 rounded-xl"
        >
          <div className="flex flex-col py-4">
            <label className="capitalize text-lg text-stone-600 pb-2 px-2 font-semibold ">
              search your destination
            </label>
            <input
              className="px-4 py-2 bg-stone-200 rounded-full focus:outline-primary"
              placeholder="DUBAI"
            ></input>
          </div>

          <div className="flex flex-col py-4">
            <label className="capitalize text-lg text-stone-600 pb-2 px-2 font-semibold">
              date
            </label>
            <input
              type="date"
              className="px-4 py-2 bg-stone-200 rounded-full focus:outline-primary"
            ></input>
          </div>

          <div className="flex flex-col py-4">
            <label className="capitalize text-lg text-stone-600 pb-2 px-2 ">
              <div className="flex justify-between">
                <span className="font-semibold">Max Price: </span>
                <span className="font-bold tracking-wider">${price}</span>
              </div>
            </label>
            <div className=" py-1 px-2 rounded-full bg-stone-200 flex justify-center items-center">
              <input
                type="range"
                min={150}
                max={1000}
                value={price}
                onChange={(e) => handleChange(e.target.value)}
                className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full focus:outline-primary w-full "
              ></input>
            </div>
          </div>
          <button
            onClick={(e) => e.preventDefault()}
            className="absolute -bottom-4 right-1/3 md:right-1/2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary to-primary text-stone-50 hover:scale-110 transition-all duration-500"
          >
            Search Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
