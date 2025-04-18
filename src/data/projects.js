import CPD from "../assets/cpd.png";
import FarmFolio from "../assets/farm.png";
import Face from "../assets/face.jpg";
import TND from "../assets/tnd.png";
import avero from "../assets/avero.png";
import HayesCore from "../assets/HayesCore.png";
import DevNotes from "../assets/devnotes.jpg";
import YourTour from "../assets/tour_landscape.png"
import battle from "../assets/battle.png"

const projects = [
  {
    title: "Purchase Order Module",
    image: CPD,
    description:
    "Served as Team Lead for a software engineering team tasked with revitalizing the Cookeville Police Department's purchase order system, improving purchase tracking, vendor management, and financial oversight. Oversaw the design and development of the module, containing sensitive information and tools tailored for Police Department employees, which is actively used by the department currently. Ensured agile processes were followed to optimize team productivity and deliver high-quality, impactful solutions."
  },
  {
    title: "YourTour Navigation",
    image: YourTour,
    description:
      "Creator and lead developer of YourTour, a mobile navigation app that turns any drive into a tour! As the user embarks on a trip, YourTour takes the user's current location and generates facts and trivia about towns and cities as the drive progresses."
  },
  {
    title: "Tennessee Nutrient Database",
    image: TND,
    description:
      "Contributed to the development and maintenance of a React-based frontend that interfaces with RESTful web services to display testing data for the Tennessee Nutrient Database site. Integrated ESRI GIS mapping within the React application to enable robust data visualization for geographic analysis and nutrient tracking. This application will be utilized by the Tennessee Department of Environment and Conservation in the near future to support environmental monitoring and decision-making."
  },
  {
    title: "VSCode - Battle Arena",
    image: battle,
    description:
      "Designed and developed VSCode - Battle Arena, a twist on the popular VSCode extension VSCode Pets.  A fun  pet project that I consider a check off of my career bucketlist!  Feel free to check it out and download on VSCode by searching ''Battle Arena'' on the extension marketplace."
  },
  {
    title: "Facial Detection System",
    image: Face,
    description:
      "Developed a real-time facial recognition application by leveraging a pre-trained machine taught model for accurate face detection, optimizing camera feeds to ensure efficient, high-speed performance."
  },
  {
    title: "HayesCore",
    image: HayesCore,
    description:
      "Developed and deployed a multi-site web server on a Raspberry Pi 5, hosting multiple websites and backends, featuring a custom-built frontend with secure login functionality."
  },
  {
    title: "DevNotes",
    image: DevNotes,
    description:
      "Currently developing DevNotes, a web application that allows developers and product owners to make product documentation a breeze. Allowing documentation to be generated and kept in secure and easily managable locations."
  }
];

export default projects;
