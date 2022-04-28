import {gql} from '@apollo/client'

export const GET_ALL_QUOTES = gql`
 query getAllQuotes {
    quotes{
      name
      by{
        _id
        firstName
      }
    }
  }
  `


export const GET_MY_PROFILE = gql`
   query getMyProfile{
  user: myprofile{
    _id
      firstName
      lastName
      email
      quotes{
        name
      }
    }
   }
`

export const GET_INDIVIDUAL_USER = gql`
query getIndividualUserById ($userId:ID!){
 user: user(_id:$userId){
    _id
    firstName
    lastName
    email
    quotes {
      name
    }
  }
}

`

