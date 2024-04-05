const User = require("../models/user-model");

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    console.log(req.body)

    // const existingUser = await User.findOne({ email });

    // if (existingUser) {
    //   return res.status(400).json({ error: "User already exists" });
    // }

    // const newUser = new User({
    //   username,
    //   email,
    //   password,
    // });

    // await newUser.save();

    // return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await user.isValidPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = user.generateAuthToken();

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser };
