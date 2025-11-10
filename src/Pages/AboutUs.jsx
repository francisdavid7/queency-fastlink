import { motion } from "framer-motion";
import ContactForm from "../Components/Forms/ContactForm";
import SiderImage from "../Components/SiderImage";

const AboutUs = () => {
  return (
    <section className="section">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="heading text-center mb-8"
      >
        <span>About</span> Us
      </motion.h1>
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0"
        >
          <SiderImage />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm text-slate-600 max-w-lg"
        >
          <div>
            <div>
              <h1 className="text-xl uppercase font-semibold text-slate-700">
                Who We Are
              </h1>
              <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]" />
            </div>
            <p className="mt-4">
              At Queency FastLink, we are passionate about empowering
              individuals and organizations with the digital skills needed to
              thrive in today’s technology-driven world. Our institution was
              founded with a clear mission — to bridge the gap between
              traditional education and the practical, hands-on skills demanded
              by the modern workplace.
            </p>
            <p className="mt-4">
              We specialize in delivering top-quality ICT training that
              transforms beginners into competent professionals ready to compete
              globally.
            </p>
          </div>

          <div className="mt-8">
            <div>
              <h1 className="text-xl uppercase font-semibold text-slate-700">
                Our Mission
              </h1>
              <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]" />
            </div>
            <p className="mt-4">
              Our mission is simple: to make digital education accessible,
              practical, and career-focused. We believe that everyone —
              regardless of age or background — deserves the opportunity to
              learn valuable technology skills that can open doors to
              employment, entrepreneurship, and innovation.
            </p>
          </div>

          <div className="mt-8">
            <div>
              <h1 className="text-xl uppercase font-semibold text-slate-700">
                What We Offer
              </h1>
              <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]" />
            </div>
            <p className="mt-4">
              We offer a wide range of industry-relevant courses, including Web
              Development, Graphic Design, Office Suite, UI/UX Design, Digital
              Printing, and Digital Branding. Each course is designed to provide
              students with real-world experience through project-based
              learning, mentorship, and exposure to the latest tools and trends
              in the tech industry.
            </p>
          </div>

          <div className="mt-8">
            <div>
              <h1 className="text-xl uppercase font-semibold text-slate-700">
                Our Approach
              </h1>
              <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]" />
            </div>

            <p className="mt-4">
              At Queency FastLink, learning is not just about theory — it’s
              about application. Our instructors combine classroom teaching with
              real-life projects, ensuring that every student gains the
              confidence to solve problems, create digital solutions, and think
              critically.
            </p>

            <p className="mt-4">
              Whether you’re a student seeking a new career path or a business
              professional aiming to upgrade your skills, our training programs
              are structured to help you reach your goals efficiently.
            </p>
          </div>

          <div className="mt-8">
            <div>
              <h1 className="text-xl uppercase font-semibold text-slate-700">
                Our vision
              </h1>
              <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]" />
            </div>

            <p className="mt-4">
              ATo become a leading ICT institution recognized for producing
              skilled, creative, and job-ready professionals who contribute
              meaningfully to the growth of the digital economy in Africa and
              beyond.
            </p>
          </div>

          <div className="mt-8">
            <div>
              <h1 className="text-xl uppercase font-semibold text-slate-700">
                Join Us
              </h1>
              <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]" />
            </div>

            <p className="mt-4 mb-8">
              Whether you’re just starting your journey into tech or looking to
              expand your professional capabilities, Queency FastLink is your
              trusted partner for digital transformation. Together, let’s build
              your future in technology — one skill at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
