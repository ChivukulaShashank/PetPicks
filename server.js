const express = require('express');
const mongoose = require('./mongo');
const bcrypt=require('bcrypt');

const path = require('path');

const app = express();

// Define Mongoose schema for login and signup
const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const signupSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create models for login and signup
const LogInCollection = mongoose.model('LogInCollection', loginSchema);
const SignUpCollection = mongoose.model('SignUpCollection', signupSchema);

// Handle login request
app.post("/login", async function(req, res) {
    const { username, password } = req.body;
    try {
        const user = await LogInCollection.findOne({ username });
        if (!user) {
            return res.status(401).send("Invalid credentials no user");
        }
        const passwordMatch = await LogInCollection.findOne({ password });
        if (!passwordMatch) {
            return res.status(401).send("Invalid credentials no password");
        }
        res.sendFile();
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Handle signup request
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if the username already exists
        const existingUser = await SignUpCollection.findOne({ username });
        if (existingUser) {
            return res.status(400).send("Username already exists");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user document for signup collection
        const newUserSignup = new SignUpCollection({
            username: username,
            email: email,
            password: hashedPassword
        });
        await newUserSignup.save();     // Save the new user to the signup collection

        // Create a new user document for login collection
        const newUserLogin = new LogInCollection({
            username: username,
            password: hashedPassword
        });
        await newUserLogin.save();      // Save the new user to the login collection

        // Redirect to the login page after successful signup
        res.redirect("/login");
    } catch (error) {
        console.error("Error occurred during signup:", error);
        res.status(500).send("Internal Server Error");
    }
});


const PORT = 8080;
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});


