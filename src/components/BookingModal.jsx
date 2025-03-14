/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";

const BookingModal = ({ type, booking, onClose, onAction, user }) => {
  console.log({ type, booking, onClose, onAction, user });
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
        username: user?.displayName,
        rating: review.rating,
        comment: review.comment,
        timestamp: new Date().toISOString(),
        roomId: booking.roomId,
      };
      console.log(payload);
      await onAction(payload); // Submit review
    } else if (type === "update") {
      await onAction(newDate); // Update booking date
    } else if (type === "cancel") {
      // Use SweetAlert for confirmation
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to cancel this booking? This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, cancel it!",
        cancelButtonText: "No, keep it",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await onAction(); // Trigger cancel booking
          Swal.fire("Canceled!", "Your booking has been canceled.", "success");
          onClose(); // Close modal after cancellation
        }
      });

      return; // Skip the default `onClose()` when SweetAlert is used
    }
    onClose(); // Close modal for review or update
  };
  console.log(review.rating)
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="font-bold text-lg">
          {type === "review" && "Write a Review"}
          {type === "update" && "Update Booking"}
          {type === "cancel" && "Cancel Booking"}
        </h2>
        <p className="text-sm mb-4">{booking?.name}</p>

        {type === "review" && (
          <div>
            <div className="mb-4">
              <label className="block text-sm font-bold">Username</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={user?.displayName}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold">Rating (1-5)</label>
              <input
                type="number"
                className="input input-bordered w-full"
                min="1"
                max="5"
                step="1"
                value={review.rating}
                onChange={(e) =>
                  setReview((prev) => ({
                    ...prev,
                    rating: Math.min(5, Math.max(1, Number(e.target.value))), // Ensure value stays valid
                  }))
                }
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
            {/* Update Date Picker */}
            <label className="block text-sm font-bold">Select New Date</label>
            <input
              type="date"
              className="input input-bordered w-full"
              value={newDate.toISOString().split("T")[0]} // Format date
              onChange={(e) => setNewDate(new Date(e.target.value))}
            />
          </div>
        )}

        {type === "cancel" && (
          <div className="mb-4">
            {/* Cancel Confirmation */}
            <p className="text-sm text-gray-600">
              Are you sure you want to cancel this booking? This action cannot
              be undone.
            </p>
          </div>
        )}

        <div className="modal-action">
          <button
            onClick={handleAction}
            className={`btn ${type === "cancel" ? "btn-error" : "btn-primary"}`}
          >
            {type === "review" && "Submit Review"}
            {type === "update" && "Update Date"}
            {type === "cancel" && "Confirm Cancel"}
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