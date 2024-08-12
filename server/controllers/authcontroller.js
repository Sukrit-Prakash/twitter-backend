const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')


exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });  // Save the hashed password under the 'password' field
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// exports.login = async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = await User.findOne({ username });  // Corrected to findOne
//         if (!user) return res.status(400).json({ error: 'Invalid username' });

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

//         const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
//         res.json({ token });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };


exports.login = async(req,res)=>{
   try {
     const {username,password}= req.body
     const user = await User.findOne({username})
     if (!user) return res.status(400).json({error:'invalid username'})
     // if(bcrypt.compare(hashedpassword,))
    if(!bcrypt.compare(password,user.password))
       return res.status(400).json({error:'invalid password'})
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
    console.log({token})
    res.json({ token });
   } catch (error) {
    console.log(error)
   }
}