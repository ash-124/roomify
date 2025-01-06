/* eslint-disable react/prop-types */
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingModal = ({
  type, // "cancel", "update", "review"
  booking,
  onClose,
  onAction,
}) => {
  const [newDate, setNewDate] = useState(new Date(booking?.bookingDate || ""));
  const [review, setReview] = useState("");

  const handleAction = async () => {
    if (type === "cancel") {
      await onAction(); // Call API for cancellation
    } else if (type === "update") {
      await onAction(newDate); // Call API with updated date
    } else if (type === "review") {
      await onAction(review); // Call API with review text
    }
    onClose();
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="font-bold text-lg">
          {type === "cancel"
            ? "Confirm Cancellation"
            : type === "update"
            ? "Update Booking Date"
            : "Post a Review"}
        </h2>
        <p>{booking.name}</p>

        {type === "update" && (
          <DatePicker
            selected={newDate}
            onChange={(date) => setNewDate(date)}
            className="input input-bordered w-full my-4"
          />
        )}

        {type === "review" && (
          <textarea
            className="textarea textarea-bordered w-full my-4"
            placeholder="Write your review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        )}

        <div className="modal-action">
          <button onClick={handleAction} className="btn btn-primary">
            {type === "cancel"
              ? "Yes, Cancel"
              : type === "update"
              ? "Update"
              : "Submit"}
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
