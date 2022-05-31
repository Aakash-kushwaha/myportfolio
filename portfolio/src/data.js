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
import Project3 from './assets/img/projects/sephora1.png';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';

import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import Chakra from './assets/img/skills/Chakra.png';
import SkillImg5 from './assets/img/skills/Bootstrap.png';
import mui from './assets/img/skills/materialui.png';

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
    id: '1',
    image: Project1,
    name: 'Nordstormrack',
    category: 'UI/UX design',
    description:"It's an E-commerce website allow users to search and buy products ",
  
    code:"https://github.com/Aakash-kushwaha/NordstromRack",
    demo:"https://startling-hotteok-ee84f0.netlify.app/",
    TechStack: "TeckStack : React || Redux || Material-Ui || Bootstrap || React-Slick ",
  },
  {
    id: '2',
    image: Project2,
    name: 'Flipkart',
    category: 'UI/UX design',
    description:"It's an E-commerce website allow users to search and buy products ",
    code:"https://github.com/Aakash-kushwaha/Flipkart-Clone",
    demo:"https://aakash-kushwaha.github.io/Flipkart-Clone/",
    TechStack: "TeckStack :HTML5 || CSS3 || JAVASCRIPT || Bootstrap || React-Slick ",
  },
  {
    id: '3',
    image: Project3,
    name: 'Sephora',
    category: 'branding',
    description:"It's an E-commerce website allow users to search and buy products ",
    code:"https://github.com/Aakash-kushwaha/sephora",
    demo:"https://epic-meninsky-be2645.netlify.app/",
    TechStack: "TeckStack : HTML5 || CSS3 || JAVASCRIPT",
  },
 
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
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: Chakra,
  },
  {
    image: mui,
  },
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
    href:""
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bahadurgarh , 124507 , Haryana',
    href:""
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
