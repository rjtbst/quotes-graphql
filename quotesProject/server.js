
import {ApolloServer} from 'apollo-server';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';
import typeDefs from './schemGql.js';
import { JWT_SECRET, MONGO_URI } from './config.js';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';


mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected",()=>{
    console.log(`connected to mongodb`);
})

mongoose.connection.on("error",(err)=>{
    console.log("error",err);
})


import "./models/User.js";
import "./models/Quote.js"
import resolvers from './resolvers.js';

const context =({req})=>{
    const {authorization} = req.headers; 
    if(authorization){
      const {userId}=  jwt.verify(authorization, JWT_SECRET )
      return {userId}
    }       
 }

const server = new ApolloServer({
    typeDefs, 
    resolvers,
   context, 
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground
    ]
})

server.listen().then(({url})=>{
    console.log(`server is running on : ${url}`);
})




