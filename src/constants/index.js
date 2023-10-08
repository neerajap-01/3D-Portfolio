import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  functionUp,
  zoloStays,
  rejob,
  rideIt,
  portfolioWeb,
  functionUpLogo,
  matriculation,
  intermediate,
  graduation,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer Traniee",
    company_name: "FunctionUp Bootcamp",
    icon: functionUp,
    iconBg: "#383E56",
    date: "March 2022 - August 2022",
    points: [
      "Learning and Developing web applications using React.js and other related technologies.",
      "Helping other peers by solving their problems and providing constructive feedback.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other peers.",
    ],
  },
  {
    title: "Software Developer Engineer - II",
    company_name: "ZoloStays Property Solutions Pvt. Ltd.",
    icon: zoloStays,
    iconBg: "#ffffff",
    date: "Sept 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const education = [
  {
    description:
      "I have completed my matriculation in year 2017 with passing percentage of 75% from M.D. Bhatia English Medium High School.",
    name: "Matriculation",
    grad_date: "April 2017",
    image: matriculation,
  },
  {
    description:
      "I have completed my intermediate in year 2019 with passing percentage of 73.85% from D.J Doshi Gurukul College of Commerce.",
    name: "Intermediate",
    grad_date: "March 2019",
    image: intermediate,
  },
  {
    description:
      "I have completed my graduation in year 2022 with 9.50 CGPA from K.J Somaiya College of Science and Commerce.",
    name: "Graduation",
    grad_date: "March 2022",
    image: graduation,
  },
];

const projects = [
  {
    name: "Ride It",
    description:
      "Ride It is a mobile application that allows students to share a ride with other peers to reach their common destination i.e their College/Universities by login in only by their .edu email Ids.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "text-yellow-200",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
    ],
    image: rideIt,
    source_code_link: "https://github.com/neerajap-01/RideIT-UserApp",
    live_link: "https://rideit-app.netlify.app/"
  },
  {
    name: 'FunctionUp Projects',
    description:
      'FunctionUp is a 6-month long Bootcamp where I was learning Backend Development using Node.js, Express.js, MongoDB, Postman and AWS.',
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "postman",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "text-yellow-200",
      },
    ],
    image: functionUpLogo,
    source_code_link: "https://github.com/neerajap-01/FunctionUp-Projects"
  },
  {
    name: "Portfolio Website",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "html",
        color: "text-rose-500",
      },
      {
        name: "js",
        color: "text-yellow-500",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: portfolioWeb,
    source_code_link: "https://github.com/neerajap-01/Portfolio",
    live_link: "https://neerajpal.dev"
  },
  {
    name: "ReJob",
    description:
      "ReJob is a mobile application that allows users to find jobs in their nearby location plus based on their preferred Job title and apply for them.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "text-gray",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: rejob,
    source_code_link: "https://github.com/neerajap-01/ReJog",
  },
];

export { services, technologies, experiences, education, projects };