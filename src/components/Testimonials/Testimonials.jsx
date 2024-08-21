import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const sliderData = [
    {
      name: "John Doe",
      img: "https://picsum.photos/id/29/200/300",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias modi eligendi quod quae, dolorem labore.",
    },
    {
      name: "Simon Paul",
      img: "https://picsum.photos/id/54/200/300",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias modi eligendi quod quae, dolorem labore.",
    },
    {
      name: "David Miller",
      img: "https://picsum.photos/id/64/200/300",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias modi eligendi quod quae, dolorem labore.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <section id="testimonial" className="max-w-7xl px-4 md:mx-auto my-10">
      <div className="flex flex-col justify-center items-center text-center max-w-md mx-auto my-20 tracking-wide space-y-2">
        <p>Testimonials</p>
        <h1 className="text-2xl font-semibold">Testimonials</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          facere velit quod harum possimus optio beatae illum ullam. Sapiente
          cupiditate delectus impedit ratione debitis rerum adipisci maxime
          beatae fugit dolores?
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index}>
              <div className="bg-secondary/20 flex flex-col justify-center items-center rounded-xl mx-4 p-4">
                <img className="w-28 h-28 rounded-full" src={item.img}></img>
                <h1 className="my-2 text-xl font-semibold">{item.name}</h1>
                <p className="text-center text-stone-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
