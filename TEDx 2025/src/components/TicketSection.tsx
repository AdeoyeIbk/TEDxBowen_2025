import { motion } from "motion/react";
import ticketImage from "../assets/images/ticket_image.webp";
import { Check, Ticket, Crown } from "lucide-react";
import SoldOutStamp from "./ui/SoldOutStamp";


const tiers = [
  {
    name: "Regular Ticket (General Access)",
    id: "tier-standard",
    href: "https://ticketsbydingpay.com/events/tedxbowenuni2025",
    priceMonthly: "₦7,500",
    description: "Per individual",
    features: [
      "Event Access: Full access to the entire TEDx event and all sessions.",
      "Branded Items: TEDx-branded carrier bag, customized jotter, and pen.",
      "Event Brochure: Get the official event guide with speaker and session details.",
      "Memories: Access to post-event digital photos for personal keepsakes.",
      "Appreciation: Receive a personalized thank-you email after the event",
    ],
    featured: false,
  },
  {
    name: "VIP Ticket (Premium Experience)",
    id: "tier-VIP",
    href: "https://ticketsbydingpay.com/events/tedxbowenuni2025",
    priceMonthly: "₦15,000",
    description: "(Includes everything in Regular)",
    features: [
      "Exclusive Merchandise: Merch pack featuring a customized T-shirt, bottle, jotter + pen set, and a premium carrier bag.",
      "Event Materials: Includes the official event brochure.",
      "Reserved front-row seating for the best view.",
      "Priority check-in for smooth, early entry.",
      "Access to the exclusive Speaker Meet & Greet.",
      "Professional photo opportunity with speakers or guests.",
      "Exclusive TEDx VIP badge or wristband.",
      "Post-event networking access.",
      "Appreciation: Receive a personalized thank-you email celebrating your VIP support.",
    ],
    featured: true,
  },
];

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TicketSection() {
  return (
    <motion.div 
      id="ticketSection"
      className="w-full flex flex-col items-center justify-center relative py-20 bg-gradient-to-b from-white/20 via-black/60 to-black/80 px-6 sm:px-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* ticket image overlaps the pricing cards below using negative margin and higher z-index */}
      <motion.img
        src={ticketImage}
        alt="ticketImage"
        className="h-auto mx-auto -mb-100 sm:-mb-136 -top-48 sm:-top-58 z-20 relative max-w-[320px] md:max-w-[480px] lg:max-w-[640px]"
        initial={{ y: -50, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, rotateY: 5 }}
      />
      {/* <div className="flex flex-col sm:flex-row w-full justify-between"></div> */}
      <div className="relative isolatepx-6 py-24 sm:py-32 lg:px-8">
        {/* ticket container*/}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 ">
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: tierIdx * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={classNames(
    tier.featured
      ? "border-2 border-red-500 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.6)]"
      : "border border-white/10",
    "rounded-3xl p-8 sm:p-10 bg-white/10 transition-all duration-700 relative"
  )}
>
<SoldOutStamp />
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
                {tier.features.map((feature, featureIdx) => (
                  <motion.li 
                    key={feature}
                    className={classNames(
                      tier.featured ? "gap-x-10" : "flex gap-x-3",
                      "text-base/7 font-thin text-white",
                      "py-2 px-4 rounded-lg  w-fit flex gap-2"
                    )}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: (tierIdx * 0.2) + (featureIdx * 0.1) 
                    }}
                    viewport={{ once: true }}
                  >
                    <Check
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? "text-red-800" : "text-red-500 ",
                        "h-6 w-5 flex-none ",
                      )}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                type="button"
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-red-800 text-white focus-visible:outline-red-500"
                    : "bg-red-500 text-white focus-visible:outline-red/75",
                  "mt-8 w-full block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 opacity-70 cursor-not-allowed"
                )}
                disabled
              >
                Sold Out
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
