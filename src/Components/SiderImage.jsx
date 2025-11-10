import { motion } from "framer-motion";

const SiderImage = () => {
  return (
    <div className="relative">
      <motion.img
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-md w-full object-cover rounded-2xl block md:my-0 my-10"
        src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
        alt="Developer Community"
      />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-color flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl"
      >
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
      </motion.div>
    </div>
  );
};

export default SiderImage;
