# Assignment Category 03: Hotel Booking Platform

## Project Overview
The goal of this project is to build a modern, user-friendly **Hotel Booking Platform** that allows users to browse and book hotel rooms effortlessly. This project is designed to assess your skills, creativity, and problem-solving abilities while maintaining high standards for usability and functionality.

---

## Key Features 📋
### Homepage Design 🏡
- **Banner:** A slider showcasing a heading, description, and button leading to the rooms page.
- **Map:** Display hotel locations using `react-leaflet`.
- **Featured Rooms:** Highlight six top-rated rooms with images, descriptions, and a "Book Now" button.
- **User Reviews:** Showcase authentic user reviews sorted by timestamp.
- **Extra Sections:** Add two relevant and attractive sections.

### User Authentication 📝
- **Login Page:**
  - Email/password authentication.
  - Google or GitHub login.
  - Redirect to the Register page if needed.
  - Show validation errors and success messages.
- **Register Page:**
  - Input for name, email, photo URL, and password.
  - Enforce password validation rules.
  - Redirect to the Login page if needed.

### Rooms Page 🛌
- Display all rooms from the database in a card/table format.
- Filter rooms by price range (server-side).
- Clicking a room card redirects to the room details page.

### Room Details Page 🏡
- Show detailed information and reviews for a specific room.
- Include a "Book Now" button with a summary modal for bookings.
- Allow users to select booking dates and ensure availability.

### My Bookings Page 🛌
- Display bookings for the logged-in user with options to cancel or update the booking date.
- Allow users to post reviews for booked rooms.

### Review System 📝
- Users can post reviews with ratings, comments, and timestamps.
- Display reviews on the room details page for others.

### Access Control 🔒
- Unauthenticated users can view basic details but cannot book or post reviews.
- Redirect unauthenticated users attempting to book to the login page.

### Additional Features 🌟
- **404 Page:** A creative 404 page with a "Back to Home" button.
- **Special Offers:** Pop-up/modal showcasing special offers and promotions.
- **JWT Authentication:** Secure API routes with JWT.
- **Booking Cancellation:** Allow cancellations only before a specified date.

### Optional Features
- **Gallery:** Showcase hotel, room, and amenities images.
- **Sort System:** Sort rooms by availability, date range, or offers.
- **Toggle View:** Switch between card and table views.
- **About Us & Contact Us Pages.**

---

## Guidelines 📌
- Maintain at least 15 commits (client-side) and 8 commits (server-side) with meaningful messages.
- Ensure Firebase and MongoDB credentials are secured using environment variables.
- Design with proper alignment, spacing, and color contrast to appeal to recruiters.
- Avoid using designs from module assignments or other references.
- Handle errors gracefully (e.g., CORS, 404, and token verification issues).

---

## Deployment Requirements ⚙️
- Server must function without errors in production.
- Live link should work flawlessly without page reload errors.
- Configure Firebase domain authorization properly.
- Maintain user session across route reloads for private routes.

---

## Packages Used 🛠️
- `react-leaflet` for map integration.
- `moment.js` for date comparison.
- `framer-motion` for animations.
- `react-helmet` for updating metadata.

---

## ✅ 
- **Client-side GitHub repository.https://github.com/ash-124/ph-a11-server**
- **Server-side GitHub repository.https://github.com/ash-124/ph-a11-client**


---

## Live URL 🌐
https://visa-navigator-fab2f.web.app/login
---

## Contact 💬
If you encounter any issues or have questions, feel free to reach out.
