import React from 'react';
import FullScreenSection from './FullScreenSection';
import { Box, Heading } from '@chakra-ui/react';
import Card from './Card';

const projects = [
  {
    title: 'Weather-WhisperAp',
    description:
      'Weather Whisper is a web-based application designed to provide users with real-time weather information. This AWS Edition showcases the full migration and optimization of the application within the AWS Cloud. Skills: HTML, CSS, and JavaScript, API, AWS, S3, Lambda, API Gateway, DynamoDB, CloudFront, Route 53, CloudWatch.',
    getImageSrc: () => require('../images/Project1WheatherApp.png'),
    url: 'https://github.com/Kirill777-web/weather-whisper-AWS',
  },
  {
    title: 'Pawfect-Match',
    description:
      'Pawfect Match strives to solve this problem by streamlining the pet adoption process. By providing a comprehensive list of pets available for adoption online, potential pet owners can save themselves the hassle of visiting their local animal shelter. Skills: HTML, CSS, JavaScript, API, Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Heroku, MVC Git, GitHub.',
    getImageSrc: () => require('../images/PawfectmatchProject2.png'),
    url: 'https://github.com/Kirill777-web/Pawfect-Match',
  },
  {
    title: 'ThoughtThrive',
    description:
      'ThoughtThrive Blog App is a full-featured blogging platform designed to provide a seamless experience for users to create, share, and interact with blog content. It aims to empower users with a friendly interface and provide a space for open communication and content sharing. Skills: HTML, CSS, JavaScript, API, Node.js, Express.js, Heroku, Git, GitHub.',
    getImageSrc: () => require('../images/Thought-ThriveProject3.png'),
    url: 'https://github.com/Kirill777-web/Thought-Thrive',
  },
  {
    title: 'Note-Me',
    description:
      'Note Taker App is a dynamic web application designed to allow users to quickly and easily jot down notes, save them for future reference, and manage them by viewing or deleting as needed. It employs an Express.js backend and saves and retrieves note data from a JSON file, ensuring that your notes are preserved. Skills: HTML, CSS, JavaScript, Node.js, Express.js, Heroku, Git, GitHub.',
    getImageSrc: () => require('../images/NoteMeProject4.png'),
    url: 'https://github.com/Kirill777-web/Note-Me',
  },
  {
    title: 'book-store',
    description:
      'book-store is a MERN stack application that allows users to search for books using the Google Books API, save their favorite books, and manage their collection. This app demonstrates proficiency in HTML/CSS, JavaScript, MongoDB, Express.js, React, and Node.js (MERN) with a GraphQL API made with Apollo Server. The app is deployed on Heroku and uses MongoDB Atlas for data storage.',
    getImageSrc: () => require('../images/bookstore.png'),
    url: 'https://github.com/Kirill777-web/book-store',
  },
  {
    title: 'Sales Dashboard',
    description:
      'Ocean Wave is a sales dashboard that functions as a centralized platform for monitoring and analyzing various facets of your sales operations, including products, customers, transactions, and performance metrics.Crafted with a user-centric approach, our dashboard provides an intuitive and visually appealing interface. It goes beyond mere data presentation; it focuses on creating an immersive experience that facilitates informed, data-driven decision-making. Skills: HTML, CSS, JavaScript, API, Node.js, Express.js, React, Express.js, MongoDB, MySQL, Apollo GraphQL, Render, GitHub.',
    getImageSrc: () => require('../images/3.png'),
    url: 'https://github.com/Kirill777-web/sales_dashboard',
  },
  {
    title: 'Little Lemon',
    description:
      'Little Lemon is a restaurant application designed to provide users with an exceptional dining experience through a user-friendly interface. The app allows users to browse the menu, make online reservations, and order food for delivery or pickup. Skills: HTML, CSS, JavaScript, API, Node.js, React, Netlify, GitHub.',
    getImageSrc: () => require('../images/home-page.png'),
    url: 'https://github.com/Kirill777-web/little-Lemon-app',
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor='#f4f4f4'
      isDarkBackground
      p={8}
      alignItems='center'
      spacing={8}
    >
      <Heading as='h1' color='hsl(210, 22%, 49%)' id='projects-section'>
        Projects
      </Heading>
      <Box
        display='grid'
        gridTemplateColumns='repeat(2,minmax(0,1fr))'
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
