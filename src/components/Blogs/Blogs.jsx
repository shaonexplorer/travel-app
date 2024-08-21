import BlogCard from "./BlogCard";

import image1 from "../../assets/places/tajmahal.jpg";
import image2 from "../../assets/places/water.jpg";
import image3 from "../../assets/places/boat.jpg";

function Blogs() {
  const blogData = [
    {
      title: "Top Places To Visit In India",
      img: image1,
      date: "August,2023",
      author: "Jhon Doe",
      delay: "300",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est blanditiis a ea porro aliquid eaque omnis doloremque eius! Veritatis sapiente aspernatur nobis aliquid nam dolorum quia odit ipsam at ab.",
    },
    {
      title: "Top Places To Visit In USA",
      img: image2,
      date: "February,2024",
      author: "Simon bel",
      delay: "400",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est blanditiis a ea porro aliquid eaque omnis doloremque eius! Veritatis sapiente aspernatur nobis aliquid nam dolorum quia odit ipsam at ab.",
    },
    {
      title: "Top Places To Visit In Japan",
      img: image3,
      date: "January,2023",
      author: "Hakata Namuro",
      delay: "500",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est blanditiis a ea porro aliquid eaque omnis doloremque eius! Veritatis sapiente aspernatur nobis aliquid nam dolorum quia odit ipsam at ab.",
    },
  ];
  return (
    <div className="max-w-7xl px-4 md:mx-auto my-20">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl capitalize font-semibold border-l-8 border-secondary px-4"
      >
        Our Latest Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
        {blogData.map((item) => (
          <BlogCard item={item} key={item.index} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
