import React from 'react';
import { Box, VStack, Heading, Text, Flex, Icon, Center } from '@chakra-ui/react';

// Icons (All verified from standard FontAwesome & SimpleIcons sets)
import { 
  FaReact, FaNodeJs, FaAws, FaDatabase, FaPython, FaHtml5, FaGitAlt,
  FaShieldAlt, FaLock, FaCertificate, FaLinux, FaServer, FaExclamationTriangle,
  FaNetworkWired, FaSearch, FaEnvelopeOpenText, FaWindows, FaCloud, FaTerminal, FaUserShield
} from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

// FullScreenSection wrapper
import FullScreenSection from './FullScreenSection';

const categorizedSkills = {
  "SOC & Defensive Security": [
    { name: 'Splunk & Microsoft Sentinel (SIEM)', icon: FaServer, description: 'Deployed centralized logging, built custom dashboards, and performed real-time SIEM alert triage to detect suspicious endpoint activity.' },
    { name: 'Phishing & Incident Response', icon: FaEnvelopeOpenText, description: 'Dissected malicious email headers, extracted actionable IoCs, and executed structured incident response playbooks.' },
    { name: 'Sysmon & Endpoint Security', icon: FaWindows, description: 'Configured granular Windows event logging to track process creation, network connections, and registry modifications.' },
    { name: 'Wireshark & Traffic Analysis', icon: FaShieldAlt, description: 'Analyzed packet captures (PCAPs) and performed deep protocol analysis to detect network anomalies and C2 traffic.' },
    { name: 'Nessus & OpenVAS', icon: FaCertificate, description: 'Conducted comprehensive vulnerability assessments to identify system weaknesses and prioritize remediation.' }
  ],
  "Offensive Security & Threat Hunting": [
    { name: 'Nmap & Network Recon', icon: FaSearch, description: 'Executed offensive network discovery, port scanning, and service enumeration to map attack surfaces.' },
    { name: 'Kali Linux', icon: FaLinux, description: 'Simulated Red Team attack scenarios to test, validate, and fine-tune SIEM detection rules.' },
    { name: 'Metasploit & Burp Suite', icon: FaLock, description: 'Performed vulnerability exploitation and web application security testing, including request interception.' },
    { name: 'Hydra, John The Ripper & Hashcat', icon: FaExclamationTriangle, description: 'Simulated brute-force attacks and audited password hash strength to enforce robust authentication policies.' },
    { name: 'OWASP Top 10', icon: FaUserShield, description: 'Applied knowledge of critical web application security risks to identify and mitigate exploitation attempts.' }
  ],
  "Networking, Systems & Cloud": [
    { name: 'Enterprise Networking', icon: FaNetworkWired, description: 'Configured and troubleshot TCP/IP, DNS, DHCP, VLANs, OSPF, and Cisco IOS routing and switching.' },
    { name: 'Active Directory & Windows Server', icon: FaWindows, description: 'Managed enterprise user identities, Group Policies (GPO), permissions, and domain security.' },
    { name: 'Linux Administration', icon: FaLinux, description: 'Administered Ubuntu and Kali systems, hardened servers, and managed services via CLI.' },
    { name: 'AWS Cloud Security', icon: FaAws, description: 'Managed cloud infrastructure across EC2, S3, IAM, SES, CloudFront, and RDS with a focus on secure access.' },
    { name: 'Microsoft Azure', icon: FaCloud, description: 'Administered Azure cloud resources, virtual machines, App Services, and Microsoft Entra ID.' }
  ],
  "Scripting, Development & Databases": [
    { name: 'Python', icon: FaPython, description: 'Developed custom security automation scripts, wireless intrusion prevention tools, and backend logic.' },
    { name: 'Bash & PowerShell', icon: FaTerminal, description: 'Automated system administration, log parsing, and incident response tasks across Linux and Windows.' },
    { name: 'SQL & Databases (MySQL / MongoDB)', icon: FaDatabase, description: 'Queried relational and NoSQL databases and analyzed SQL injection vectors.' },
    { name: 'JavaScript, React & Node.js', icon: FaReact, description: 'Built full-stack web dashboards and RESTful APIs to visualize real-time security and operational data.' },
    { name: 'Git & GitHub', icon: FaGitAlt, description: 'Managed source code version control, documentation, and collaborative software deployments.' }
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
