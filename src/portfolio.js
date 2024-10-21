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
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Esteban Lozada",
  title: "I'm Esteban",
  subTitle: emoji(
    "Full Stack Software Developer 🚀 having an experience of building Web applications with Typescript / Reactjs / Nodejs / Laravel."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/estebiart",
  linkedin: "https://www.linkedin.com/in/anderson-esteban-lozada-moreno/",
  gmail: "estebiart@gmail.com",
  medium: "https://medium.com/@estebiart",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Fullstack Developer with a passion for creating impactful digital experiences and scalable web solutions.",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for web applicationsusing React, Vue, and Angular."),
    emoji("⚡ Specialize in Progressive Web Applications (PWA) and Single Page Applications (SPA) Stacks."),
    emoji("⚡ Integration of third-party services and APIs."),
    emoji("⚡ Skilled in backend technologies like Node.js, PHP, and Python for building fullstack solutions."),
    emoji("⚡ Focus on performance optimization, clean code practices, and improving user experience."),
    emoji("⚡ Create dynamic and engaging animations using GSAP (GreenSock) to enhance user interaction."),
    emoji("⚡ Implement 3D models and interactive experiences with Three.js.")

  ],

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Nebrija University",
      logo: require("./assets/images/nebrija.png"),
      subHeader: "Master's in Fullstack Development",
      duration: "2022",
      desc: ""
    },
    {
      schoolName: "Politécnico Internacional",
      logo: require("./assets/images/politecnico.jpg"),
      subHeader: "Software Development and Mobile Applications",
      duration: "2021",
      desc: "",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
      role: "Fullstack Developer",
      company: "Flare",
      companylogo: require("./assets/images/flare.jpeg"),
      date: "2023 – Present",
      desc: ""
    },
    {
      role: "Front-End Developer",
      company: "Flare",
      companylogo: require("./assets/images/flare.jpeg"),
      date: "2021 – 2023",
      desc: ""
    },
    {
      role: "Fullstack Developer",
      company: "Makrosoft",
      companylogo: require("./assets/images/makrosoft.jpeg"),
      date: "2019 – 2021",
      desc: ""
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/seismic.png"),
      projectName: "Sesmic Shift",
      projectDesc: "Progressive Web App (PWA) for event with React and Framework7",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://events-app-teal.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/darnel.png"),
      projectName: "Darnel",
      projectDesc: "Multilingual web application ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://darnelgroup.com/es-co"
        }
      ]
    },
    {
      image: require("./assets/images/ajover.png"),
      projectName: "Ajover",
      projectDesc:  "Multilingual web application ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.ajover.com/"
        }
      ]
    },
    {
      image: require("./assets/images/chevrolet.png"),
      projectName: "Chevrolet Isuzu",
      projectDesc:   "Web application ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.busesycamioneschevrolet.com.co/"
        }
      ]
    },
    {
      image: require("./assets/images/bretana.png"),
      projectName: "Bretaña",
      projectDesc:  "Web application ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.bretana.com.co/"
        }
      ]
    },
    {
      image: require("./assets/images/energy.png"),
      projectName: "Energy BBDO",
      projectDesc: "A sophisticated web platform for a top advertising agency",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://energybbdo.com//"
        }
      ]
    },
    {
      image: require("./assets/images/flare.jpeg"),
      projectName: "Flare",
      projectDesc:  "A sophisticated web platform for a top advertising agency",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://flare.com.co/en"
        }
      ]
    },
    {
      image: require("./assets/images/visual.jpg"),
      projectName: "Estebiart Theme", 
      projectDesc: "Visual studio code custom theme",
      footerLink: [
        {
          name: "Visual Studio Marketplace",
          url: "https://marketplace.visualstudio.com/items?itemName=estebiart.estebiart-theme"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "An Introduction to Accessibility and Inclusive Design",
      subtitle:
        "",
      image: require("./assets/images/Illinois.png"),
      imageAlt: "University of Illinois Urbana-Champaign",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/79BBVPLC8YU3"
        }
      ]
    },
    {
      title: "Engineering Practices for Building Quality Software",
      subtitle:
        "",
      image: require("./assets/images/minnesota.jpg"),
      imageAlt: "Engineering Practices for Building Quality Software  Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/YPSMMMSHAHHW"
        }
      ]
    },
    {
      title: " UX Design Fundamentals",
      subtitle:
        "",
      image: require("./assets/images/calarts.png"),
      imageAlt: "Engineering Practices for Building Quality Software  Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/YPSMMMSHAHHW"
        }
      ]
    },
    {
      title: "Bolsa de valores de Colombia Student Scholarship",
      subtitle: "",
      image: require("./assets/images/bolsa.png"),
      imageAlt: "bolsa",
      footerLink: [
        {name: "Scholarship", url: ""}
      ]
    }
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to discuss a project or just say hi? My inbox is open for all.",
  number: "+51-3228051614",
  email_address: "estebiart@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
