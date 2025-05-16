import CustomImage from "./custom-image";

const featuresContent = [
  {
    title: "High-Quality Products",
    iconPath: "/icons/badgeCheck.svg",
    description:
      "We source our products — including candlenuts, coconut briquettes, lobster seeds, and banana leaves — directly from trusted local farmers and producers. Every item is carefully selected to meet international standards.",
  },
  {
    title: "Export Expertise",
    iconPath: "/icons/globe.svg",
    description:
      "With deep knowledge of export procedures and international trade regulations, we ensure a smooth and compliant export process from Indonesia to your destination. ",
  },
  {
    title: "Competitive Pricing",
    iconPath: "/icons/tag.svg",
    description:
      "By working closely with local suppliers, we’re able to offer high-quality products at competitive prices, helping your business grow with cost efficiency.",
  },
  {
    title: "Professional & Transparent Service",
    iconPath: "/icons/handshake.svg",
    description:
      "We maintain clear communication, transparent transactions, and professional handling throughout every stage of the export journey.",
  },
  {
    title: "Certified & Trusted",
    iconPath: "/icons/certified.svg",
    description:
      "We prioritize trust and credibility. Our products come with the necessary certifications and we comply with quality control measures required by global buyers.",
  },
  {
    title: "Supporting Local Economy",
    iconPath: "/icons/users.svg",
    description:
      "By choosing us, you also support sustainable livelihoods for Indonesian farmers and producers. We are committed to empowering local communities.",
  },
];

export default function FeatureSection() {
  return (
    <section className="px-8 md:px-16 pb-16 text-center md:text-left w-full">
      <h2 className="font-bold text-5xl">Why Choose Us</h2>
      <p className="mt-3 text-lg text-gray-600">
        Your Trusted Partner in Indonesian Export Excellence
      </p>

      <div className="grid gird-cols-1 md:grid-cols-3 mt-12 gap-12">
        {featuresContent.map((item, index) => {
          return (
            <div key={index} className="flex flex-col space-y-2.5 items-center justify-center md:items-start">
                <CustomImage alt="" src={item.iconPath} width={640} height={640} className="w-12 bg-[#B8D9F9] p-2 rounded-full"/>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-neutral-600 max-w-5/6 sm:w-full">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
