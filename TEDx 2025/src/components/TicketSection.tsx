import ticketImage from "../assets/images/ticket_image.png";
import { Check, Ticket, Crown } from "lucide-react";

const tiers = [
  {
    name: "Standard Ticket",
    id: "tier-standard",
    href: "#",
    priceMonthly: "₦7000",
    description:
      "Per individual",
    features: [
      "Event Access: Full access to all sessions and presentations.",
      "Jotters: Custom-branded jotters for note-taking.",
      "Food and Beverages: Access to general food and beverage options. ",
    ],
    featured: false,
  },
  {
    name: "VIP Ticket",
    id: "tier-VIP",
    href: "#",
    priceMonthly: "₦15,000",
    description: "(includes everything in Standard, plus)",
    features: [
      "Exclusive Merchandise: Extra branded items, like a T-shirt or eco-friendly tote bag.",
      "Extra Food and Beverages: Access to additional snacks and premium drink options.",
      "Special Seating: Reserved seating close to the stage or main presentation area.",
    ],
    featured: true,
  },
];

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TicketSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center relative py-20 -gap-20">
      {/* ticket image overlaps the pricing cards below using negative margin and higher z-index */}
      <img
        src={ticketImage}
        alt="ticketImage"
        className="max-w-240 h-auto mx-auto -mb-160 -top-76 z-20 relative"
      />
      <div className="flex flex-col sm:flex-row w-full justify-between"></div>
      <div className="relative isolatepx-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "border-red-500 border-2"
                  : tierIdx === 0
                    ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                    : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
                "rounded-3xl p-8 ring-1 ring-white/10 sm:p-10",
                "bg-white/10"
              )}
            >
                <div
                  id={tier.id}
                  className={classNames(
                    tier.featured ? "bg-red-800" : "bg-red-500",
                    "text-base/7 font-thin text-white",
                    "py-2 px-4 rounded-lg  w-fit flex gap-2"
                  )}
                >
                {tier.featured ? <Crown /> : <Ticket />}
                  <h3>{tier.name}</h3>
                </div>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-white",
                    "text-5xl font-semibold tracking-tight",
                  )}
                >
                  {tier.priceMonthly}
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-300",
                  "mt-6 text-base/7",
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-300",
                  "mt-8 space-y-3 text-sm/6 sm:mt-10",
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature}
                  className={classNames(
                    tier.featured ? "gap-x-10" : "flex gap-x-3",
                    "text-base/7 font-thin text-white",
                    "py-2 px-4 rounded-lg  w-fit flex gap-2"
                  )}>
                    <Check
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? "text-red-800" : "text-red-500 ",
                        "h-6 w-5 flex-none ",
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-red-800 text-white hover:bg-red-900 focus-visible:outline-red-500"
                    : " bg-red-500 text-white  hover:bg-red-700 focus-visible:outline-red/75",
                  "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10",
                )}
              >
                Buy your tickets
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
