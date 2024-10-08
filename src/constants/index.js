import {
  meta,
  shopify,
  starbucks,
  tesla,
  gdsc,
  az,
  mlsc,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  postman,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  vscode,
  vercel,
  watch,
  view,
  gym,
  netlify,
  sql,
  movie,
  health,
  coin,
  calendar
} from "../assets/icons";

export const skills = [
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: postman,
    name: "Postman",
    type: "API Testing",
  },
  {
    imageUrl: vscode,
    name: "Visual Studio Code",
    type: "IDE",
  },
  {
    imageUrl: vercel,
    name: "Vercel",
    type: "Deployment",
  },
  {
    imageUrl: netlify,
    name: "Netlify",
    type: "Deployment",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Backend",
  },

  // {
  //     imageUrl: nextjs,
  //     name: "Next.js",
  //     type: "Frontend",
  // },

  // {
  //     imageUrl: typescript,
  //     name: "TypeScript",
  //     type: "Frontend",
  // }
];

export const experiences = [
  {
    title: "Technical Executive",
    company_name: "Google Students Developer Community",
    icon: gdsc,
    iconBg: "white",
    date: "September 2023 - June 2024",
    points: [
      "Organized and Led Technical Workshops: Spearheaded the planning and execution of hands-on technical workshops, covering topics like web development, cloud computing, and database management, which equipped students with practical, in-demand skills.",
      "Conducted Interactive Design Sessions: Facilitated design thinking and UI/UX sessions, guiding participants through the principles of user-centered design, wireframing, and prototyping, resulting in creative and user-friendly project outcomes.",
      "Collaborated with Industry Experts: Coordinated guest lectures and webinars with industry professionals, providing students with insights into the latest technologies and design trends, and fostering a connection between academia and industry practices.",
      "Managed End-to-End Event Logistics: Handled all aspects of event management, from content creation and speaker coordination to marketing and participant engagement, ensuring the successful delivery of impactful and well-organized events.",
      "Contributed to open-source projects and encouraged community participation within the GDSC team.",
    ],
  },
  {
    title: "Technical Executive",
    company_name: "AlgoZenith",
    icon: az,
    iconBg: "grey",
    date: "October 2023 - May 2024",
    points: [
      "Organized Competitive Programming Sessions: Conducted algorithmic coding sessions focused on enhancing problem-solving skills, helping members prepare for competitive programming contests.",
      "Hosted a Quiz Event: Successfully organized a quiz competition through AlgoZenith, testing participants' knowledge in algorithms and data structures, with enthusiastic participation from club members.",
      "Distributed Swag to Winners: Coordinated the distribution of swags and prizes to quiz winners, boosting engagement and rewarding excellence among participants.",
      "Collaborated on Event Planning: Worked closely with the AlgoZenith team to plan and execute events, ensuring a smooth and engaging experience for all participants.",
    ],
  },
  {
    title: "Technical Executive",
    company_name: "Microsoft Learn Student Community",
    icon: mlsc,
    iconBg: "black",
    date: "October 2023 - June 2024",
    points: [
      "Suggested Session Topics: Actively contributed by recommending relevant and trending topics for technical sessions, helping shape the club's educational offerings.",
      "Assisted in Event Execution: Played a key role in the successful execution of events, handling various assigned tasks to ensure smooth operations.",
      "Collaborated with Leadership: Worked closely with club leads to plan and organize events, providing valuable input and support throughout the process.",
      "Enhanced Club Activities: Contributed to the overall enhancement of club activities by consistently delivering on responsibilities and supporting event logistics.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Nitesh-18",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/nitesh-r-a15518243/",
  },
];

export const projects = [
  {
    iconUrl: health,
    theme: "btn-back-pink",
    name: "Health-Tracking-App",
    description:
      "Developed an ecommerce web application of premium watches that give users add to cart feature and to owner creating product makes easier and making it available to offer online.",
    link: "https://health-tracking-app-jmv3.onrender.com/",
  },
  {
    iconUrl: watch,
    theme: "btn-back-blue",
    name: "The Virtual Vault",
    description:
      "Developed an ecommerce web application of premium watches that give users add to cart feature and to owner creating product makes easier and making it available to offer online.",
    link: "https://github.com/Nitesh-18/The-Virtual-Vault",
  },
  {
    iconUrl: view,
    theme: "btn-back-red",
    name: "ViewMate",
    description:
      'Created a backend replica of the popular video streaming platform "Youtube" enabling users to watch multiple videos and store their watch history also user subscription schema.',
    link: "https://github.com/Nitesh-18/ViewMate",
  },
  {
    iconUrl: coin,
    theme: "btn-back-yellow",
    name: "CoinFlip Game DApp",
    description:
      "This is a decentralized application (DApp) built on the Ethereum blockchain. The Coin Flip Game allows users to place bets on the outcome of a coin flip using cryptocurrency",
    link: "https://coinflip-game-nr.vercel.app/",
  },
  {
    iconUrl: calendar,
    theme: "btn-back-green",
    name: "Calendar App",
    description:
      "The Calendar App is a dynamic event management tool built with React. It allows users to schedule, view, and manage events seamlessly with an intuitive interface. Key features include date selection, event reminders, and an interactive, user-friendly UI for easy navigation.",
    link: "https://calendar-app-react-nr.vercel.app",
  },
  {
    iconUrl: gym,
    theme: "btn-back-black",
    name: "FIT-CONNECT",
    description:
      "Developed a comprehensive web application for a specific gym, promoting its online offerings and enhancing member engagement. It serves as a central platform for gym members to access various online resources, services, and community interactions.",
    link: "https://fit-connect-your-gymhub.vercel.app/",
  },
  {
    iconUrl: movie,
    theme: "btn-back-gray",
    name: "Movie-App",
    description:
      "A dynamic movie database application that allows users to search for movies. Built with modern web technologies, this app integrates external APIs to provide real-time data and a seamless user experience.",
    link: "https://github.com/Nitesh-18/Movie-App",
  },
];
