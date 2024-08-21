import { Link } from "react-router-dom";

function BlogCard({ item }) {
  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      to={`/blogs/${item.title}`}
      state={{
        image: item.img,
        date: item.date,
        author: item.author,
        title: item.title,
        description: item.description,
      }}
    >
      <div
        data-aos="fade-up"
        data-aos-delay={item.delay}
        data-aos-duration="1000"
        className="w-auto shadow-lg cursor-pointer"
      >
        <div className="overflow-hidden">
          <img
            className="h-[300px] w-full object-cover hover:scale-110 transition-all duration-500"
            src={item.img}
          ></img>
        </div>

        <div className="p-4 flex flex-col space-y-2">
          <span className="flex justify-between items-center gap-2 text-stone-500">
            <p>{item.date}</p>

            <p>{item.author}</p>
          </span>
          <h1 className="text-xl font-semibold my-2">{item.title}</h1>

          <p className="tracking-wide line-clamp-3">{item.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
