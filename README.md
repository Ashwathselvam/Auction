🛒 Auction Platform
Auction is a full-stack web application designed to facilitate online auctions. Built with a robust backend and an intuitive frontend, it allows users to create, manage, and participate in auctions seamlessly.

🚀 Features
User Authentication: Secure login and registration system.

Auction Management: Create, edit, and delete auction listings.

Real-Time Bidding: Participate in live auctions with real-time bid updates.

Responsive Design: Optimized for both desktop and mobile devices.

Dockerized Deployment: Easily deploy the application using Docker and Docker Compose.

🛠️ Tech Stack
Backend: C# (.NET Core)

Frontend: HTML, CSS, Less, TypeScript

Containerization: Docker, Docker Compose

📂 Project Structure
bash
Copy
Edit
├── .config/               # Configuration files
├── .vscode/               # VSCode settings
├── frontend/              # Frontend application (web-app)
├── src/                   # Backend source code
├── Auction.sln            # Solution file
├── docker-compose.yaml    # Docker Compose configuration
└── .editorconfig          # Editor configuration
🧪 Getting Started
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Ashwathselvam/Auction.git
cd Auction
Build and run with Docker Compose:

bash
Copy
Edit
docker-compose up --build
Access the application:

Open your browser and navigate to http://localhost:3000 (or the port specified in docker-compose.yaml).

📄 License
This project is open-source and available under the MIT License.

