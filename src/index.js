import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const httpLink = createHttpLink({
  uri: "https://access-afya.herokuapp.com/",
  credentials:"include"
});


const cache = new InMemoryCache();

const initData={
  authorId:""
}

cache.writeData({data:initData});

const client = new ApolloClient({
    link:httpLink,
    cache,
    resolvers:{}
   
});

ReactDOM.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
