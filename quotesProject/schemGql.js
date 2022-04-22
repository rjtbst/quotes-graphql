import {gql} from 'apollo-server';


const typeDefs = gql`
type Query{
     users:[User]
     user(_id:ID!):User
     quotes:[QuoteWithName] 
     iquote(by:ID!):[Quote] 
}
type User {
    _id:ID!
    firstName:String!
    lastName:String!
    email:String!
    password:String!  
    quotes:[Quote]
}
type Quote {
    name:String!
    by:ID!
}
type QuoteWithName {
    name: String 
    by: idName
}
type idName{
    _id: String 
    firstName: String
}

type Token {
    token:String!
}
type Mutation {
    signupUser(userNew:UserInput!):User
    signinUser(userSignin:UserSigninInput!): Token
    createQuote(name:String!) : Quote 
    updateQuote(name:String! ,by:ID!) : Quote
}


input UserInput {
    firstName:String! 
    lastName: String!
    email: String!
    password:String!
}
input UserSigninInput {
    email: String! 
    password: String!
}

`

export default typeDefs