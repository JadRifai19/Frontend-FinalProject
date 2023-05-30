import React, { useState } from 'react';

const BookingApp = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookings, setBookings] = useState([]);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedTime) {
      const newBooking = {
        time: selectedTime,
        name: 'John Doe', // Replace with user's name or user authentication system
      };
      setBookings([...bookings, newBooking]);
      setSelectedTime(null);
    }
  };

  const isTimeBooked = (time) => {
    return bookings.some((booking) => booking.time === time);
  };

  const isTimeEquipped = (time) => {
    // Add your logic to determine if the time slot is equipped
    return time === '10:00' || time === '14:00';
  };

  return (
    <div className="bookingApp">
      <h2>Training Session Booking</h2>
      <div className="calendar">
        <h3>Available Time Slots</h3>
        <div className="timeSlots">
          {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'].map(
            (time) => (
              <div
                key={time}
                className={`timeSlot ${
                  isTimeBooked(time) ? 'booked' : ''
                } ${isTimeEquipped(time) ? 'equipped' : ''}`}
                onClick={() => handleTimeClick(time)}
              >
                {time}
              </div>
            )
          )}
        </div>
        <div className="bookingStatus">
          {selectedTime && (
            <p>
              Selected Time: <strong>{selectedTime}</strong>
            </p>
          )}
          {selectedTime && isTimeBooked(selectedTime) && (
            <p className="unavailable">Unavailable</p>
          )}
          {selectedTime && !isTimeBooked(selectedTime) && (
            <p className="available">Available</p>
          )}
          {selectedTime && isTimeEquipped(selectedTime) && (
            <p className="equipped">Equipped</p>
          )}
        </div>
        <button
          className="bookButton"
          disabled={!selectedTime || isTimeBooked(selectedTime)}
          onClick={handleBooking}
        >
          Book
        </button>
      </div>
      <div className="bookings">
        <h3>Bookings</h3>
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <ul>
            {bookings.map((booking, index) => (
              <li key={index}>
                <strong>{booking.time}</strong> - {booking.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BookingApp;
