import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
} from "react-router-dom";

export const postsData = [
  {
    id: '1',
    message: 'hi there',
    likesCount: '29'
  },
  {
    id: '2',
    message: 'how are u dog?',
    likesCount: '59'
  },
  {
    id: '3',
    message: 'Have a nice walk!',
    likesCount: '98'
  },
  {
    id: '4',
    message: 'Live my best life!',
    likesCount: '19'
  },
];

export const dialogsData = [
  {
    id: '1',
    name: 'Bobby'
  },
  {
    id: '2',
    name: 'Dylan'
  },
  {
    id: '3',
    name: 'Mary'
  },
  {
    id: '4',
    name: 'Tom'
  },
  {
    id: '5',
    name: 'Ted'
  },
];

export const messagesData = [
  {
    id: '1',
    message: 'Hi! How are u?',
  },
  {
    id: '2',
    message: 'Hi! i am fine, u?',
  },
  {
    id: '3',
    message: 'Me too!',
  },
  {
    id: '4',
    message: 'Cool!',
  },
  {
    id: '5',
    message: '<3',
  },
];

export const profileData = [
  {
    name: 'Morti G.',
    breed: 'British Shorthair',
    birth: 'August, 5',
    city: 'Moscow, Russia',
    postsquality: '127',
    followers: '200',
    following: '78'
  },
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App dialogs={dialogsData} messages={messagesData} profiles={profileData} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
