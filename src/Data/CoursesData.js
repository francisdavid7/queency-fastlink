import webDevelopmentThumbnail from "../assets/Images/courses/web-development.jpg";
import graphicDesignThumbnail from "../assets/Images/courses/graphic-design.jpg";
import officeSuiteThumbnail from "../assets/Images/courses/office-suite.jpg";
import uiUxThumbnail from "../assets/Images/courses/ui-ux.jpg";
import digitalPrintingThumbnail from "../assets/Images/courses/digital-printing.jpg";
import digitalBrandingThumbnail from "../assets/Images/courses/digital-branding.jpg";

export const coursesData = [
  {
    id: 1,
    title: "Web Development",
    category: "Programming",
    description:
      "Learn how to design and build responsive, user-friendly websites using HTML, CSS, JavaScript, and React.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    image: webDevelopmentThumbnail,
    rating: 4.9,
    students: 120,
    price: "₦120,000",
    link: "/courses/web-development"
  },
  {
    id: 2,
    title: "Graphic Design",
    category: "Design",
    description:
      "Master the art of visual communication using Adobe Photoshop, Illustrator, and CorelDRAW to create stunning designs.",
    duration: "6 Months",
    level: "Beginner to Intermediate",
    image: graphicDesignThumbnail,
    rating: 4.8,
    students: 90,
    price: "₦80,000",
    link: "/courses/graphic-design"
  },
  {
    id: 3,
    title: "Office Suite",
    category: "Productivity",
    description:
      "Gain essential computer skills using Microsoft Word, Excel, PowerPoint, and Access for professional office work.",
    duration: "3 Months",
    level: "Beginner",
    image: officeSuiteThumbnail,
    rating: 4.7,
    students: 150,
    price: "₦50,000",
    link: "/courses/office-suite"
  },
  {
    id: 4,
    title: "UI/UX Design",
    category: "Design",
    description:
      "Understand user experience principles and design visually appealing interfaces using Figma and Adobe XD.",
    duration: "6 Months",
    level: "Intermediate",
    image: uiUxThumbnail,
    rating: 4.9,
    students: 100,
    price: "₦80,000",
    link: "/courses/ui-ux"
  },
  {
    id: 5,
    title: "Digital Printing",
    category: "Printing & Production",
    description:
      "Learn how to operate digital printing machines, prepare print files, and produce high-quality marketing materials.",
    duration: "1 Year",
    level: "Beginner to Intermediate",
    image: digitalPrintingThumbnail,
    rating: 4.6,
    students: 70,
    price: "₦200,000",
    link: "/courses/digital-printing"
  },
  {
    id: 6,
    title: "Digital Branding",
    category: "Marketing",
    description:
      "Develop digital branding strategies using social media, content creation, and visual storytelling for businesses.",
    duration: "6 Months",
    level: "Intermediate",
    image: digitalBrandingThumbnail,
    rating: 4.8,
    students: 85,
    price: "₦80,000",
    link: "/courses/digital-branding"
  }
];
