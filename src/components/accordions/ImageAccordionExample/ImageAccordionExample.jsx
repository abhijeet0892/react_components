import { ImageAccordion } from "../ImageAccordion/ImageAccordion";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";
import image6 from "./6.jpg";

const coolImages = [
  {
    header: "Canada",
    image: image1,
    text: `Image description`,
  },

  {
    header: "New Zealand",
    image: image2,
    text: `Image description`,
  },

  {
    header: "Indonesia",
    image: image3,
    text: `Image description`,
  },
  {
    header: "South Africa",
    image: image4,
    text: `Image description`,
  },
  {
    header: "Spain",
    image: image5,
    text: `Image description`,
  },
  {
    header: "India",
    image: image6,
    text: `Image description`,
  },
];

export const ImageAccordionExample = () => (
  <section className="page">
    <ImageAccordion items={coolImages} />
  </section>
);
