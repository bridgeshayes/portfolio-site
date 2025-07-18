import CPD from "../assets/cpd.png";
import Face from "../assets/face.jpg";
import TND from "../assets/tnd.png";
import HayesCore from "../assets/HayesCore.png";
import DevNotes from "../assets/devnotes.jpg";
import battle from "../assets/battle.png"
import codebridge from "../assets/codebridge.png"
import hermes from "../assets/hermes.png"

const projects = [
  {
    title: "Hermes AI",
    image: hermes,
    description:
      "Hermes-AI is a Python-based AI voice assistant that acts as your personal tour guide, providing engaging narration about cities and regions worldwide through natural voice interaction, real-time web searches, weather information, and email capabilities using LiveKit Agents and Google's Realtime Model.",
    github: null
  },
  {
    title: "Purchase Order Module",
    image: CPD,
    description:
    "Served as Team Lead for a software engineering team tasked with revitalizing the Cookeville Police Department's purchase order system, improving purchase tracking, vendor management, and financial oversight. Oversaw the design and development of the module, containing sensitive information and tools tailored for Police Department employees, which is actively used by the department currently. Ensured agile processes were followed to optimize team productivity and deliver high-quality, impactful solutions.",
    github: null
  },
  {
    title: "Tennessee Nutrient Database",
    image: TND,
    description:
      "Contributed to the development and maintenance of a React-based frontend that interfaces with RESTful web services to display testing data for the Tennessee Nutrient Database site. Integrated ESRI GIS mapping within the React application to enable robust data visualization for geographic analysis and nutrient tracking. This application will be utilized by the Tennessee Department of Environment and Conservation in the near future to support environmental monitoring and decision-making.",
    github: null
  },
  {
    title: "VSCode - Battle Arena",
    image: battle,
    description:
      "Designed and developed VSCode - Battle Arena, a twist on the popular VSCode extension VSCode Pets.  A fun  pet project that I consider a check off of my career bucketlist!  Feel free to check it out and download on VSCode by searching ''Battle Arena'' on the extension marketplace.",
    github: "https://github.com/bridgeshayes/vscode-battle-arena"
  },
  {
    title: "Facial Detection System",
    image: Face,
    description:
      "Developed a real-time facial recognition application by leveraging a pre-trained machine taught model for accurate face detection, optimizing camera feeds to ensure efficient, high-speed performance.",
    github: "https://github.com/bridgeshayes/Face-Detection"
  },
  {
    title: "HayesCore",
    image: HayesCore,
    description:
      "Developed and deployed a multi-site web server on a Raspberry Pi 5, hosting multiple websites and backends, featuring a custom-built frontend with secure login functionality.",
    github: null
  },
  {
    title: "DevNotes",
    image: DevNotes,
    description:
      "Currently developing DevNotes, a web application that allows developers and product owners to make product documentation a breeze. Allowing documentation to be generated and kept in secure and easily managable locations.",
    github: "https://github.com/bridgeshayes/DevNotes"
  },
  {
    title: "CodeBridge",
    image: codebridge,
    description:
      "CodeBridge is a lightweight clone of VSCode, built with Electron.js and React.js. It offers a simple, clean interface for creating and editing code files, along with integrated terminal support, providing a familiar and efficient coding environment.",
    github: "https://github.com/bridgeshayes/CodeBridge"
  }
];

export default projects;
