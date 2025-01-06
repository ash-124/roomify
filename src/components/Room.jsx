/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Room = ({ room }) => {
    return (
        <Link
            to={`/room/${room.id}`}
            key={room.id}
            className="card w-full hover:p-2 transition-all ease-in-out bg-base-100 shadow-xl rounded-lg overflow-hidden"
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
        </Link>
    );
};

export default Room;