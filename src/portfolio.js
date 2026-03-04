/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation


// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};


// Summary And Greeting Section
const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Ghulam Murtaza",
  title: "Hi, I'm Murtaza",
  subTitle: emoji(
    "A passionate Python Developer and AI Engineer having an experience of building applications with Python / Django / Flask / Langchain and some other cool libraries and frameworks."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the RESUME button
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/loharmurtaza",
  linkedin: "https://www.linkedin.com/in/murtaza788/",
  gmail: "loharmurtaza788@gmail.com",
  orcid: "https://orcid.org/0000-0002-0000-0000",
  researchgate: "https://www.researchgate.net/profile/Ghulam_Murtaza",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};


// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: `A <strong style="color:#333;font-weight:700;">PYTHON DEVELOPER</strong> and <strong style="color:#333;font-weight:700;">AI ENGINEER</strong> who loves to work with backend systems and AI-powered applications.`,
  skills: [
    emoji("⚡ Developing REST APIs using FastAPI and Django for backend systems for scalable service design"),
    emoji("⚡ Building Retrieval-Augmented Generation (RAG) pipelines for AI-powered applications"),
    emoji("⚡ Integration of third party services such as Google Cloud / AWS / Digital Ocean for cloud deployment")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "digital-ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Skolkovo Institute of Science and Technology",
      logo: require("./assets/images/skoltechLogo.jpg"),
      subHeader: "Master of Science in Internet of Things & Wireless Technologies",
      duration: "September 2023 - June 2025",
      desc: "Participated in the research of use of AI and IoT in the detection and prediction of Parkinson's Disease Freezing of Gait symptom and published 2 research papers.",
      descBullets: [
        "Employed DoppelGANger for the generation of Parkinson's Disease Freezing of Gait symptom accelerometer timeseries data",
        "Employed RF and SVM for the downstream classification task of Parkinson's Disease Freezing of Gait symptom"
      ]
    },
    {
      schoolName: "Mehran University of Engineering and Technology",
      logo: require("./assets/images/mehranLogo.jpg"),
      subHeader: "Bachelor of Engineering in Mechatronics Engineering",
      duration: "November 2016 - January 2021",
      desc: "Ranked 1st in the program and recieved Silver Medal. Took courses about Electronics, Control Systems, Machine Learning, ...",
      descBullets: [
        "Devised smart wristband for health monitoring of elderly people using IoT.",
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Python Developer",
      company: "Quantilytics",
      companylogo: require("./assets/images/quantilyticsLogo.jfif"),
      date: "June 2025 – Present",
      descBullets: [
        "Developed and maintained scalable backend services using Python, Django, and Django REST Framework to support data-driven and AI-enabled applications.",
        "Designed and implemented RESTful APIs for internal systems and third-party integrations, improving data accessibility and service interoperability.",
        "Built AI-powered application components including a healthcare assistant leveraging Retrieval-Augmented Generation (RAG), LLM integrations, and real-time streaming responses.",
        "Implemented knowledge retrieval workflows including document processing, embeddings generation, semantic search, and contextual response synthesis using vector databases (Qdrant).",
        "Developed modular backend services using FastAPI with integrations to PostgreSQL, MongoDB, and Redis for caching, session memory, and performance optimization.",
        "Worked with PostgreSQL, MongoDB, and vector databases (Qdrant) to support structured data storage and semantic search use cases.",
        "Optimized application performance through query tuning, Redis caching, and asynchronous task processing, improving response times and system reliability.",
        "Contributed to deployment and infrastructure workflows using Docker and cloud platforms (Google Cloud / DigitalOcean), supporting scalable production environments.",
        "Maintained CI/CD pipelines to automate testing and deployment processes, reducing release friction and improving development efficiency."
      ]
    },
    {
      role: "Python Developer",
      company: "i3 Pathfinder Solutions",
      companylogo: require("./assets/images/pathfinderLogo.jpg"),
      date: "July 2022 – Sep 2023",
      descBullets: [
        "Assisted in developing backend modules and REST APIs using Python and Django under senior developer guidance, contributing to client-facing platforms and internal tools.",
        "Implemented business logic, database models, and API endpoints using Django REST Framework to support application functionality.",
        "Performed database design, migrations, and optimization using PostgreSQL and MongoDB.",
        "Integrated third-party services and external APIs, enabling automated workflows and system connectivity.",
        "Refactored legacy code and resolved defects to improve application stability, maintainability, and performance.",
        "Developed reusable utilities and automation scripts to streamline development and data processing tasks.",
        "Supported deployment activities, environment configuration, and version control workflows using Git.",
        "Created technical documentation and participated in testing and user acceptance processes for delivered features.",
      ]
    },
    {
      role: "Mentorship Trainee",
      company: "Pakistan State Oil Company",
      companylogo: require("./assets/images/psoLogo.png"),
      date: "Sep 2021 – July 2022",
      descBullets: [
        "Retrieved and analyzed operational data from SQL Server using Python to generate business insights and reporting outputs.",
        "Performed data preprocessing, feature engineering, and exploratory analysis to support predictive modeling initiatives.",
        "Built and evaluated classical machine learning models for sales trend analysis and forecasting.",
        "Optimized database queries and schemas to improve performance for analytics workloads.",
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "SOME COOL STUFF THAT I HAVE WORKED ON",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "AI-POWERED PATIENT CHATBOT",
      projectDesc: "Built an AI healthcare chatbot using LLMs with RAG, enabling real-time, context-aware responses through semantic search, conversation memory, and safety guardrails. Developed scalable FastAPI-based backend services integrating databases and tools for doctor search, appointment booking, and symptom intake.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "LAWFULLY",
      projectDesc: "Built a legal consultation platform using Django and DRF, enabling clients to book and manage appointments with lawyers through secure, role-based REST APIs. Implemented scheduling logic, performance optimizations, and notification services to ensure reliable and efficient consultations.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "DIABETIC RETINOPATHY CLASSIFICATION",
      projectDesc: "Built a deep learning pipeline for diabetic retinopathy classification using CNNs and Vision Transformers (MedViT, Swin, EfficientNet), with advanced preprocessing, augmentation, and model evaluation. Deployed a Flask-based inference app with image upload, severity prediction, and attention-map visualizations for interpretability.",
      footerLink: [
        {
          name: "Github Repository",
          url: "https://github.com/katerina2901/Diabetic-retinopathy-classification"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "RETINAL VESSEL SEGMENTATION",
      projectDesc: "This project explores and compares deep learning models for segmenting retinal blood vessels in fundus images using the DRIVE dataset. The goal is to improve diagnostic assistance in detecting retinal diseases such as diabetic retinopathy and hypertension.",
      footerLink: [
        {
          name: "Github Repository",
          url: "https://github.com/GetomG/Retinal-Vessel-Segmentation-Using-Deep-Learning-Techniques"
        }
        //you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "GRAPHENE PERCOLATION SIMULATION",
      projectDesc: "A scientific simulation tool for modeling the growth and percolation of graphene on a substrate surface. The project fits experimental surface coverage data to logistic or exponential growth models, simulates radial flake growth, and detects percolation using graph-based connectivity analysis.",
      footerLink: [
        {
          name: "Github Repository",
          url: "https://github.com/loharmurtaza/simulating-graphene-percolation"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Publications Section (same card style as Projects)
const publicationsSection = {
  title: "Publications",
  subtitle: "SOME COOL STUFF THAT I HAVE PUBLISHED",
  publications: [
    {
      projectName: "Multi-Modal Feature Set-Based Detection of Freezing of Gait in Parkinson's Disease Using SVM",
      projectDesc:
        "In this work, we explored a multi-modal approach using Electroencephalogram (EEG), Electromyography (EMG), tri-axial ACC (accelerometers and gyroscopes), and Skin Conductance (SC) data to improve the detection of Freezing of Gait (FoG)—a debilitating motor symptom in Parkinson’s disease. Our SVM-based model demonstrates promising performance and contributes to the development of more effective AI-driven assistive technologies.",
      footerLink: [
        { name: "Paper", url: "https://ieeexplore.ieee.org/document/11062848" },
        // { name: "Github Repository", url: "https://github.com/example" }
      ]
    },
    {
      projectName: "Graphene Autocatalytic Growth with Percolation Control on a Dielectric Substrate",
      projectDesc:
        "Co-authored research on graphene growth mechanisms, demonstrating autocatalytic formation driven by the Boudouard reaction and governed by percolation dynamics. The work provides insights into scalable graphene synthesis on dielectric substrates for advanced electronic and energy applications.",
      footerLink: [
        { name: "Paper", url: "https://www.sciencedirect.com/science/article/pii/S2590123026008704" },
        { name: "Github Repository", url: "https://github.com/loharmurtaza/simulating-graphene-percolation" }
      ]
    },
    // {
    //   projectName: "Publication title",
    //   projectDesc:
    //     "Brief description of the publication, venue, and key contributions. You can add links to paper, code, or dataset below.",
    //   footerLink: [
    //     { name: "Paper", url: "https://example.com/paper" },
    //     { name: "Github Repository", url: "https://github.com/example" }
    //   ]
    // },
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle:
    "SOME COOL STUFF THAT I HAVE RECEIVED",

  achievementsCards: [
    {
      title: "IBM DevOps, Cloud, and Agile Foundations",
      subtitle:
        "Completed the IBM DevOps, Cloud, and Agile Foundations specialization on Coursera.",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/QXQ7TH8I0AJL"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },
    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3173447972",
  email_address: "loharmurtaza788@gmail.com"
};


// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  publicationsSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
