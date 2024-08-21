import PlacesCard from "./PlacesCard";

import image1 from "../../assets/places/boat.jpg";
import image2 from "../../assets/places/place4.jpg";
import image3 from "../../assets/places/place5.jpg";
import image4 from "../../assets/places/place6.jpg";
import image5 from "../../assets/places/tajmahal.jpg";
import image6 from "../../assets/places/water.jpg";

function Places() {
  const placesData = [
    {
      title: "Boat Tour",
      img: image1,
      location: "USA",
      price: 1200,
      category: "Cultural Relax",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto blanditiis alias aliquam ullam expedita architecto qui repudiandae eos corporis neque.",
    },
    {
      title: "Sydney",
      img: image2,
      location: "Australia",
      price: 1500,
      category: "Cultural Relax",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto blanditiis alias aliquam ullam expedita architecto qui repudiandae eos corporis neque.",
    },
    {
      title: "Los Angeles",
      img: image3,
      location: "USA",
      price: 1500,
      category: "Cultural Relax",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto blanditiis alias aliquam ullam expedita architecto qui repudiandae eos corporis neque.",
    },
    {
      title: "Las Vegas",
      img: image4,
      location: "USA",
      price: 1800,
      category: "Cultural Relax",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto blanditiis alias aliquam ullam expedita architecto qui repudiandae eos corporis neque.",
    },
    {
      title: "Taj Mahal",
      img: image5,
      location: "India",
      price: 1100,
      category: "Cultural Relax",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto blanditiis alias aliquam ullam expedita architecto qui repudiandae eos corporis neque.",
    },
    {
      title: "Under Water",
      img: image6,
      location: "Maldives",
      price: 1700,
      category: "Cultural Relax",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto blanditiis alias aliquam ullam expedita architecto qui repudiandae eos corporis neque.",
    },
  ];
  return (
    <div className="max-w-7xl mx-4 md:mx-auto my-10">
      <h1 className="text-4xl capitalize font-semibold border-l-8 border-secondary px-4">
        best places to visit
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        {placesData.map((item, index) => (
          <PlacesCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Places;
