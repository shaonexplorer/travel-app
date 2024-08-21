import { FaLocationDot } from "react-icons/fa6";

function PlacesCard({ item }) {
  return (
    <div className="w-auto shadow-lg cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="h-[300px] w-full object-cover hover:scale-110 transition-all duration-500"
          src={item.img}
        ></img>
      </div>

      <div className="p-4 flex flex-col space-y-2">
        <h1 className="text-xl font-semibold my-2">{item.title}</h1>
        <span className="flex justify-start items-center gap-2 text-stone-500">
          <FaLocationDot />

          <p>{item.location}</p>
        </span>
        <p className="tracking-wide line-clamp-3">{item.description}</p>
        <div className="h-[1px] px-2 bg-stone-300"></div>
        <span className="flex justify-between items-center">
          <p className="text-stone-400">{item.category}</p>
          <p className="font-semibold text-lg">${item.price}</p>
        </span>
      </div>
    </div>
  );
}

export default PlacesCard;
