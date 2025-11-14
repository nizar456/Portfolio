
import { Technology, Project, ExperienceItem } from '../types';
import medical from '../assets/images/prj/medical.png';
import cartox from '../assets/images/prj/cartox.png';
import attendance from '../assets/images/prj/Attendance.png';
import k8s from '../assets/images/prj/k8s.png';
import kubernets from '../assets/images/icons/kubernets.svg';
import mysql from '../assets/images/icons/mysql-logo-pure.svg';

// Data
export const technologies: Technology[] = [
  { name: 'Java', description: 'General-purpose language for building robust back-end systems.', icon: 'https://cdn.worldvectorlogo.com/logos/java-4.svg' },
  { name: 'Spring Boot', description: 'Java-based framework for creating microservices and web applications.', icon: 'https://cdn.worldvectorlogo.com/logos/spring-3.svg' },
  { name: 'React', description: 'A JavaScript library for building modern user interfaces.', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
  { name: 'Angular', description: 'A TypeScript-based framework for building web applications.', icon: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg' },
  { name: 'Node.js', description: 'A back-end JavaScript runtime for scalable network applications.', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
  { name: 'Python', description: 'Versatile language used for scripting, web back-ends, and more.', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
  { name: 'Docker', description: 'Platform for developing, shipping, and running applications in containers.', icon: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
  { name: 'Kubernetes', description: 'Automates deployment, scaling, and management of containerized applications.', icon: kubernets },
  { name: 'PostgreSQL', description: 'A powerful, open-source object-relational database system.', icon: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
  { name: 'MongoDB', description: 'A NoSQL database for storing large amounts of unstructured data.', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
  { name: 'MySQL', description: 'An open-source relational database management system.', icon: mysql },
  { name: 'Jenkins', description: 'An open-source automation server for CI/CD pipelines.', icon: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg' },
];

export const projects: Project[] = [
  {
    title: 'Medical Clinic Management System',
    description: 'A multi-layer application based on Microservices architecture, featuring secure RESTful services and an intuitive Angular front-end. Includes a complete testing strategy and CI/CD pipeline.',
    image: medical,
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'Docker', 'Jenkins', 'Tailwind CSS'],
    githubUrl: 'https://github.com/medicalCabinetManager',
  },
  {
    title: 'Car Rental System',
    description: 'A full-stack web application for vehicle rental management, designed with an MVC architecture. Features a secure and optimized relational database for managing reservations and vehicles.',
    image: cartox,
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/YassineDev32/ProjetSpringReact',
  },
  {
    title: 'Attendance Management Platform',
    description: 'A collaborative web application for student attendance tracking, providing a centralized system for professors. Features automated deployment via Docker and Jenkins.',
    image: attendance,
    techStack: ['Java', 'Spring Boot', 'React', 'MongoDB', 'Docker', 'Jenkins', 'Tailwind CSS'],
    githubUrl: 'https://github.com/YassineDev32/NoSQL_Porject',
  },
   {
    title: 'DevOps Project',
    description: 'A full-stack Kubernetes orchestration project deploying a containerized MERN application with persistent storage, autoscaling (HPA), load balancing, and a complete CI-ready Dev stack using Docker, Minikube, React, Node.js, and MongoDB.',
    image: k8s,
    techStack: ['Docker', 'Kubernetes', 'Minikube', 'React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/nizarfikhan',
  }
];

export const experience: ExperienceItem[] = [
    {
    title: 'Backend Development Intern',
    company: 'S2M',
    dateRange: 'Jul 2025 - Aug 2025',
    description: 'Designed and developed a payment middleware, implementing secure REST APIs for communication between banking services. Integrated DevOps practices with Docker, Jenkins, and Git/GitLab.'
  },
  {
    title: 'Full Stack Web Development Intern',
    company: '1337 Coding School',
    dateRange: 'Jul 2024 - Jul 2024',
    description: 'Developed a restaurant management system to automate student orders. Implemented an MVC architecture using React for the front-end and Spring Boot for the back-end.'
  },
    {
    title: 'Media & Production Cell Leader',
    company: 'CODEX ENSAKH',
    dateRange: '2024 - 2025',
    description: 'Led media coverage for the "Artificial Intelligence and DevOps" event. Supervised content production for social media, coordinated events, and managed a creative team to meet deadlines.'
  }
];