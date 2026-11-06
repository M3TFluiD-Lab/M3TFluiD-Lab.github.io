
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const fieldClass =
  "w-full rounded-lg border border-white/10 bg-[#101C18] px-4 py-2.5 text-sm text-white placeholder:text-[#82968D] outline-none transition-colors focus:border-[#46C99C] focus:ring-1 focus:ring-[#46C99C]/30";

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  name,
  type = "text",
  required = false,
}) => (
  <label className="flex flex-col gap-2">
    <span className="text-sm font-medium text-[#D6E8DF]">
      {label}
    </span>

    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={fieldClass}
      required={required}
    />
  </label>
);

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setFeedback({ type: "", message: "" });

    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !subject) {
      setFeedback({
        type: "error",
        message: "Please complete all required fields.",
      });
      return;
    }

    const validEmail =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email);

    if (!validEmail) {
      setFeedback({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_fjx21y5",
        "template_ofeh4v2",
        {
          from_name: name,
          from_email: email,
          subject,
          message,
          to_name: "Navid Goudarzi",
          to_email: "navidgoudarz@gmail.com",
        },
        "-7njvFb28jaN71_lg"
      );

      setFeedback({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setFeedback({
        type: "error",
        message:
          "Your message could not be sent. Please try again or contact us by email.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full pt-14 text-white">
      <div className="w-full">
        <motion.div variants={slideIn("left", "tween", 0.1, 0.7)}>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Get in Touch
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#B9CBC3]">
            Propose a research collaboration, ask about graduate opportunities, or start a conversation with our lab.
          </p>
        </motion.div>

        <div className="mt-9 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 0.8)}
            className="w-full max-w-[580px] rounded-2xl border border-white/10 bg-[#0D1713] p-5 sm:p-7"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <InputField
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              <InputField
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />

              <InputField
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is your message about?"
                required
              />

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#D6E8DF]">
                  Your Message
                </span>

                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`${fieldClass} resize-y`}
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-fit rounded-lg bg-[#28B887] px-7 py-2.5 text-sm font-bold text-[#06120D] transition-colors hover:bg-[#55D9AD] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {feedback.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${
                    feedback.type === "success"
                      ? "text-[#75E2B5]"
                      : "text-red-400"
                  }`}
                >
                  {feedback.message}
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 0.8)}
            className="flex w-full items-center justify-center"
          >
            <div className="w-full max-w-lg">
              <div className="relative h-[280px] w-full sm:h-[350px] lg:h-[390px]">
                <EarthCanvas />
              </div>

             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(Contact, "contact");
