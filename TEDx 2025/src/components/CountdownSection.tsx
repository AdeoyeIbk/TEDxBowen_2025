import bg from "../assets/images/countdown-bg.png";


export default function CountdownSection() {
  return <>
    <div className="relative bg-left bg-no-repeat bg-cover w-full h-lvh pt-100 pr-24"
      style={{ backgroundImage: `url(${bg})` }}   ></div>
  </>
}