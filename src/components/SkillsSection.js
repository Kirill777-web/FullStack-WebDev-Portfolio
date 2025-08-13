import React from 'react';
import { Box, VStack, Heading, Text, Flex, Icon, Center } from '@chakra-ui/react';

// Frontend / Backend / Cloud / Database / Version Control
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiDjango, SiMongodb, SiMysql, SiFigma, SiExpress} from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

// Cybersecurity icons
import { FaShieldAlt, FaLock, FaCertificate, FaLinux, FaServer, FaExclamationTriangle } from 'react-icons/fa';

// FullScreenSection wrapper
import FullScreenSection from './FullScreenSection';


const categorizedSkills = {
  Cybersecurity: [
  { name: 'Wireshark', icon: FaShieldAlt, description: 'Analyzed network traffic and performed protocol analysis to detect anomalies.' },
  { name: 'Metasploit', icon: FaLock, description: 'Executed penetration tests and vulnerability assessments using Metasploit framework.' },
  { name: 'Burp Suite', icon: FaLock, description: 'Performed web application security testing including scanning, intrusions, and request interception.' },
  { name: 'John The Ripper', icon: FaLock, description: 'Cracked password hashes for security testing and auditing purposes.' },
  { name: 'Hashcat', icon: FaLock, description: 'Used GPU-accelerated password cracking for auditing password strength.' },
  { name: 'Kali Linux', icon: FaLinux, description: 'Utilized Kali Linux tools for penetration testing, vulnerability assessment, and security research.' },
  { name: 'OWASP Top 10', icon: FaExclamationTriangle, description: 'Awareness of the top web application security risks and mitigations.' },
  { name: 'SIEM', icon: FaServer, description: 'Experience with Security Information and Event Management systems for monitoring and incident response.' },
  { name: 'OpenVAS', icon: FaCertificate, description: 'Conducted vulnerability scanning and assessment.' },
  { name: 'Nessus', icon: FaCertificate, description: 'Performed vulnerability scanning to identify system weaknesses.' },
  { name: 'Linux', icon: FaLinux, description: 'Administered Linux systems and secured servers in cybersecurity tasks.' }
],
  Frontend: [
    { name: 'HTML/CSS', icon: FaHtml5, description: 'Crafted responsive and visually appealing websites using HTML5 and CSS3.' },
    { name: 'JavaScript', icon: DiJavascript1, description: 'Developed interactive web applications utilizing modern JavaScript ES6+.' },
    { name: 'React', icon: FaReact, description: 'Developed SPA with React, including state management with Redux and UIs with Material-UI.' },
  ],
  Backend: [
    { name: 'Node.js', icon: FaNodeJs, description: 'Built RESTful APIs using Express, handling database operations, authentication, and logging.' },
    { name: 'Python', icon: FaPython, description: 'Scripted efficient, reusable, and modular code in Python for various backend tasks.' },
    { name: 'Django', icon: SiDjango, description: 'Developed robust web applications with Django, focusing on rapid development and clean, pragmatic design.' }
  ],
  CloudServices: [
    { name: 'AWS', icon: FaAws, description: 'Deployed and managed applications using EC2, S3, Lambda, and RDS for a scalable cloud architecture.' },
    // { name: 'Docker', icon: FaDocker, description: 'Containerized applications using Docker for consistent development, delivery, and deployment.' }
  ],
  Databases: [
    { name: 'MongoDB', icon: SiMongodb, description: 'Utilized MongoDB for storing and querying data efficiently in JSON-like documents.' },
    { name: 'MySql', icon: SiMysql, description: 'Managed relational databases and performed complex queries with MySQL.' }
  ],
  VersionControl: [
    { name: 'Git', icon: FaGitAlt, description: 'Managed source code versions and collaborated with teams using Git.' }
  ]
};

const SkillsComponent = () => {
  return (
    <FullScreenSection
      backgroundColor="hsl(39, 18%, 97%)"
      color="hsl(210, 22%, 49%)"
      p={8}
      alignItems="center"
      spacing={8}
    >
      <Heading as="h1" color="hsl(210, 22%, 49%)" id="skills-section">
        Skills
      </Heading>
      {Object.entries(categorizedSkills).map(([category, skills]) => (
        <Box key={category} w="full">
          <Center>
            <Heading size="md" my={4}>{category}</Heading>
          </Center>
          <Flex justify="center" wrap="wrap">
            {skills.map(skill => (
              <VStack key={skill.name} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={2} align="center">
                <Icon as={skill.icon} w={6} h={6} color="blue.500" />
                <Text fontWeight="bold">{skill.name}</Text>
                <Text fontSize="sm" textAlign="center">{skill.description}</Text>
              </VStack>
            ))}
          </Flex>
        </Box>
      ))}
    </FullScreenSection>
  );
};

export default SkillsComponent;
