import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBanner = () => {
  const navigate = useNavigate();

  const sliderData = [
    {
      title: "Luxurious Stay in Dhaka",
      description: "Experience comfort and elegance in our premium rooms.",
      buttonText: "Explore Rooms",
      image: "https://i.pinimg.com/474x/b4/e4/4b/b4e44bf808d35a4a1eb9899e8ca3df0e.jpg", // Replace with your image URL
    },
    {
      title: "Affordable Suites for You",
      description: "Enjoy a perfect balance of affordability and luxury.",
      buttonText: "Discover Now",
      image: "https://i.pinimg.com/474x/e1/e9/51/e1e9517591a3b2293320533b21da4325.jpg", // Replace with your image URL
    },
    {
      title: "Your Comfort is Our Priority",
      description: "Stay with us and make your visit unforgettable.",
      buttonText: "Book Now",
      image: "https://i.pinimg.com/474x/a1/6d/79/a16d79670a5a8225a9db28629b8af541.jpg", // Replace with your image URL
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner w-11/12 mx-auto">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="slide relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
                {slide.description}
              </p>
              <button
                className="btn bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded transition duration-300"
                onClick={() => navigate("/rooms")}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBanner;
