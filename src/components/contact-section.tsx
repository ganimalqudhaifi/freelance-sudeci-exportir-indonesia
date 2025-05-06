import CustomImage from "./custom-image";
import EmailCTA from "./email-cta";

export default function ContactSection() {
  return (
    <div
      className="relative flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-32 p-8 md:p-20 bg-cover bg-[url(/contact-background.png)] bg-center text-neutral-light after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-75 after:z-0"
      id="contact"
    >
      <div className="shrink-0 md:w-1/3 relative z-10 flex flex-col space-y-8">
        <h2 className="text-4xl font-bold">
          Need Consultation?
          <br />
          Feel free to contact us
          <br />
          We&apos;re here to help
        </h2>
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="flex flex-col space-y-4 mt-4">
            <div className="flex items-start space-x-4">
              <CustomImage
                src="/icons/icon-map.svg"
                width={24}
                height={24}
                alt="map icon"
                className="size-8"
              />
              <p>
                H. Inen Street No. 31, RW. 9, Lubang Buaya, Cipayung, East
                Jakarta 13810, Indonesia
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <CustomImage
                src="/icons/icon-phone.svg"
                width={24}
                height={24}
                alt="phone icon"
                className="size-6"
              />
              <p>+62 8XX-XXXX-XXXX</p>
            </div>
            <div className="flex items-start space-x-4">
              <CustomImage
                src="/icons/icon-envelope.svg"
                width={24}
                height={24}
                alt="envelope icon"
                className="size-6 mt-1"
              />
              <div className="flex flex-col">
                <EmailCTA
                  email="sudeciexportirindonesia@gmail.com"
                  label="sudeciexportirindonesia@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 w-full">
        <iframe
          className="w-full h-full min-h-72 border-0 rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7845730340196!2d106.90213417413213!3d-6.292019561582217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2a93835f0b3%3A0xe194a7d19084f282!2sJl.%20H.Inen%20No.31%2C%20RW.9%2C%20Lubang%20Buaya%2C%20Kec.%20Cipayung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013810!5e0!3m2!1sen!2sid!4v1745304814925!5m2!1sen!2sid"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
