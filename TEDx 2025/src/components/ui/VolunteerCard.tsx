import { ArrowUp } from "lucide-react";

type Volunteer = {
  group: string;
  image: string;
  description: string;
  link: string;
};

type VolunteerCardProps = {
  volunteer: Volunteer;
};

export default function VolunteerCard({ volunteer }: VolunteerCardProps) {
  return (
    <div className="volunteer-card group text-white p-4 rounded-lg shadow-md flex gap-4 mx-4 bg-white/10">
      <div className="flex flex-col gap-4 w-48 justify-around">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold capitalize">{volunteer.group}</h3>
          <p className="text-left text-sm">{volunteer.description}</p>
        </div>
        <a
          href={volunteer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-3 right-3 flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 transition-all duration-300"
        >
          <ArrowUp className="text-white" style={{ transform: 'rotate(45deg)', transformOrigin: 'center' }} />
        </a>
      </div>
      {/* image */}

      <div className="relative overflow-hidden w-48 h-36 sm:w-64 sm:h-44 rounded-md">
        <img
          className="w-full h-full object-cover"
          src={volunteer.image}
          alt={volunteer.group}
        />

        <a
          href={volunteer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 transition-all duration-300"
        >
          <ArrowUp className="text-white" style={{ transform: 'rotate(45deg)', transformOrigin: 'center' }} />
        </a>
      </div>
    </div>
  );
}
