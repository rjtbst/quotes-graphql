import {ApolloServer} from 'apollo-server';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';
import typeDefs from './schemGql.js';
import resolvers from './resolvers.js';
import { MONGO_URI } from './config.js';
import mongoose from 'mongoose';



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

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground
    ]
})

server.listen().then(({url})=>{
    console.log(`server is running on : ${url}`);
})