
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define the schema for the form
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(500, "Message must not exceed 500 characters"),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormInputs) => {
    console.log(data);
    alert("Message sent successfully! (Check console for data)");
    reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Get In Touch</h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="bg-gray-dark rounded-lg p-8 shadow-lg" variants={itemVariants}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("name")}
                    className="w-full p-3 bg-black rounded-md text-white border border-gray-medium focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    {...register("email")}
                    className="w-full p-3 bg-black rounded-md text-white border border-gray-medium focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  {...register("message")}
                  className="w-full p-3 bg-black rounded-md text-white border border-gray-medium focus:outline-none focus:ring-2 focus:ring-white"
                  rows={5}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-black md:py-4 md:text-lg md:px-10 transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
          <motion.div className="text-center mt-8 text-gray-light" variants={itemVariants}>
            <p className="mb-2">Or reach out to me directly:</p>
            <div className="flex justify-center items-center space-x-6">
              <a href="mailto:eudesmails@gmail.com" className="flex items-center gap-2 text-white hover:text-gray-light transition-colors">
                <FaEnvelope />
                <span>eudesmails@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-white">
                <FaPhone />
                <span>+229 40 28 40 32</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
