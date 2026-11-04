import React from 'react';
import FullScreenSection from './FullScreenSection';
import { Box, Heading } from '@chakra-ui/react';
import Card from './Card';

const projects = [
  {
    title: 'Automated Phishing Email Header Analyzer PRO (Python)',
    description:
      'Built an all-in-one desktop application in Python designed for rapid SOC phishing triage and incident response. Automates hop-by-hop SMTP header tracing to expose true originating IPs, decodes obfuscated Base64/Quoted-Printable payloads for safe previewing, defangs malicious IoCs, scores attachment risks via MIME parsing, and integrates with VirusTotal and AbuseIPDB APIs for real-time threat intelligence enrichment. Skills: Python, Phishing Triage, Threat Intelligence APIs (VirusTotal, AbuseIPDB), MIME/Header Analysis, IoC Defanging, Security Automation.',
    getImageSrc: () => require('../images/email_analyzer.png'), 
    url: 'https://github.com/Kirill777-web', 
  },
  {
    title: 'Live SOC Simulator: Phishing Unfolding (Incident Response)',
    description:
      'Analyzed and documented a multi-stage corporate breach in real time within a high-pressure SOC simulation environment. Monitored live SIEM alerts to reconstruct the full attack chain, identifying malicious PowerShell executions, reverse shell connections, and anomalous DNS requests, and compiled comprehensive incident response case reports. Skills: Real-Time Alert Triage, SIEM Monitoring, Attack Chain Reconstruction, PowerShell Analysis, DNS Traffic Analysis, Incident Reporting.',
    getImageSrc: () => require('../images/Phishing_Unfolding.png'),
    url: 'https://tryhackme.com/p/Kirill777',
  },
  {
    title: 'Phish Hunter: End-to-End Phishing Investigation Series',
    description:
      'Completed the comprehensive Phish Hunter analytical track (Phishing Analysis Fundamentals, Phishing Emails in Action, Analysis Tools, Phishing Prevention, The Greenholt Phish, and Snapped Phish-ing Line). Dissected real-world malicious emails, analyzed SMTP headers, extracted actionable Indicators of Compromise (IoCs), and probed credential harvesting campaigns. Skills: Email Header Analysis, IoC Extraction, URL & Attachment Sandboxing, Phishing Defense, Threat Hunting.',
    getImageSrc: () => require('../images/Pish_Hunter.png'),
    url: 'https://tryhackme.com/p/Kirill777',
  },
  {
    title: 'Enterprise SOC Simulation Lab (Splunk & Sysmon)',
    description:
      'Deployed a centralized logging architecture using Splunk Enterprise on Ubuntu to monitor Windows endpoints. Executed Red Team attack scenarios (Hydra brute-force, Nmap reconnaissance) from Kali Linux against target machines, and configured Sysmon for granular event logging with custom Splunk dashboards to visualize and alert on anomalous activity in real time. Skills: Splunk Enterprise, Sysmon, SIEM, Threat Detection, Log Analysis, Kali Linux, Ubuntu, Windows Server.',
    getImageSrc: () => require('../images/Splunk'),
    url: 'https://lnkd.in/p/gCbuqeJe',
  },
  {
    title: 'Sentinel Pro (Enterprise WIPS Prototype)',
    description:
      'Engineered an automated Wireless Intrusion Prevention System (WIPS) using Raspberry Pi, Python, and dual Alfa long-range antennas for simultaneous traffic monitoring and packet injection. Built a custom real-time web dashboard to visualize wireless threats (Deauthentication attacks, Evil Twins, Rogue APs) and automated the detection and blocking of WPA2 attacks. Skills: Python, Network Security, WIPS, Wireless Auditing, Raspberry Pi, Linux, Packet Analysis.',
    getImageSrc: () => require('../images/SentinelPro.png'),
    url: 'https://lnkd.in/p/gYymYW27',
  },
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
      'Ocean Wave is a sales dashboard that functions as a centralized platform for monitoring and analyzing various facets of your sales operations, including products, customers, transactions, and performance metrics. Crafted with a user-centric approach, our dashboard provides an intuitive and visually appealing interface. Skills: HTML, CSS, JavaScript, API, Node.js, Express.js, React, MongoDB, MySQL, Apollo GraphQL, Render, GitHub.',
    getImageSrc: () => require('../images/3.png'),
    url: 'https://github.com/Kirill777-web/sales_dashboard',
  },
  {
    title: 'Portfolio React SPA',
    description:
      "PortfolioWebDev is a personal portfolio website, built using React, showcasing projects and skills. It's designed as a single-page application (SPA) and highlights proficiency in front-end technologies, including extensive use of React, and experience with AWS cloud solutions. The portfolio features a modern, responsive design for an optimal user experience on various devices.",
    getImageSrc: () => require('../images/portfoliowebdev(SPA).png'),
    url: 'https://github.com/Kirill777-web/PortfolioWebDev',
  },
  {
    title: 'KI-Expense Tracker',
    description:
      'KI-ExpenseTracker is a comprehensive expense tracking web application designed for the book distribution company, Rumi Press. This application allows users to track their income and expenses, categorize their financial data, and visualize their spending habits through various charts and reports. Built with Django, Python, Bootstrap, Chart.js, and MySQL.',
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
