/* eslint-disable react/prop-types */
import { useState } from "react";
import StarRating from "react-star-rating-input";

const BookingModal = ({ type, booking, onClose, onAction, user }) => {
    const [review, setReview] = useState({
        rating: 0,
        comment: "",
    });
    const [newDate, setNewDate] = useState(
        booking?.bookingDate ? new Date(booking.bookingDate) : new Date()
    );

    const handleAction = async () => {
        if (type === "review") {
            const payload = {
                username: user.username,
                rating: review.rating,
                comment: review.comment,
                timestamp: new Date().toISOString(),
            };
            await onAction(payload); // Submit review
        } else if (type === "update") {
            await onAction(newDate); // Update booking date
        }
        onClose();
    };

    return (
        <div className="modal modal-open">
            <div className="modal-box">
                <h2 className="font-bold text-lg">
                    {type === "review" ? "Write a Review" : "Update Booking"}
                </h2>
                <p>{booking.name}</p>

                {type === "review" && (
                    <div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold">Username</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                value={user.username}
                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold">Rating</label>
                            <StarRating
                                value={review.rating}
                                onChange={(value) =>
                                    setReview((prev) => ({ ...prev, rating: value }))
                                }
                                max={5}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold">Comment</label>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                placeholder="Write your comment..."
                                value={review.comment}
                                onChange={(e) =>
                                    setReview((prev) => ({ ...prev, comment: e.target.value }))
                                }
                            />
                        </div>
                    </div>
                )}

                {type === "update" && (
                    <div className="mb-4">
                        <label className="block text-sm font-bold">Select New Date</label>
                        <input
                            type="date"
                            className="input input-bordered w-full"
                            value={newDate.toISOString().split("T")[0]} // Format date
                            onChange={(e) => setNewDate(new Date(e.target.value))}
                        />
                    </div>
                )}

                <div className="modal-action">
                    <button onClick={handleAction} className="btn btn-primary">
                        {type === "review" ? "Submit Review" : "Update Date"}
                    </button>
                    <button onClick={onClose} className="btn btn-secondary">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
