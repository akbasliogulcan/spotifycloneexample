🎧 Spotify Clone

A fully responsive Spotify-inspired music streaming UI, built using modern web technologies.
This project replicates the look and feel of Spotify while integrating real music data from the Shazam API.

🔗 Live Demo: https://spootifyyclonee.netlify.app/

🚀 Features

🎵 Real music data fetched from Shazam API

🎨 Modern and responsive UI

🔍 Search functionality for artists

🖼️ Dynamic artwork rendering

📱 Fully responsive layout

⚡ Fast and lightweight front-end architecture

🎚️ Interactive cards & hover effects

🛠️ Technologies Used

HTML5

CSS3 / SCSS

JavaScript (ES6+)

Shazam API (RapidAPI)

Netlify for deployment

📂 Project Structure
.
├── index.html
├── /assets
│   ├── css
│   └── js
│       ├── api.js
│       ├── app.js
│       └── ui.js
└── /images

🔌 API Usage

This project connects to the Shazam API to fetch:

Popular tracks

Artist details

Album images

Example request:

const response = await fetch(
  `https://shazam.p.rapidapi.com/v2/search?term=${query}`,
  options
);

📦 Installation & Setup
# Clone the repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Enter the project folder
cd YOUR-REPO-NAME

# Open the project
Open index.html in your browser or use a live server extension

🌐 Deployment

The project is deployed using Netlify.

You can quickly deploy your own version:

Go to https://app.netlify.com

Click New site from Git

Select your GitHub repo

Deploy instantly 🎉

📸 Screenshots

(Optional — If you want, I can add screenshot sections and hosted images.)

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a pull request.

📄 License

This project is for educational and portfolio purposes.
All rights to Spotify assets belong to their respective owners.
