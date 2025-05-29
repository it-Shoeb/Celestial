const mongoose = require("mongoose");

const planetSchema = mongoose.Schema({
  destination: String,
  overview: String,
  highlights: [],
  distance: String,
  duration: String,
  activities: [],
  accommodations: [{}],
  packing_list: [],
  itinerary: {
    day_1: {
      activities: [],
    },
    day_2: {
      activities: [],
    },
  },
  safety_tips: [],
  cultural_insights: {
    facts: [],
  },
  image: String,
});

module.exports = mongoose.model("planet", planetSchema);
