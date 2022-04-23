import mongoose from "mongoose"
const User = mongoose.model("User")
const Quote = mongoose.model("Quote")
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "./config.js";

const resolvers = {
  Query: {
    users: async()=> await User.find({}),
    user: async(_,{_id})=> await User.findOne({_id}),
    quotes:async()=> await Quote.find({}).populate("by","_id firstName"),
    iquote: async(_,{by})=> await Quote.findOne({by})
  },
  User:{
   quotes:async(par)=> await Quote.find({by:par._id})
  },
  Mutation: {
    signupUser: async (_, { userNew }) => {
      const userExist = await User.findOne({ email: userNew.email })
      if (userExist) {
        throw new Error("user already exist with this email")
      }
      const hashedPassword = await bcrypt.hash(userNew.password, 12)
      const newUser = await new User({
        ...userNew,
        password: hashedPassword
      })
      return await newUser.save()
    },
    signinUser: async (_, { userSignin }) => {
      const user = await User.findOne({ email: userSignin.email })
      if (!user) { throw new Error("invalid credentials") }
      const passMatch = await bcrypt.compare(userSignin.password, user.password)
      if (!passMatch) { throw new Error("invalid credentials") }
      const token = jwt.sign({ userId: user._id }, JWT_SECRET)
      return { token}
    },

    createQuote: async (_, {name},{userId}) => {
      if (!userId) {
        throw new Error("you must login first")
      }
      const newQuote = new Quote({
        name,
        by: userId
      })
      return await newQuote.save()
      
    },
       //need to fix
     updateQuote: async(_, {name})=>{
      await Quote.findByIdAndUpdate(_id,name, {
        new: true
      })
          return Quote.findOne({ _id });
    } 

  }

}


export default resolvers