import { Instagram, Linkedin } from "lucide-react";
import { SiTiktok, SiX } from "react-icons/si";
import logo from "../assets/images/logo-black new.webp";

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
    <>
      <footer className="bg-white text-black px-6 md:px-24 py-8 md:py-12 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
          {/* left: logo + socials */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <div className="flex items-center">
              <img
                src={logo}
                alt="TEDx Bowen logo"
                className="h-12 md:h-16 object-contain footer-logo-img"
              />
            </div>

            <hr className="border-t border-gray-200" />

            <div className="flex items-center justify-start gap-6">
              <div className="flex items-center gap-4">
                {socials.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="inline-flex items-center justify-center h-9 w-9 rounded-sm bg-black text-white text-lg transition-transform duration-200 hover:scale-110 hover:-rotate-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <p className="text-sm md:text-base font-medium footer-social-handle">
                @tedxbowenuni
              </p>
            </div>
          </div>

          {/* right: links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-stretch md:w-2/3 md:ml-32">
            <div className="flex flex-col gap-3">
              <h6 className="font-semibold text-lg md:text-xl">About Us</h6>
              <nav className="flex flex-col gap-2 footer-link-list">
                {aboutLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group inline-block relative pb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-sm md:text-base">{link.label}</p>
                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-red-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <h6 className="font-semibold text-lg md:text-xl">Contact Us</h6>
              <nav className="flex flex-col gap-2 footer-link-list">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group inline-block relative pb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-sm md:text-base">{link.label}</p>
                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-red-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 md:mt-8 text-sm text-gray-700 flex justify-center md:justify-end">
          <p className="footer-copyright">
            &copy; 2025 tedxbowen. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
