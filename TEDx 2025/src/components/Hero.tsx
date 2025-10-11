import Header from "./Header";
import Button from "./ui/Button";
import heroBg from "../assets/images/hero_bg.jpg";
import underline from "../assets/images/underline.png";
import themeImg from "../assets/images/theme.png";


export default function Hero() {
	return (
		<div className="w-full flex items-center p-24 min-h-screen">
			<img src={heroBg} alt="hero background" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-top" />
			<Header />
				<div  className="flex w-full mt-36 text-white items-center justify-between">
					<div className="flex flex-col justify-between">
						<div>
							<p>This November</p>
							<img src={underline} alt="" />
						</div>
						<h1>Inspire minds. <br />
					Propel action. <br />
							Create tomorrow.</h1>
						<Button>Get your Tickets</Button>
					</div>
					<div className="flex flex-col justify-between">
						<img src={themeImg} alt="" className="md:max-h-84" />
						<div className="flex gap-8  text-2xl" style={{ fontFamily: "Stretch Pro, sans-serif" }}>
							<p>29th NOV <br /> 2025</p>
							<p>Library <br /> Conference <br /> Room</p>
						</div>
					</div>
				</div>
			</div>
	);
}
