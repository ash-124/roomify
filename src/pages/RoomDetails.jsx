import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // Define fetchSingleData outside useEffect
    const fetchSingleData = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/rooms/${id}`, { withCredentials: true });
            setRoom(data);
        } catch (error) {
            console.log("Error fetching room details:", error);
            toast.error("Failed to load room details. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        fetchSingleData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const {
        name = "",
        price = 0,
        description = "",
        size = "",
        occupancy = "",
        bedType = "",
        reviews = [],
        totalReviews = 0,
        ratingAverage = 0,
        image = "",
        amenities = [],
        availability = false,
    } = room;

    const handleBooking = async () => {
        if (!availability) {
            toast.error("This room is not available for booking.");
            return;
        }

        // Fetch updated room data before opening the modal
        await fetchSingleData();

        setIsModalOpen(true);
    };

    const confirmBooking = async () => {
        if (!user) {
            toast.error("You must be logged in to book a room.");
            return;
        }
        if (!selectedDate) {
            toast.error("Please select a booking date.");
            return;
        }

        const bookingData = {
            roomId: room.id,
            bookedUser: user.email,
            bookingDate: selectedDate,
            name,
            price,
            description,
            image,
        };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/booked-rooms`, bookingData);
            if (data) {
                toast.success(
                    `Booking Confirmed!\nRoom: ${name}\nDate: ${format(
                        selectedDate,
                        "yyyy-MM-dd"
                    )}\nPrice: $${price}`
                );
                await fetchSingleData(); // Refresh the room data after booking
                setIsModalOpen(false);
                navigate('/my-bookings')

            }
        } catch (error) {
            console.log("Error posting booking data:", error);
            toast.error("Failed to confirm booking. Please try again.");
        }
    };

    if (loading) {
        return <LoadingSpinner />;
    }
    console.log(ratingAverage)
    return (
        <div className="container mx-auto p-6">
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt={name} className="w-full h-[400px] object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p className="text-lg">{description}</p>
                    <p><strong>Size:</strong> {size}</p>
                    <p><strong>Occupancy:</strong> {occupancy} persons</p>
                    <p><strong>Bed Type:</strong> {bedType}</p>
                    <p><strong>Price:</strong> ${price} per night</p>
                    <p><strong>Amenities:</strong> {amenities.join(", ")}</p>
                    <p>
                        <strong>Rating:</strong> {ratingAverage} ({totalReviews} reviews)
                    </p>
                    <h3 className="text-xl font-bold mt-4">Reviews</h3>
                    {reviews.length > 0 ? (
                        <ul className="space-y-4">
                            {reviews.map((review, index) => (
                                <li key={review.id || index} className="border p-4 rounded-lg">
                                    <p><strong>{review.username}</strong> - {review.rating} ⭐</p>
                                    <p>{review.comment}</p>
                                    <p className="text-sm text-gray-500">{new Date(review.timestamp).toLocaleString()}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No reviews available for this room.</p>
                    )}
                    <div className="card-actions mt-4">
                        <button
                            className="btn btn-primary"
                            onClick={handleBooking}
                            disabled={!availability}
                        >
                            {availability ? "Book Now" : "Unavailable"}
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Booking Summary</h3>
                        <p><strong>Room:</strong> {name}</p>
                        <p><strong>Price:</strong> ${price} per night</p>
                        <p><strong>Description:</strong> {description}</p>
                        <div className="my-4">
                            <label className="block mb-2 font-bold">Select Booking Date:</label>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="yyyy-MM-dd"
                                minDate={new Date()}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="modal-action">
                            <button
                                className="btn btn-primary"
                                onClick={confirmBooking}
                            >
                                Confirm
                            </button>
                            <button
                                className="btn"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomDetails;
