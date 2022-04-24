import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ApolloClient, InMemoryCache,ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  headers:{
    authorization:localStorage.getItem("token") || ""
  }
});

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


