const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const waitlistRoute = require("./routes/waitlist.route");

const PORT = 3000;

const app = express();

app.use(
	cors({
		origin: process.env.FRONTEND_URL || "http://localhost:5173",
	}),
);
app.use(express.json());

app.use("/api/", waitlistRoute);

app.get("/api/health", (req, res) => {
	res.status(200).json({ ok: true, message: "MediGuard API is healthy" });
});

connectDB();

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
