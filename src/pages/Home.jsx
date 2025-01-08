import DhakaMap from "../components/DhakaMap";
import FeaturedRooms from "../components/FeaturedRooms";
import Services from "../components/Services";
import SliderBanner from "../components/SliderBanner";
import TestimonialsSection from "../components/TestimonialsSection";


const Home = () => {
    return (
        <div>
            <SliderBanner />,
            <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg pt-10 my-10 w-11/12 mx-auto">
                <DhakaMap />
            </div>
            <FeaturedRooms />
            <Services />
            <TestimonialsSection />
        </div>
    );
};

export default Home;