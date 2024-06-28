import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-7">
      <div className="w-[40%]">
        <p className="mb-4 text-2xl font-bold">Contact me</p>
        <form className="flex flex-col gap-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-5 border rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-5 border rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade"
          />
          <textarea
            placeholder="Message"
            className="w-full p-5 border rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade"
            rows="10"
          ></textarea>
          <button className="flex flex-row items-center justify-center p-4 my-5 border rounded-2xl gap-x-5 border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade">
            <BsFillSendFill className="inline-block" />
            Send
          </button>
          <div className="flex justify-end my-5"></div>
        </form>
        <p className="mb-4 text-2xl font-bold">Also I am available on...</p>
        <div className="flex flex-wrap gap-x-5">
          <a
            href="https://www.linkedin.com/in/username"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center justify-center flex-grow p-4 border gap-x-2 rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade"
          >
            <FaLinkedin className="inline-block" />
            LinkedIn
          </a>
          <a
            href="https://www.github.com/username"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center justify-center flex-grow p-4 border gap-x-2 rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade"
          >
            <FaGithub className="inline-block" />
            GitHub
          </a>
          <a
            href="mailto:paul.shounak@outlook.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center justify-center flex-grow p-4 border gap-x-2 rounded-2xl border-neutral-900/10 dark:border-neutral-100/10 bg-frost-lighter-shade dark:bg-frost-darker-shade"
          >
            <IoMdMail className="inline-block" />
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
