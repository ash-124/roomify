import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedRooms = () => {
    const [featuredRooms, setFeaturedRooms] = useState([])
    try {
        useEffect(() => {

            const fetchAllData = async () => {

                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allRooms?featured=true`)
                console.log(data)
                setFeaturedRooms(data)
            }
            fetchAllData();

        }, [])



    } catch (error) {
        console.log(error)
    }
    return (
        <section className="py-10 w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Featured Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
        {featuredRooms.map((room) => (
          <div
            key={room.id}
            className="card w-full bg-base-100 shadow-xl rounded-lg overflow-hidden"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-56 object-cover"
            />
            <div className="card-body">
              <h3 className="text-xl font-bold">{room.name}</h3>
              <p className="text-sm text-gray-600">{room.description}</p>
              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/room/${room.id}`} // Adjust the route based on your routing setup
                  className="btn btn-primary"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default FeaturedRooms;