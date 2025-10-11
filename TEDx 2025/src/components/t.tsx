import { useEffect } from "react";
import bg from "../assets/images/tedx-bowen-background-image.webp";
import senateImg from "../assets/images/senate-building (1).webp";

export default function BowenSection() {
useEffect(() => {
const els = document.querySelectorAll(".fade-element");
const io = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) entry.target.classList.add("in-view");
});
},
{ threshold: 0.25 }
);
els.forEach((el) => io.observe(el));
return () => io.disconnect();
}, []);

return (
<section className="relative bg-left bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg})`, }}>
  {/* small inline style for the fade animation used by Tailwind utilities */}
  <style>
    {
      ` .fade-element {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.8s cubic-bezier(.23, 1, .32, 1), transform 0.8s cubic-bezier(.23, 1, .32, 1);
      }

      .fade-element.in-view {
        opacity: 1;
        transform: none;
      }

      `
    }
  </style>

  <div className="max-w-7xl mx-auto flex items-start gap-8 px-4 md:px-8 pt-[25rem] md:pt-[25rem] pb-8">
    <div className="flex-1 flex flex-col items-end text-right pr-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 fade-element">
        What is TEDx Bowen University?
      </h2>
      <p className="text-white leading-relaxed max-w-xl fade-element">
        TEDxBowen University is an independently organized TEDx event
        officially licensed by TEDx and proudly hosted at Bowen University,
        Iwo, Osun State. It is part of TED's global movement to share “ideas
        worth spreading” — bringing together inspiring speakers, visionaries,
        students, creatives, and changemakers who share ideas that challenge,
        educate, and ignite transformation.
      </p>
    </div>

    <div className="flex-shrink-0 w-1/3 md:w-1/4 lg:w-1/5 flex items-start">
      <img src={senateImg} alt="Bowen Senate Building"
        className="w-full h-auto object-cover rounded-sm shadow-lg fade-element" style={{ maxHeight: "60vh" }} />
    </div>
  </div>
</section>
);
}