import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const userRegistration = async(req, res)=> {
    try {
        const {username, email, password, role} = req.body

        // check if user already exists
        const userExists = await User.findOne({ $or: [{username}, {email}]})
        if(userExists){
            return res.status(400).json({
                success: false,
                message: 'Username or email is already used'
            })
        }

        // hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        // save to database
        const addNewUser = new User({
            username, 
            email, 
            password: hashedPassword, 
            role: role || 'user'
        })
        await addNewUser.save()

        if(addNewUser){
            res.status(201).json({
                success: true,
                message: 'User registered successfully'
            })
        }else{
            res.status(400).json({
                success: false,
                message: 'Unable to register user. Please try again'
            })
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Some error occurred, please try again later'
        })
    }
}

const userLogin = async(req, res)=> {
    try {
        const {username, password} = req.body

        // check if user is in database
        const user = await User.findOne({username})
        if(!user){
            return res.status(404).json({
            success: false,
            message: "Invalid username"
            })
        }
        // check password if correct or not
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            return res.status(404).json({
                success: false,
                message: "Incorrect password"
                })
        }

        // if credentials is correct-> create a token
        const accessToken = jwt.sign({
            userId: user._id,
            username: user.username,
            role: user.role
        }, process.env.JWT_SECRET_KEY, {
            expiresIn : '30m'
        })

        // send the token to front end
        res.status(200).json({
            success: true,
            message: 'Log in successful',
            accessToken
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Some error occurred, please try again later'
        })
    }
}

export {userRegistration, userLogin}