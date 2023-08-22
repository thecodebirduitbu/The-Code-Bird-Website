import React from "react";
import Timeline from "./Timeline";

const eventsData = [
  {
    date: "23rd August, 2016",
    description:
      "The Code Bird founded under the guidance of Professor Sumit Gupta.",
    image: "demoimg.png",
  },
  {
    date: "September, 2016",
    description: "First #WEB DEV PROJECT - 01: Create Your Portfolio Using HTML & CSS.",
    image: "demoimg.png",
  },
  {
    date: "September, 2016",
    description: "First coding contest organized: Tecquizz.",
    image: "demoimg.png",
  },
  {
    date: "March 2017",
    description: "First online programming Contest will held on Codechef",
    image: "demoimg.png",
  },
  {
    date: "February 2018",
    description: "Getting started with Codechef - for beginners in CP",
    image: "demoimg.png",
  },
  
  {
    date: "March 2018",
    description: "CodeWiz - UTKRISHT 2018",
    image: "demoimg.png",
  },
  {
    date: "April 2018",
    description: "Online Programming contest on Codechef",
    image: "demoimg.png",
  },
  {
    date: "October 2018",
    description: "CODECHEF SnackDown19",
    image: "demoimg.png",
  },
  
  {
    date: "November 2019",
    description: "CodeWiz-2.0  - CODECHEF",
    image: "demoimg.png",
  },
  
  {
    date: "April 2020",
    description: "CODECHEF Campus Chapters Contest 1.0 : 24-hour coding competition",
    image: "demoimg.png",
  },
  
  {
    date: "May 2020",
    description: "C Programming Quiz - EDMODO",
    image: "demoimg.png",
  },
  {
    date: "June 2020",
    description: "TechTalk 1.0 - Future prospects of the IT industry",
    image: "demoimg.png",
  },
  {
    date: "June 2020",
    description: "TechTalk 2.0 -  ML / Data Science / Python",
    image: "demoimg.png",
  },
  {
    date: "January 2021",
    description: "The CP Journey Episode:- 1 & 2",
    image: "demoimg.png",
  },
  {
    date: "February 2021",
    description: "The CodeBird Tagline Contest 2021",
    image: "demoimg.png",
  },
  {
    date: "March 2021",
    description: "Virtual Doubt Clarifying Session - Competitive Programming",
    image: "demoimg.png",
  },
  {
    date: "April 2021",
    description: "Code Innovation Series - GitHub and IncubateIND",
    image: "demoimg.png",
  },
  {
    date: "August 2021",
    description: "Roadmap to Your 1st Internship - SAWO Labs",
    image: "demoimg.png",
  },
  {
    date: "August 2021",
    description: "One - 2 - One",
    image: "demoimg.png",
  },
  {
    date: "August 2021",
    description: "5-Year Anniversary",
    image: "demoimg.png",
  },
  {
    date: "September 2021",
    description: "CodeWiz 3.0",
    image: "demoimg.png",
  },
  {
    date: "October 2021",
    description: "SNACKDOWN-21 by CodeChef",
    image: "demoimg.png",
  },
  {
    date: "December 2021",
    description: "FanMania 2021 - Reskilll x Spark AR",
    image: "demoimg.png",
  },
  {
    date: "January 2022",
    description: "Ask Me Anything - Alumnus Kumar Sourav",
    image: "demoimg.png",
  },
  {
    date: "April 2022",
    description: "Quiz Wiz 1.0",
    image: "demoimg.png",
  },
  {
    date: "August 2022",
    description: "Poster-Making Competition",
    image: "demoimg.png",
  },
  {
    date: "August 2022",
    description: "6-year Anniversary",
    image: "demoimg.png",
  },
  {
    date: "October 2022",
    description: "The perks of becoming Good at DSA",
    image: "demoimg.png",
  },
  {
    date: "November 2022",
    description: "Freshers' Orientatino Session",
    image: "demoimg.png",
  },
  {
    date: "December 2022",
    description: "CODEBIRD Wiki - CyberSecurity x WebDevelopment",
    image: "demoimg.png",
  },
  {
    date: "May 2023",
    description: "Quiz-Wiz 2.0",
    image: "demoimg.png",
  },
  {
    date: "May 2023",
    description: "GAME ON! - game development workshop",
    image: "demoimg.png",
  },
  {
    date: "May 2023",
    description: "abcD : Any Body can Conquer DSA",
    image: "demoimg.png",
  },
  {
    date: "August 2023",
    description: "Code Wiz 4.0",
    image: "demoimg.png",
  },
  {
    date: "August 2023",
    description: "Hack Wiz 1.0",
    image: "demoimg.png",
  },
  
  
  //  more events here
];

function TimelineStory() {
  return (
    <div className=" text-center text-white">
      <h1 className="text-semibold text-2xl md:text-4xl mb-4">
        Its a long Story, ☕️ Coffee ☕️
      </h1>
      <Timeline events={eventsData} />
    </div>
  );
}

export default TimelineStory;
