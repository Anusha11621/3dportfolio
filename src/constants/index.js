import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  aerchain,
  mountblue,
  medium,
  trello,
  easyBank,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  // {
  //   name: "bootstrap",
  //   icon: null
  // }
];

const experiences = [
  {
    title: "Front-End Developer(SDE - 1)",
    company_name: "Aerchain",
    icon: aerchain,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "MountBlue (Client : Aerchain) ",
    icon: mountblue,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Feb 2023",
    points: [
      "💻 Full-Stack Development: Contributed to multiple projects across both frontend and backend domains, gaining hands-on experience in real-world applications.",
      "🚀 End-to-End Feature Development: Executed features from conception to deployment, ensuring seamless integration and functionality in production environments.",
      "🤝 Collaborative & Independent Work: Adapted to both individual and team settings, efficiently handling tasks in fast-paced, intensive training programs.",
      "🔧 Software Development Lifecycle: Gained a comprehensive understanding of software development, from planning and coding to testing and deployment."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Medium Web Clone",
    description:
      "Successfully cloned Medium.com, replicating its design and functionality. Seamlessly integrated an existing REST API, enabling core features for a technical blog Demonstrated expertise in front-end development and user experience design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: medium,
    source_code_link: "https://aquamarine-toffee-7a9527.netlify.app/",
  },
  {
    name: "Trello Web clone",
    description:
      "Utilized the Trello Developer API to integrate core features, allowing for seamless project, workflow, and task management. Demonstrated expertise in front-end web development, API integration, and user interface design. Enabled users to customize boards, add files, checklists, and automation, offering a flexible and powerful task-tracking solution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: trello,
    source_code_link: "https://superb-figolla-113e55.netlify.app/",
  },
  {
    name: "Easy Bank",
    description:
     "Developed a static, fully responsive landing page using HTML, CSS, and JavaScript. Improved user engagement with a visually appealing and interactive design.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: easyBank,
    source_code_link: "https://shiny-starburst-022efd.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
