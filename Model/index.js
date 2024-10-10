const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  resumeId: String,
  firstName: String,
  lastName: String,
  title: String,
  jobTitle: String,
  address: String,
  userEmail: String,
  userName: String,
  password: String,
  email: String,
  phone: String,
  summery: String,
  themeColor: String,
  experience: [
    {
      title: String,
      companyName: String,
      state: String,
      city: String,
      startDate: String,
      endDate: String,
      workSummery: String,
      currentlyWorking: Boolean,
    },
  ],
  education: [
    {
      universityName: String,
      startDate: String,
      endDate: String,
      degree: String,
      major: String,
      description: String,
    },
  ],
  skills: [
    {
      name: String,
      rating: Number,
    },
  ],
});

module.exports = mongoose.model("Users", userSchema);
