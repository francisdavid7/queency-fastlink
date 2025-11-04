import { Whydata } from "../../Data/WhyChooseUsData";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="section">
      <div className="text-center">
        <h1 className="heading">
          Why Choose <span>Queency FastLink?</span>
        </h1>
        <p className="paragraph mt-3">
          We provide world-class ICT training with a focus on practical skills,
          industry certifications, and career success.
        </p>
      </div>

      <div className="why grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-6">
        {Whydata.map((data, index) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="p-5 border rounded-lg"
          >
            <span className="batch p-4 block w-fit rounded-lg my-6">
              <i className={data.iconClassName}></i>
            </span>

            <h2 className="text-xl lg:text-[18px] font-bold mb-5">
              {data.title}
            </h2>
            <p className="paragraph">{data.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
