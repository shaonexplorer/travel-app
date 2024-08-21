import PlacesCard from "./PlacesCard";

function Places() {
  const placesData = [
    {
      title: "Boat Tour",
      img: "src/assets/places/boat.jpg",
      location: "USA",
      price: 1200,
      category: "Cultural Relax",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto blanditiis alias aliquam ullam expedita architecto qui repudiandae eos corporis neque.",
    },
    {
      title: "Sydney",
      img: "src/assets/places/place4.jpg",
      location: "Australia",
      price: 1500,
      category: "Cultural Relax",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto blanditiis alias aliquam ullam expedita architecto qui repudiandae eos corporis neque.",
    },
    {
      title: "Los Angeles",
      img: "src/assets/places/place5.jpg",
      location: "USA",
      price: 1500,
      category: "Cultural Relax",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto blanditiis alias aliquam ullam expedita architecto qui repudiandae eos corporis neque.",
    },
    {
      title: "Las Vegas",
      img: "src/assets/places/place6.jpg",
      location: "USA",
      price: 1800,
      category: "Cultural Relax",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto blanditiis alias aliquam ullam expedita architecto qui repudiandae eos corporis neque.",
    },
    {
      title: "Taj Mahal",
      img: "src/assets/places/tajmahal.jpg",
      location: "India",
      price: 1100,
      category: "Cultural Relax",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto blanditiis alias aliquam ullam expedita architecto qui repudiandae eos corporis neque.",
    },
    {
      title: "Under Water",
      img: "src/assets/places/water.jpg",
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
