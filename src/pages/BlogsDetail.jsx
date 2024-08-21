import { useLocation } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";

function BlogsDetail() {
  const location = useLocation();
  //   console.log(location.state);
  const { image, date, author, title, description } = location.state;
  return (
    <div className="mt-24">
      <div className="overflow-hidden">
        <img
          src={image}
          className="object-cover w-full h-[400px] transition-all duration-500 hover:scale-110"
        ></img>
      </div>

      <div className="max-w-7xl mx-5 md:mx-auto">
        <div>
          <p className="text-stone-500 text-sm my-2">
            Written by {author} on date {date}
          </p>
          <h1 className="my-7 text-2xl font-bold">{title}</h1>
          <p>{description}</p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum sunt
            quos officiis laudantium, obcaecati deserunt temporibus illum omnis
            fugit hic pariatur laboriosam porro autem veniam voluptatum
            distinctio unde magni facere officia ipsum doloribus nostrum!
            Consequuntur saepe labore consectetur molestias praesentium
            voluptatum itaque quo quasi repellendus sed, incidunt vel id
            reprehenderit voluptas hic deleniti ipsam soluta provident, culpa
            impedit. Nostrum quia veritatis aspernatur. Rerum, voluptas, dolore
            sed asperiores inventore harum quod aliquam odio rem deserunt
            exercitationem, saepe deleniti sunt expedita. Provident.
          </p>
        </div>
        <Blogs />
      </div>
    </div>
  );
}

export default BlogsDetail;
