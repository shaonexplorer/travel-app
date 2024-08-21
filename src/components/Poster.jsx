import { MdFlight } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";

function Poster() {
  return (
    <div className="bg-stone-100">
      <div className="max-w-7xl px-4 md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
          {/* image section */}
          <div className="flex justify-center items-center">
            <img
              data-aos="flip-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="drop-shadow-xl"
              src="/src/assets/travelbox.png"
            ></img>
          </div>
          {/* text content section */}
          <div className="flex flex-col justify-center">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="text-3xl font-semibold capitalize my-5 text-center md:text-left"
            >
              Explore all corners of the world with US
            </h1>
            <p
              className="text-center md:text-left"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              architecto eaque omnis, nulla animi nam sint quaerat harum quia
              deleniti laboriosam repellendus dolores sunt quae natus distinctio
              tempora, cum suscipit!
            </p>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="700"
              className="grid grid-cols-2 my-5"
            >
              <div className="flex justify-center items-center space-x-4 my-5">
                <div className="text-3xl p-2 rounded-full bg-lime-500">
                  <MdFlight />
                </div>

                <p className="text-xl">Flight</p>
              </div>

              <div className="flex justify-center items-center space-x-4">
                <div className="text-3xl p-2 rounded-full bg-lime-500">
                  <FaWifi />
                </div>

                <p className="text-xl">Wi-Fi</p>
              </div>

              <div className="flex justify-center items-center space-x-4">
                <div className="text-3xl p-2 rounded-full bg-lime-500">
                  <MdLocalHotel />
                </div>

                <p className="text-xl">Hotel</p>
              </div>

              <div className="flex justify-center items-center space-x-4">
                <div className="text-3xl p-2 rounded-full bg-lime-500">
                  <IoFastFood />
                </div>

                <p className="text-xl">Food</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster;
