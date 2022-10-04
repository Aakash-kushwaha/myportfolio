//  icons
import {
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/nordstrom1.png';
import Project2 from './assets/img/projects/flipkart1.png';
import Project4 from './assets/img/projects/beautybebo.png';
import Project5 from './assets/img/projects/crickinfo.png';
import project6 from "./assets/img/projects/cronometer.png"


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';

import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import Chakra from './assets/img/skills/Chakra.png';
import SkillImg5 from './assets/img/skills/bootstrap.png';
import tailwind from './assets/img/skills/tailwind.png';
import materialui from './assets/img/skills/materialui.png';
import mongodb from './assets/img/skills/mongodb.png';
import mongoose from './assets/img/skills/mongoose.png';
import redux from './assets/img/skills/redux.png';
import express from './assets/img/skills/express.png';

import typescript from './assets/img/skills/typescript.png';
// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'Skills',
    href: 'Skills',
  },
  {
    name: 'Projects',
    href: 'projects',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
 
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/aakash-kushwaha-0336a4214/',

  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Aakash-kushwaha',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [

  {
    id: '6',
    image: project6,
    name: 'Cronometer',
    // category: 'branding',
    description:"Cronometer is the most accurate, comprehensive nutrition tracking app on earth.",
    code:"https://github.com/Aakash-kushwaha/Beauty-Bebo",
    demo:"https://coronometer6198.netlify.app/",
    TechStack: "TeckStack : React || React-Redux || JavaScript || Chakra-ui || React-Slick || Node.js || Mongodb || Mongoose || Express ",
  },

  {
    id: '4',
    image: Project4,
    name: 'Beauty Bebo',
    // category: 'branding',
    description:"Beauty Bebo is India’s fastest growing online retail store for consmetics and healthcare.",
    code:"https://github.com/Aakash-kushwaha/aberrant-coast-299",
    demo:"https://beauty-bebo-website.netlify.app/",
    TechStack: "TeckStack : React || React-Redux || Chakra-ui || Tailwind || React-Slick || JavaScript || Node.js || Mongodb || Mongoose || Express",
  },
  {
    id: '5',
    image: Project5,
    name: 'Crickinfo',
    // category: 'branding',
    description:"ESPN cricinfo (formerly known as Cricinfo or CricInfo) is a sports news website exclusively for the game of cricket. ",
    code:"https://github.com/Aakash-kushwaha/Honest--wing-5796",
    demo:"https://crickinfo.netlify.app/",
    TechStack: "TeckStack : React || React-Redux || Chakra-ui || React-Slick || JavaScript",
  },
  {
    id: '1',
    image: Project1,
    name: 'Nordstormrack',
    // category: 'UI/UX design',
    description:"Nordstrom launched in 2014, while Nordstrom Rack launched in 2018.the department store is renown for its collection of high-end fashion, homewares, and accessories. ",
  
    code:"https://github.com/Aakash-kushwaha/NordstromRack",
    demo:"https://startling-hotteok-ee84f0.netlify.app/",
    TechStack: "TeckStack : React || Redux || Material-Ui || Bootstrap || React-Slick ",
  },
  {
    id: '2',
    image: Project2,
    name: 'Flipkart',
    // category: 'UI/UX design',
    description:"Flipkart is an Indian e-commerce company, headquartered in Bangalore, Karnataka, India, and incorporated in Singapore as a private limited company. ",
    code:"https://github.com/Aakash-kushwaha/Flipkart-Clone",
    demo:"https://aakash-kushwaha.github.io/Flipkart-Clone/",
    TechStack: "TeckStack :HTML5 || CSS3 || JAVASCRIPT || Bootstrap || React-Slick ",
  }

 
];

// projects
export const projectsNav = [
  // {
  //   name: 'all',
  // },
  // {
  //   name: 'UI/UX Design',
  // },
  {
    name: 'web development',
  },
  // {
  //   name: 'branding',
  // },
];

// skill
export const skills = [
  {
    image: SkillImg1,
    skill:"HTML5"
  },
  {
    image: SkillImg2,
    skill:"CSS3"
  },
  {
    image: SkillImg3,
    skill:"JavaSript"
  },
  {
    image: SkillImg4,
    skill:"React"
  },
  {
    image: redux,
    skill:"Redux"
  },
  {
    image: SkillImg6,
    skill:"Node.js"
  },
  {
    image: mongodb,
    skill:"Mongodb"
  },
  {
    image: mongoose,
    skill:"Mongoose"
  },
  {
    image: express,
    skill:"Express"
  },
  {
    image: SkillImg7,
    skill:"Git"
  },
  {
    image: Chakra,
    skill:"Chakra"
  },
  {
    image: tailwind,
    skill:"Tailwind"
  },
  {
    image: materialui,
    skill:"Material-UI"
  },
  {
    image: SkillImg5,
    skill:"Bootstrap"
  },
  {
    image: typescript,
    skill:"Typescript"
  }

];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at aakash113114@gmail.com',
   
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bahadurgarh , 124507 , Haryana',
   
  },
  {
    icon: <FiLinkedin />,
    title:"Linkdin",
    href: 'https://www.linkedin.com/in/aakash-kushwaha-0336a4214/',
  },
  {
    icon: <FiGithub />,
   
    title:"Github",
    href: 'https://github.com/Aakash-kushwaha',
  },
];
