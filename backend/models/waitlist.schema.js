const mongoose = require("mongoose");

const waitlistSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, "First name is required"],
			trim: true,
			minlength: [2, "First name should be at least 2 characters"],
			maxlength: [50, "First name should not exceed 50 characters"],
		},
		lastName: {
			type: String,
			required: [true, "Last name is required"],
			trim: true,
			minlength: [2, "Last name should be at least 2 characters"],
			maxlength: [50, "Last name should not exceed 50 characters"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			lowercase: true,
			trim: true,
			unique: true,
		},
		phoneNumber: {
			type: String,
			required: [true, "Phone number is required"],
			trim: true,
			match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
		},
		reason: {
			type: String,
			required: [true, "Reason is required"],
			trim: true,
			minlength: [10, "Reason should be at least 10 characters"],
			maxlength: [500, "Reason should not exceed 500 characters"],
		},
	},
	{ timestamps: true },
);

const WaitlistModel = mongoose.model("Waitlist", waitlistSchema);

module.exports = WaitlistModel;
