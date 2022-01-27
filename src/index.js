import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const client = new ApolloClient({
  link: new HttpLink({ 
    uri: "https://rickandmortyapi.com/graphql"
  }),
  cache:new InMemoryCache(),
});


ReactDOM.render(
  <ApolloProvider client={client}>  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
