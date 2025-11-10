import ContactForm from "../Components/Forms/ContactForm";
import SiderImage from "../Components/SiderImage";

const ContactUs = () => {
  return (
    <section className="py-20">
      <div className="section lg:flex lg:flex-row justify-center flex-col-reverse md:gap-20">
        <SiderImage />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
