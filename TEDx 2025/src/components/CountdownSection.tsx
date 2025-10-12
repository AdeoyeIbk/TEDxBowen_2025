import bg from "../assets/images/countdown-bg.png";

export default function CountdownSection() {
  return (
    <>
      <div
        className="relative bg-left bg-no-repeat bg-cover w-full h-[100vh]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Two-column flex layout: left text (top), right countdown (bottom-right) */}
        <div className="flex flex-col md:flex-row w-full h-full pt-32 pl-6 md:pl-32 pr-6 md:pr-24 pb-8">
          {/* Left column: keeps text at the top */}
          <div className="flex-1 flex flex-col justify-start">
            <p className="text-white leading-relaxed max-w-2xl fade-element">
              At the heart of every meaningful change lies an idea—one that
              sparks curiosity, challenges the norm, and dares us to dream
              differently. But inspiration alone isn’t enough. Real impact
              happens when ideas move people—when vision becomes action, courage
              meets responsibility, and conversations lead to change. This
              year’s theme is a call to think deeper, act bolder, and imagine
              brighter. Because tomorrow isn’t distant—it’s shaped by the impact
              we choose to make today.
            </p>
          </div>

          {/* Right column: fixed width, align content bottom-right */}
          <div className="w-full md:w-80 flex flex-col justify-end items-center md:items-end md:justify-end">
            <div className="flex p-6 flex-col gap-4 bg-white rounded-lg max-w-fit max-h-fit">
              <div className="self-end">
                <p className="text-black text-sm">Countdown to TEDx 2025</p>
              </div>

              <div className="flex gap-8 items-center text-red-500">
                <div className="text-center">
                  <h4 className="text-5xl font-semibold">30</h4>
                  <p className="text-sm">Days</p>
                </div>

                <span className="font-bold">:</span>

                <div className="text-center">
                  <h4 className="text-5xl font-semibold">12</h4>
                  <p className="text-sm">Hours</p>
                </div>

                <span className="font-bold">:</span>

                <div className="text-center">
                  <h4 className="text-5xl font-semibold">30</h4>
                  <p className="text-sm">Minutes</p>
                </div>

                <span className="font-bold">:</span>

                <div className="text-center">
                  <h4 className="text-5xl font-semibold">30</h4>
                  <p className="text-sm">Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
