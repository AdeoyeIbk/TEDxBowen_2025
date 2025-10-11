import bg from "../assets/images/tedx-bowen-background-image.webp";
import senateImg from "../assets/images/senate-building (1).webp";

export default function BowenSection() {

  return (
    <section
      className="relative bg-left bg-no-repeat bg-cover w-full h-full pt-100 pr-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-full mx-auto relative min-h-[28rem]">
        <div className="absolute top-0 right-0 h-full flex flex-col items-end text-right pr-6 p-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 fade-element">
            What is TEDx Bowen University?
          </h2>
          <p className="text-white leading-relaxed max-w-xl fade-element text-sm">
            TEDxBowen University is an independently organized TEDx event
            officially licensed by TEDx and proudly hosted at Bowen University,
            Iwo, Osun State. It is part of TED's global movement to share “ideas
            worth spreading” — bringing together inspiring speakers, visionaries,
            students, creatives, and changemakers who share ideas that challenge,
            educate, and ignite transformation.
          </p>
        </div>

        <div className="w-full">
          <img
            src={senateImg}
            alt="Bowen Senate Building"
            className="w-full h-full block"
          />
        </div>
      </div>
    </section>
  );
}