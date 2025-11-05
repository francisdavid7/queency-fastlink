// import "../App.css";
import aboutUsImg from "../assets/Images/about-us.jpg";

const AboutUs = () => {
  return (
    <section className="section">
      <h1 className="heading text-center mb-8">
        <span>About</span> Us
      </h1>
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
          <img
            className="max-w-md w-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
            alt="Developer Community"
          />
          <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
            <div className="flex -space-x-4 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="member"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="member"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                alt="member"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
              />
              <div className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                50+
              </div>
            </div>
            <p className="text-sm font-medium text-slate-800">
              Join our developer community
            </p>
          </div>
        </div>

        <div className="text-sm text-slate-600 max-w-lg">
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
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
