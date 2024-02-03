import { VStack, Box, Heading, Text, Image, HStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import awsCertifiedCloudPractitioner from '../images/aws-certified-cloud-practitioner.png';
import objectStorage from '../images/Storage AWS CPC.png';
import ITsupport from '../images/GCC_badge_IT_Support.png';
import UNB from '../images/UNB.png';

const achievements = [
  {
    title: 'WebDeveloper Bootcamp UNB',
    year: '2024',
    description:
      'I have recently completed a comprehensive Full-Stack Web Development Boot Camp at the University of New Brunswick, marking a significant milestone in my journey as a web developer. This intensive program has been a challenging yet immensely rewarding experience, equipping me with a wealth of hands-on skills in both front-end and back-end development. Skills: HTML/CSS, JavaScript, Web-API, NodeJS, ExpressJS, NoSQL, MongoDB, MySQL, ReactJS, Figma, Postman, Insomnia.',
    imageUrl: UNB,
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    year: '2023',
    description:
      'I am really excited to share that I have earned my AWS Certified Cloud Practitioner badge! This means I have got a solid grasp of the basics of AWS, from its main services to how to use them right. With this certification in my toolkit, I am all set to dive into AWS projects and make the most of the cloud. It is all part of my journey to keep up with the fast-paced world of cloud tech.',
    link: 'https://www.credly.com/badges/f123be6a-9a11-45b3-904a-27bdb1ffc25b',
    linkText: 'Verified by Credly ✔',
    imageUrl: awsCertifiedCloudPractitioner,
  },
  {
    title: 'Object Storage Specialized',
    year: '2023',
    description:
      'As an Object Storage Specialist with a focus on AWS, I have honed my skills in managing and utilizing AWS S3, the industry-leading scalable object storage solution. My expertise encompasses setting up, securing, and optimizing S3 buckets to ensure high availability and cost-effectiveness. I am adept at implementing lifecycle policies, versioning, and cross-region replication to meet diverse data storage requirements.',
    link: 'https://www.credly.com/badges/3305b83e-049a-4cce-b27c-c4030e14c9af',
    linkText: 'Verified by Credly ✔',
    imageUrl: objectStorage,
  },
  {
    title: 'Google IT Support Coursera',
    year: '2020',
    description:
      ' Hey there! Just wanted to share some exciting news. I have wrapped up my IT-support Coursera certification with Google (yay!). This was not just about reading books; I dived deep into hands-on stuff—think building computers, setting up networks, and even delving into the world of Linux and Binary Code. So, if you have got tech troubles or just want to chat about the Command-Line Interface, I am your person!',
    link: 'https://www.credly.com/badges/5e9bc902-ff4c-4fc1-98ea-f714308346d2',
    linkText: 'Verified by Credly ✔',
    imageUrl: ITsupport,
  },
];
const AchievementsComponent = () => {
  return (
    <FullScreenSection
      backgroundColor='hsl(39, 18%, 97%)'
      isDarkBackground
      p={8}
      alignItems='center'
      spacing={8}
      color='hsl(210, 22%, 49%)'
    >
      <Heading as='h1' color='hsl(210, 22%, 49%)' id='achievements-section'>
        Achievements
      </Heading>
      <VStack spacing={8}>
        {achievements &&
          achievements.map((achievement) => (
            <Box key={achievement.title} p={5} shadow='md' borderWidth='1px'>
              <HStack spacing={10}>
                {achievement.imageUrl && (
                  <Image
                    boxSize='120px'
                    // objectFit='cover'
                    src={achievement.imageUrl}
                    alt='UNB Bootcamp'
                  />
                )}
                <VStack align='start'>
                  <Heading as='h4' size='md'>
                    {achievement.title}
                  </Heading>
                  <Text>{achievement.year}</Text>
                  <Text>{achievement.description}</Text>
                  <a
                    href={achievement.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {achievement.linkText}
                  </a>
                </VStack>
              </HStack>
            </Box>
          ))}
      </VStack>
    </FullScreenSection>
  );
};

export default AchievementsComponent;
