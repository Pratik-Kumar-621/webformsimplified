import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

const footersocials = [
  {
    name: <IconBrandTwitter />,
    url: "/",
  },
  {
    name: <IconBrandLinkedin />,
    url: "/",
  },
  {
    name: <IconBrandGithub />,
    url: "/",
  },
  {
    name: <IconBrandFacebook />,
    url: "/",
  },
  {
    name: <IconBrandInstagram />,
    url: "/",
  },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40px" });
  return (
    <motion.footer
      ref={ref}
      initial={{ y: -30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="flex items-center justify-center bg-(--background) px-6 py-5 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] dark:shadow-[-10px_-10px_30px_4px_rgba(255,255,255,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]"
    >
      <div className="flex items-center gap-3">
        <strong className="text-sm">Follow us: </strong>
        <div className="flex gap-3">
          {footersocials.map((item, idx) => (
            <div
              className="transition-all duration-300 ease-in-out hover:scale-130"
              key={idx}
            >
              <Link target="_blank" href={item.url}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
