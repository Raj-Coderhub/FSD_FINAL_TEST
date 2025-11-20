// Import Express
const express = require("express");
const app = express();

// Allow JSON input
app.use(express.json());

// Hardcoded user (No Database)
const user = {
    username: "RAJ GAUTAM",
    password: "1234"
};

// POST /login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Check credentials
    if (username === user.username && password === user.password) {
        return res.json({
            success: true,
            message: "Login successful!"
        });
    }

    res.json({
        success: false,
        message: "Invalid credentials"
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
