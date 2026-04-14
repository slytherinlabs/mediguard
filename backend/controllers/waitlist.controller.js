const WaitlistModel = require("../models/waitlist.schema");

const addToWaitlist = async (req, res) => {
	try {
		const { firstName, lastName, email, phoneNumber, reason } = req.body;

		if (!firstName || !lastName || !email || !phoneNumber || !reason) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({ message: "Invalid email address" });
		}

		const phoneRegex = /^[0-9]{10}$/;
		if (!phoneRegex.test(phoneNumber)) {
			return res.status(400).json({ message: "Invalid phone number" });
		}

		const existingUser = await WaitlistModel.findOne({ email });
		if (existingUser) {
			return res.status(409).json({
				success: false,
				message: "You are already on the waitlist",
			});
		}

		const user = await WaitlistModel.create({
			firstName,
			lastName,
			email,
			phoneNumber,
			reason,
		});

		if (!user) {
			return res.status(500).json({
				success: false,
				message: "Failed to add user to waitlist",
			});
		}

		return res.status(201).json({
			success: true,
			message: "You have been added to the waitlist",
			data: {
				id: user._id,
				firstName: user.firstName,
				email: user.email,
			},
		});
	} catch (error) {
		if (error?.code === 11000) {
			return res.status(409).json({
				success: false,
				message: "You are already on the waitlist",
			});
		}

		console.log("Waitlist submission error:", error);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};

module.exports = addToWaitlist;
