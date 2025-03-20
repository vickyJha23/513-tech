import { FaEdit, FaCode, FaBullhorn, FaShareAlt, FaShoppingCart, FaHeadset } from 'react-icons/fa';
import collection from './assets';

const serviceCardData = [
  {
    icon: FaEdit,
    title: 'Design',
    description: 'Creating intuitive and engaging user interfaces that enhance user satisfaction and drive conversions.',
    animationDirection: 'fade-right',
  },
  {
    icon: FaCode,
    title: 'Development',
    description: 'Building robust and scalable web applications tailored to meet your business needs.',
    animationDirection: 'fade-left',
  },
  {
    icon: FaBullhorn,
    title: 'Marketing',
    description: 'Crafting effective marketing strategies to boost your brand visibility and customer engagement.',
    animationDirection: 'fade-right',
  },
  {
    icon: FaShareAlt,
    title: 'Social Media',
    description: 'Enhancing your social presence with creative content and effective engagement strategies.',
    animationDirection: 'fade-left',
  },
  {
    icon: FaShoppingCart,
    title: 'E-commerce',
    description: 'Delivering seamless e-commerce solutions to enhance online shopping experiences.',
    animationDirection: 'fade-right',
  },
  {
    icon: FaHeadset,
    title: 'Help & Support',
    description: 'Providing 24/7 assistance to ensure a smooth and reliable experience for your customers.',
    animationDirection: 'fade-left',
  },
];

export const projects = [
    collection.umeWebsite,
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1545670723-196ed0954986?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"     
];
export const customers = [
  {
    id: 1,
    name: "Google",
    feedback: "A seamless collaboration that brought innovative solutions to life.",
    logo: "/images/google-logo.png",
  },
  {
    id: 2,
    name: "Microsoft",
    feedback: "Exceptional service and cutting-edge technology delivery.",
    logo: "/images/microsoft-logo.png",
  },
  {
    id: 3,
    name: "Amazon",
    feedback: "A reliable partner that consistently exceeds expectations.",
    logo: "/images/amazon-logo.png",
  },
  {
    id: 4,
    name: "Tesla",
    feedback: "Innovative, efficient, and a pleasure to work with.",
    logo: "/images/tesla-logo.png",
  },
];

export default serviceCardData;
