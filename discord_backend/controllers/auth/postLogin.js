const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    const { mail, password } = req.body;

    const user = await User.findOne({ mail: mail.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      //send new token
      const token = jwt.sign(
        {
          userId: user._id,
          mail,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );

      return res.status(200).json({
        userDetails: {
          mail: user.mail,
          token,
          username: user.username,
          _id: user._id,
        },
      });
    }

    return res.status(400).send("Invalid credentials. Pleas try again");
  } catch (err) {
    return res.status(500).send("Somthing went wrong. Please try again");
  }
  //   console.log("login route");
};

module.exports = postLogin;
