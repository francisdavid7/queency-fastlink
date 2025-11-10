import ContactForm from "../Components/Forms/ContactForm";
import SiderImage from "../Components/SiderImage";

const ContactUs = () => {
  return (
    <section className="section lg:flex lg:flex-row justify-center flex-col-reverse md:gap-20">
      <SiderImage />
      <ContactForm />
    </section>
  );
};

export default ContactUs;
