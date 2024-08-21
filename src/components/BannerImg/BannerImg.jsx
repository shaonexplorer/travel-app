function BannerImg({ poster, my }) {
  return (
    <div className={`h-[400px] w-full my-${my}`}>
      <img
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="1000"
        src={poster}
        className="object-cover w-full h-full"
      ></img>
    </div>
  );
}

export default BannerImg;
