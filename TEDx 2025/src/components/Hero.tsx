import Header from "./Header";
import Button from "./ui/Button";
import heroBg from "../assets/images/hero_bg.webp";
import underline from "../assets/images/underline.png";
import themeImg from "../assets/images/theme.png";


export default function Hero() {
	const headingLines = [
		"Inspire minds.",
		"Propel action.",
		"Create tomorrow.",
	];
	return (
		<div className="w-full flex items-center pt-30 px-24">
			<img src={heroBg} alt="hero background" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-top" />
			<Header />
				<div  className="flex w-full text-white items-center justify-between ">
					<div className="flex flex-col gap-4 h-full">
						<div className="w-fit">
							<p className="font-thin">This November</p>
							<img src={underline} alt="" className="w-50 h-auto"/>
						</div>
						<h1 className="text-2xl md:text-3xl font-bold">
							{headingLines.map((line, idx) => (
								<span key={idx} className="block">
									{line}
								</span>
							))}
						</h1>
						<Button>Get your Tickets</Button>
					</div>
					<div className="flex flex-col gap-12 h-full items-center">
						<img src={themeImg} alt="" className="md:max-h-100" />
						<div
                            className="flex flex-col md:flex-row items-center gap-8 pb-6 text-2xl"
                            style={{ fontFamily: "Stretch Pro, sans-serif" }}
                        >
                            <p>29th NOV <br /> 2025</p>

                            {/* divider: horizontal on small screens, vertical on md+ */}
                            <div
                                aria-hidden="true"
                                className="w-full h-4 bg-white/20 my-2 md:my-0 md:w-px md:h-12"
                            />

                            <p>Library <br /> Conference <br /> Room</p>
                        </div>
					</div>
				</div>
			</div>
	);
}
