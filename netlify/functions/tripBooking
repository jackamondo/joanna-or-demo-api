const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid"); // Generates unique booking IDs

const app = express();
app.use(bodyParser.json());
app.use(cors());

let bookings = []; // Temporary storage for bookings

//Endpoint: Book a New Trip
app.post("/api/book-trip", (req, res) => {
    const { departure, destination, date, time, vehicle, passengers, ticketType } = req.body;

    if (!departure || !destination || !date || !time || !vehicle || !passengers || !ticketType) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const bookingId = uuidv4();
    const newBooking = {
        id: bookingId,
        departure,
        destination,
        date,
        time,
        vehicle,
        passengers,
        ticketType,
        status: "Pending Payment"
    };

    bookings.push(newBooking);
    res.status(201).json({ message: "Booking created", bookingId });
});

//Endpoint: Fetch Ticket Options
app.get("/api/tickets", (req, res) => {
    const ticketOptions = [
        { type: "Standard", price: 100 },
        { type: "FlexiPlus", price: 150 },
        { type: "Frequent Traveller", price: 80 }
    ];
    res.json(ticketOptions);
});

//Endpoint: Process Payment
app.post("/api/payment", (req, res) => {
    const { bookingId, paymentMethod } = req.body;
    const booking = bookings.find(b => b.id === bookingId);

    if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
    }

    if (!paymentMethod) {
        return res.status(400).json({ error: "Payment method required" });
    }

    booking.status = "Confirmed";
    booking.paymentMethod = paymentMethod;

    res.json({ message: "Payment successful", booking });
});

//Endpoint: Get Booking Details
app.get("/api/booking/:id", (req, res) => {
    const booking = bookings.find(b => b.id === req.params.id);
    
    if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
    }

    res.json(booking);
});

// Start the API Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});
