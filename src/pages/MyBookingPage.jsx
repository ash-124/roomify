import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import BookingModal from "../components/BookingModal";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner";

const MyBookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    const [modalType, setModalType] = useState(null);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const { user, loading, setLoading } = useContext(AuthContext);


    const fetchBookings = async () => {
        const email = user?.email; // Replace with dynamic user
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/booking?email=${email}`);
        setLoading(false)
        setBookings(data);
        // console.log('booked rooms of loggedIn user', data)
    };

    useEffect(() => {
        fetchBookings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.email]);

    const handleAction = async (payload) => {
        try {
            if (modalType === "cancel") {
                const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/booking/${selectedBooking.roomId}?id=${selectedBooking._id}`);
                if (data?.deletedCount === 1) {
                    toast.success("Booking canceled successfully!");
                }
                // console.log(data)

            } else if (modalType === "update") {
                await axios.put(`${import.meta.env.VITE_API_URL}/booked-rooms/${selectedBooking._id}`, { bookingDate: payload });
                toast.success("Booking date updated successfully!");
            } else if (modalType === "review") {
                await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, { bookingId: selectedBooking._id, review: payload });
                toast.success("Review submitted successfully!");
            }
            fetchBookings();
        } catch (error) {
            toast.error("Action failed. Try again!", error);
        }
    };
    if(loading){
        return <LoadingSpinner/>
    }
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Booking Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings?.map((booking) => (
                        <tr key={booking._id}>
                            <td>
                                <img src={booking.image} alt={booking.name} className="w-16 h-16" />
                            </td>
                            <td>{booking.name}</td>
                            <td>${booking.price}</td>
                            <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        setSelectedBooking(booking);
                                        setModalType("cancel");
                                    }}
                                    className="btn btn-danger"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedBooking(booking);
                                        setModalType("update");
                                    }}
                                    className="btn btn-primary mx-2"
                                >
                                    Update Date
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedBooking(booking);
                                        setModalType("review");
                                    }}
                                    className="btn btn-secondary"
                                >
                                    Review
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {modalType && selectedBooking && (
                <BookingModal
                    type={modalType}
                    booking={selectedBooking}
                    onClose={() => setModalType(null)}
                    onAction={handleAction}
                    user={user}
                />
            )}
        </div>
    );
};

export default MyBookingsPage;
