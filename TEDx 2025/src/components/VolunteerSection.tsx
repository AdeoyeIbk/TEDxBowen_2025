import VolunteerCard from "./ui/VolunteerCard";
import WelfareImage from "../assets/images/volunteer_welfare.png";
import MediaImage from "../assets/images/volunteer_media.png";
import LogisticsImage from "../assets/images/volunteer_logistics.png";


export default function VolunteerSection() {

  const volunteer = [
    {
      id: 1,
      group: "welfare",
      description: "Ensure the well-being and comfort of all attendees throughout the event.",
      image: WelfareImage,
      link: "https://forms.gle/r9mgQHcaVtBCE1oK9"
    },
    {
      id: 2,
      group: "media",
      description: "Capture and share the event's highlights through photography, videography, and social media.",
      image: MediaImage,
      link: "https://forms.gle/qj13E3sMCX76u44J7"
    },
    {
      id: 3,
      group: "logistics",
      description: "Assist in the smooth operation of event logistics, including setup, coordination, and teardown.",
      image: LogisticsImage,
      link: "https://forms.gle/RXo1KkkkXBbu89Xy7"
    }
  ];


  return <>
    <section 
         id="volunteerSection"
         className="w-full flex flex-col items-center justify-center relative py-32 px-2 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="text-3xl md:text-4xl text-white font-medium">Become a Volunteer</h2>
        {/* volunteer cards */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">
          {/* map over the volunteer array with the volunteer cards component */}
         {volunteer.map((volunteer) => (
           <VolunteerCard key={volunteer.id} volunteer={volunteer} />
         ))}
        </div>
      </div>
    </section>
  </>
}