"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/app/assets/logo-reveal/render199.webp";
import Link from "next/link";
import whatsappLogo from "@/app/assets/whatsapp.png";
import { sendEmail } from "@/services/email";
import greenTick from "@/app/assets/green_tick.png";
import loader from "@/app/assets/loader.svg";

type ContactUsProps = {};

const ContactUs: React.FC<ContactUsProps> = () => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: any) {
    event.preventDefault();

    if (event.target.email.value && event.target.content.value) {
      if (
        event.target.email.value.includes("@") &&
        event.target.email.value.includes(".")
      ) {
        setMessage("");
        setLoading(true);

        await sendEmail(event.target.email.value, event.target.content.value)
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            if (res === "message sent") {
              setSent(true);
              setLoading(false);
            } else setMessage("Please try again later");
          });
      } else {
        setMessage("Please enter a valid email");
      }
    } else {
      setMessage("Please fill up all the fields");
    }
  }

  return (
    <>
      <div className="w-screen h-screen flex sm:justify-evenly justify-center items-center bg-black">
        <div className="sm:w-[50vw] w-[80vw] font-averta z-30 flex flex-col items-center sm:justify-evenly ">
          <div className="sm:hidden font-averta z-30 flex flex-col items-center ">
            <Image className="w-[80vw]" src={Logo} alt="logo"></Image>
          </div>{" "}
          <div className="w-full flex flex-col  sm:items-center items-center sm:h-[50vh] justify-center">
            <p className="font-semibold text-5xl mb-[1rem] text-white text-center">
              Contact Us
            </p>
            <p className="font-semibold sm:text-2xl text-xl mb-[1rem] text-white">
              We are just a short text away
            </p>
            <form onSubmit={handleSubmit} className="flex sm:flex-col">
              <input
                className="sm:w-full mb-4 w-full h-[8rem] rounded-md shadow-md mr-3 pl-[1vw] font-bold text-black flex justify-center bg-slate-50"
                type="textarea"
                name="content"
                id="content"
                placeholder="How can we help?"
              />
              <input
                className="sm:w-full mb-4 w-full h-[3rem] rounded-md shadow-md mr-3 pl-[1vw] text-black font-bold flex justify-center bg-slate-50"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />

              {message && (
                <div className="text-white font-averta mt-[2vh]">{message}</div>
              )}
              <button
                type="submit"
                className="sm:w-full w-full flex justify-center items-center bg-black text-white border-white border-2 rounded h-[3rem] shadow-md cursor-pointer font-bold"
                disabled={loading || sent ? true : false}
              >
                {loading ? (
                  <Image
                    className="w-[2rem] h-[2rem] text-white"
                    src={loader}
                    alt="loader"
                  />
                ) : sent ? (
                  <>
                    Sent <Image height={25} src={greenTick} alt="green-tick" />
                  </>
                ) : (
                  "Submit"
                )}
              </button>
              <Link
                className="sm:w-full w-full bg-white text-black rounded h-[3rem] shadow-md cursor-pointer font-bold text-center flex items-center justify-center mt-4"
                href="https://wa.me/+8801914220035"
                type="submit"
                content=""
              >
                Contact on Whatsapp{"  "}&nbsp;
                <Image className="w-5" src={whatsappLogo} alt="whatsapp logo" />
              </Link>
            </form>
          </div>
        </div>{" "}
        <div className="hidden w-[50vw] font-averta z-30 sm:flex flex-col items-center ">
          <Image className="w-full" src={Logo} alt="logo"></Image>
        </div>{" "}
      </div>
    </>
  );
};
export default ContactUs;
