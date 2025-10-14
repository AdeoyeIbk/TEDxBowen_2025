import { motion } from "motion/react";
import { Instagram, Linkedin } from "lucide-react";
import { SiTiktok, SiX } from "react-icons/si";
import logo from "../assets/images/logo-black_new.webp";

export default function Footer() {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/tedx_bowenuniversity?igsh=MWk1anI3bG5tY3cxZg%3D%3D&utm_source=qr",
      Icon: Instagram,
    },
    {
      name: "X",
      href: "https://x.com/tedxbowenuni?s=21",
      Icon: SiX,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@tedxbowenuni?_t=ZM-8yzSdzxxGWE&_r=1",
      Icon: SiTiktok,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/tedxbowenuni/",
      Icon: Linkedin,
    },
  ];

  const aboutLinks = [
    { label: "School", href: "https://bowen.edu.ng/" },
    {
      label: "Community",
      href: "https://chat.whatsapp.com/L4BGi7FobJcFfbyFGBjyC7?mode=ac_t",
    },
  ];

  const contactLinks = [
    { label: "Email", href: "mailto:tedxbowenuniversity@bowen.edu.ng" },
    { label: "Address", href: "https://maps.app.goo.gl/T6hVmyDzWEwHLYaj7" },
    { label: "Phone Number", href: "tel:08167834399" },
  ];

  return (
    <motion.footer 
      className="bg-white text-black px-6 md:px-24 py-8 md:py-12 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
        {/* left: logo + socials */}
        <motion.div 
          className="flex flex-col gap-6 md:w-1/3"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="flex items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={logo}
              alt="TEDx Bowen logo"
              className="h-12 md:h-16 object-contain footer-logo-img"
            />
          </motion.a>

          <motion.hr 
            className="border-t border-gray-200"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.div 
            className="flex items-center justify-start gap-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              {socials.map(({ name, href, Icon }, index) => (
                <motion.a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="inline-flex items-center justify-center h-9 w-9 rounded-sm bg-black text-white text-lg transition-transform duration-200 hover:scale-110 hover:-rotate-6"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: -6,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <motion.p 
              className="text-sm md:text-base font-medium footer-social-handle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              @tedxbowenuni
            </motion.p>
          </motion.div>
        </motion.div>

        {/* right: links */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-stretch md:w-2/3 md:ml-32"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex flex-col gap-3"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h6 className="font-semibold text-lg md:text-xl">About Us</h6>
            <nav className="flex flex-col gap-2 footer-link-list">
              {aboutLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="group inline-block relative pb-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <p className="text-sm md:text-base">{link.label}</p>
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-red-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </motion.a>
              ))}
            </nav>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-3"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <h6 className="font-semibold text-lg md:text-xl">Contact Us</h6>
            <nav className="flex flex-col gap-2 footer-link-list">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="group inline-block relative pb-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <p className="text-sm md:text-base">{link.label}</p>
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-red-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto mt-6 md:mt-8 text-sm text-gray-700 flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 md:gap-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="footer-copyright order-2 md:order-1"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          viewport={{ once: true }}
        >
          &copy; 2025 tedxbowen. All rights reserved
        </motion.p>

        <motion.div 
          className="text-center md:text-right order-1 md:order-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base flex items-center justify-center md:justify-end gap-1">
            <span>made with</span>
            <motion.span
              className="inline-block text-red-500"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              ❤️
            </motion.span>
            <span>by</span>
            <motion.a
              className="font-semibold text-red-600"
              href="https://adeoye-samuel.netlify.app/"
              whileHover={{ 
                scale: 1.1,
                color: "#dc2626",
                transition: { duration: 0.2 }
              }}
            >
              IBK
            </motion.a>
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
