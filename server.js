
const { config } = require("dotenv");
config();
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require('path');
const app = express();


const port = process.env.SERVER_PORT || "3000";
const host = process.env.SERVER_HOST || "127.0.0.1";



// Middleware imports
const { isAuthenticated, isAdmin, isWritter } = require("./middleware/auth");

// Routes imports
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const writterRoutes = require("./routes/writterRoutes");
const homeRoutes = require("./routes/homeRoutes");

// Uses

const cors = require("cors");
const orgPort = 3000
app.use(cors({ origin: "http://localhost:"+orgPort, credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const {apiAuthRoutes,apiHomeRoutes} = require("./core/api_routes");

app.use(apiAuthRoutes.root, authRoutes);
app.use(apiHomeRoutes.root, homeRoutes);
app.use("/api/user", isAuthenticated, userRoutes);
app.use("/api/writer", isAuthenticated, isWritter, writterRoutes);
app.use("/api/admin", isAuthenticated, isAdmin, adminRoutes);
app.use("/api/*", (req, res) =>
  res.status(404).json({ state: false, message: "Not Found 404..." })
);

// UI APP Serving
// Serve static files from the "ui" directory

app.use("/imgs/articles-imgs/", express.static(path.join(__dirname, 'public','articles_images')));

app.use(express.static(path.join(__dirname, 'public','ui')));
// Serve ui routes
app.get('*', (req, res) => {
  const pth = path.join(__dirname, 'public','ui', 'index.html');
  res.sendFile(pth);
});

app.listen(port, host, () =>
  console.log("Server is Running on: http://" + host + ":" + port)
);