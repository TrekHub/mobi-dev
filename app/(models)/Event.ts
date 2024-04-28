// import { ConnectionOptions } from "mongodb";
import mongoose, { Schema, ConnectOptions } from "mongoose";

// Define MongoDB connection options
const mongooseOptions: ConnectOptions = {
  // useNewUrlParser: true,
};

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/EventDB",
    mongooseOptions // Pass connection options directly
  )
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

mongoose.Promise = global.Promise;

// Define event schema
const eventSchema = new Schema(
  {
    event_name: String,
    event_description: String,
    // banner_img: { type: String }, // Store image path or reference
    location: String,
    country: String,
    city: String,
    start_date:  String,
    end_date:  String,
    start_time: String, // Consider using Date/Time type
    end_time: String, // Consider using Date/Time type
    venue_name: String,
    location2: String,
    meeting_link: String,
    email: String,
    ticket_price: String, // Or use Number for price
    abbreviation: String,
    first_name: String,
    middle_name: String,
    last_name: String,
    phone_number: String,
    website: String,
    facebook_link: String,
    instagram_link: String,
    twitter_link: String,
    other_info: String,
  },
  {
    timestamps: true,
  }
);

// Define the Event model
const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
