const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Use headline templates with placeholders
const HEADLINE_TEMPLATES = [
  "Why {name} is {location}'s Best Choice in 2025",
  "{name}: The #1 Spot for Locals in {location}",
  "Discover Why {name} is {location}'s Hidden Gem",
  "Is {name} the Best Place in {location}? Find Out!",
  "Top Reasons to Choose {name} in {location} This Year",
  "Why Everyone in {location} Loves {name}",
  "{name} in {location}: The Place You Can't Miss",
  "Your Guide to {name}, {location}'s Favorite Local Business",
  "Here’s Why {name} is Taking Over {location} in 2025",
  "{location}'s Best-Kept Secret? It’s {name}",
  "5 Reasons {name} is a Must-Visit in {location}",
  "{name}: The Talk of the Town in {location}",
  "Locals in {location} Can’t Get Enough of {name}",
  "{name}: The Local Favorite Everyone’s Raving About in {location}",
  "What Makes {name} Stand Out in {location}?",
  "{name}: The Place Locals Trust in {location}",
  "How {name} is Changing the Scene in {location}",
  "Why Families in {location} Choose {name} Again and Again",
  "{name}: Setting the Standard for Excellence in {location}",
  "{name} is Redefining Local Business in {location}",
  "{location} Locals Pick {name} as Their Top Choice",
  "Is {name} {location}’s Top Destination for 2025?",
  "The Secret Behind {name}'s Popularity in {location}",
  "{name}: A True Local Treasure in {location}",
  "Why {name} Continues to Shine in {location} Year After Year"
];


// Helper: fill placeholders
function generateHeadline(name, location) {
  const template = HEADLINE_TEMPLATES[Math.floor(Math.random() * HEADLINE_TEMPLATES.length)];
  return template
    .replace('{name}', name)
    .replace('{location}', location);
}

// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  const response = {
    rating: (Math.random() * (5 - 4) + 4).toFixed(1), // Simulated 4.0–5.0
    reviews: Math.floor(Math.random() * 200) + 50,    // Simulated 50–250
    headline: generateHeadline(name, location)
  };

  res.json(response);
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

  const headline = generateHeadline(name, location);
  res.json({ headline });
});

app.get('/', (req, res) => {
    res.send('ERP API is running...');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
