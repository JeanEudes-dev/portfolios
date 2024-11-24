"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

type FormData = {
    from_name: string;
    email: string;
    message: string;
};

const validationRules = {
    from_name: {
        required: "Name is required",
    },
    email: {
        required: "Email is required",
        pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Please enter a valid email address",
        },
    },
    message: {
        required: "Message is required",
        minLength: {
            value: 10,
            message: "Message must be at least 10 characters long",
        },
    },
};

const ContactForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<string | null>(null);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setFormStatus(null); // Reset status on new submission

        try {
            // EmailJS API call
            await emailjs.send(
                "service_5fdwchv", // Replace with your Service ID
                "template_vjc7p2j", // Replace with your Template ID
                data,
                "aYvQyuIUS0y_IshgK"
            );
            setFormStatus("Thank you for reaching out! I will get back to you soon.");
            reset(); // Reset form on success
        } catch (error) {
            setFormStatus("Something went wrong. Please try again later.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact-section py-16 bg-gray-900 text-white">
            <h2 className="text-4xl text-center mb-8">Contact Me</h2>
            <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            className={`w-full p-3 rounded-lg text-black ${errors.from_name ? "border-red-500" : "border-gray-300"}`}
                            {...register("from_name", validationRules.from_name)}
                            placeholder="Your Name"
                        />
                        {errors.from_name && <p className="text-red-500 text-sm">{errors.from_name.message}</p>}
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={`w-full p-3 rounded-lg text-black ${errors.email ? "border-red-500" : "border-gray-300"}`}
                            {...register("email", validationRules.email)}
                            placeholder="Your Email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className={`w-full p-3 rounded-lg text-black ${errors.message ? "border-red-500" : "border-gray-300"}`}
                            {...register("message", validationRules.message)}
                            placeholder="Your Message"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className={`w-full py-3 rounded-lg bg-blue-600 text-white font-semibold mt-4 transition-transform hover:scale-105 ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {isSubmitting ? <FaSpinner className="animate-spin mr-2" /> : "Send Message"}
                    </motion.button>
                </form>

                {/* Form Submission Feedback */}
                {formStatus && (
                    <div className={`mt-4 text-center text-lg ${formStatus.includes("error") ? "text-red-500" : "text-green-500"}`}>
                        {formStatus}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContactForm;
