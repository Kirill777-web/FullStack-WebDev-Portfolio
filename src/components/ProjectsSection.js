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
    title: 'Sales Dashboard',
    description:
      'Ocean Wave is a sales dashboard that functions as a centralized platform for monitoring and analyzing various facets of your sales operations, including products, customers, transactions, and performance metrics.Crafted with a user-centric approach, our dashboard provides an intuitive and visually appealing interface. It goes beyond mere data presentation; it focuses on creating an immersive experience that facilitates informed, data-driven decision-making. Skills: HTML, CSS, JavaScript, API, Node.js, Express.js, React, Express.js, MongoDB, MySQL, Apollo GraphQL, Render, GitHub.',
    getImageSrc: () => require('../images/3.png'),
    url: 'https://github.com/Kirill777-web/sales_dashboard',
  },
  {
    title: 'Portfolio React SPA',
    description:
      "PortfolioWebDev is a personal portfolio website, built using React, showcasing web development projects and skills. It's designed as a single-page application (SPA) and highlights proficiency in front-end technologies, including extensive use of React, and experience with AWS cloud solutions. The portfolio features a modern, responsive design for an optimal user experience on various devices.",
    getImageSrc: () => require('../images/portfoliowebdev(SPA).png'),
    url: 'https://github.com/Kirill777-web/PortfolioWebDev',
  },
  {
    title: 'KI-Expense Tracker',
    description:
      "KI-ExpenseTracker is a comprehensive expense tracking web application designed for the book distribution company, Rumi Press. This application allows users to track their income and expenses, categorize their financial data, and visualize their spending habits through various charts and reports. Built with Django, Python, and Bootstrap, the app ensures a user-friendly and responsive design. Key skills used include Django, Python, HTML, CSS, JavaScript, Chart.js,for the front end, and MySQL for database management Heroku for deployment.",
    getImageSrc: () => require('../images/dashboard.png'),
    url: 'https://github.com/Kirill777-web/RumiExpenseTracker',
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
