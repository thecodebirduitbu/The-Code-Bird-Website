import {
  mobile,
  backend,
  creator,
  web

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
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "AI/ML/DL",
    icon: backend,
  },
  {
    title: "Cyber Security",
    icon: creator,
  },
  {
    title: "DSA & CP",
    icon: creator,
  },
  {
    title: "Web3 / Blockchain",
    icon: creator,
  },
  {
    title: "Game Development",
    icon: creator,
  },
  {
    title: "GATE Exam",
    icon: creator,
  },
  {
    title: "Hardware",
    icon: creator,
  },

];


const testimonials = [
  {
    testimonial:
      "",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


export { services, testimonials};
