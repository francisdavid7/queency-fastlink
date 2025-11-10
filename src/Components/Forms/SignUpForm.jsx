import { useState } from "react";
import { motion } from "framer-motion";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    course: "",
    educationLevel: "",
    learningMode: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration successful! 🎓");
  };

  return (
    <section className="section">
      <div className="bg-color max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Student Registration Form
        </h2>

        <motion.form
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-color"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-color"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-color"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-color"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Gender</label>
            <select
              name="gender"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-color"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-color"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Education Level
            </label>
            <select
              name="educationLevel"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-color"
            >
              <option value="">Select</option>
              <option>High School</option>
              <option>Diploma</option>
              <option>Bachelor’s Degree</option>
              <option>Master’s Degree</option>
              <option>Other</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium">
              Residential Address
            </label>
            <input
              type="text"
              name="address"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-color"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Course of Interest
            </label>
            <select
              name="course"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-color"
            >
              <option value="">Select Course</option>
              <option>Web Development</option>
              <option>Graphic Design</option>
              <option>Office Suite</option>
              <option>UI/UX Design</option>
              <option>Digital Printing</option>
              <option>Digital Branding</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Learning Mode
            </label>
            <select
              name="learningMode"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-color"
            >
              <option value="">Select Mode</option>
              <option>On-Campus</option>
              <option>Online</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-color"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-color"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-300"
            >
              Register Now
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default SignupForm;
