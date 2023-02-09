import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
  },
  {
    id: 3,
    url: '/Service',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'Contact',
  },
  {
    id: 5,
    url: '/Tracksheet',
    text: 'Tracksheet',
  },
  {
    id: 6,
    url: '/Support',
    text: 'Support',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
];