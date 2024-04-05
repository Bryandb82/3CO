"use client";
import BrandBanner from "@/components/BrandBanner";
import Link from "next/link";
import { React, useState } from "react";

function Home() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [name, setName] = useState("");
  const clickSound = new Audio("/AirSound.wav");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const insertReason = async (text: string) => {
    try {
      await clickSound.play();
      setReason(text);
    } catch (error) {
      console.error("Failed to play the sound:", error);
    }
  };

  return (
    <div className="Full-Page Normal">
      <BrandBanner />
      <div
        id="contact-container"
        className="flex flex-row h-full w-5/6 items-center bg-accent-1"
      >
        <div id="contact-left-container" className="flex flex-col w-1/3 h-full">
          <div
            id="contact-quick-resources"
            className="flex flex-col gap-8 h-full m-16"
          >
            <h1 className="font-bold text-3xl">Quick Reasons</h1>
            <h3
              className="text-xl cursor-pointer"
              onClick={() => insertReason("I need technical assitance")}
            >
              I need technical assistance
            </h3>
            <h3
              className="text-xl cursor-pointer"
              onClick={() => insertReason("I need a quote")}
            >
              I need a quote
            </h3>
            <h3
              className="text-xl cursor-pointer"
              onClick={() => insertReason("I've got a sales question")}
            >
              I&apos;ve got a sales question
            </h3>
            <h3
              className="text-xl cursor-pointer"
              onClick={() => insertReason("I don't know where to begin")}
            >
              I don&apos;t know where to begin
            </h3>
            <h3
              className="text-xl cursor-pointer"
              onClick={() => insertReason("I've got some other problem")}
            >
              I&apos;ve got some other problem
            </h3>
          </div>
        </div>
        <div id="contact-right-container" className="w-2/3 h-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-row h-full items-center"
          >
            <div
              id="contact-form-container"
              className="flex flex-col w-1/3 h-full"
            >
              <label htmlFor="email" className="Form-Label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="phone" className="Form-Label">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="name" className="Form-Label">
                Name:
              </label>
              <input
                type="name"
                id="name"
                value={name}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                type="submit"
                className="border-2 w-2/3 h-32 mt-16 rounded-lg shadow-xl"
              >
                Submit
              </button>
            </div>
            <div
              id="contact-reason-container"
              className="flex flex-col h-full w-2/3 m-16"
            >
              <label htmlFor="reason" className="Form-Label">
                Reason:
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="h-1/2 w-full"
                required
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
