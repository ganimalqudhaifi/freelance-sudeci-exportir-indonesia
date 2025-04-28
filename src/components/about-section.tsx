import CustomImage from "./custom-image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row p-8 md:p-16 md:py-20 space-x-12 space-y-8 text-center md:text-left"
    >
      <CustomImage alt="" src="/discussion.png" width="540" height="409" />
      <div>
        <h2 className="font-bold text-5xl">About Us</h2>
        <p className="mt-4 text-lg text-gray-700">
          PT. Sudeci Exportir Indonesia is a trusted export company dedicated to
          connecting Indonesia’s finest natural resources with the global
          market. With a strong commitment to quality, sustainability, and
          professionalism, we work closely with local producers to deliver
          world-class commodities that meet the highest international standards.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Our vision is to empower local industries while bridging opportunities
          across continents providing trusted, high-quality products that
          strengthen international trade relationships
        </p>
      </div>
    </section>
  );
}
