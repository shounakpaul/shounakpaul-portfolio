import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-7">
      <div className="xl:w-[35%] md:w-[70%] lg:w-[50%] w-[95%]">
        <p className="mb-4 text-2xl font-bold">Contact me</p>
        <form
          className="flex flex-col gap-y-3"
          action="mailto:paul.shounak@outlook.com"
          method="post"
          encType="text/plain"
        >
          <input
            type="text"
            placeholder="Name"
            name="Name"
            className="w-full p-5 border rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade"
          />
          <input
            type="email"
            placeholder="Email"
            name="E-Mail ID"
            className="w-full p-5 border rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade"
          />
          <textarea
            placeholder="Message"
            name="Message"
            className="w-full p-5 border resize-none rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade"
            rows="10"
          ></textarea>
          <button className="flex flex-row items-center justify-center p-4 my-5 border rounded-2xl gap-x-5 border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade">
            <BsFillSendFill className="inline-block" />
            Send
          </button>
          <div className="flex justify-end my-5"></div>
        </form>
        <p className="mb-4 text-2xl font-bold">Also I am available on...</p>
        <div className="flex flex-wrap gap-5">
          <motion.a
            whileHover={{ opacity: 0.7 }}
            href="https://www.linkedin.com/in/paulshounak"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center justify-center flex-grow p-4 border gap-x-2 rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade"
          >
            <FaLinkedin className="inline-block" />
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ opacity: 0.7 }}
            href="https://www.github.com/shounakpaul"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center justify-center flex-grow p-4 border gap-x-2 rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade"
          >
            <FaGithub className="inline-block" />
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ opacity: 0.7 }}
            href="mailto:paul.shounak@outlook.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center justify-center flex-grow p-4 border gap-x-2 rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade"
          >
            <IoMdMail className="inline-block" />
            Email
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
