import React, { useState } from "react";
import ContactLeft from "./ContactLeft";


const Contact = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
  
    // ========== Email Validation start here ==============
    const emailValidation = () => {
      return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };
    // ========== Email Validation end here ================
  
    const handleSend = (e) => {
      e.preventDefault();
      if (username === "") {
        setErrMsg("Username is required!");
      } else if (phoneNumber === "") {
        setErrMsg("Phone number is required!");
      } else if (email === "") {
        setErrMsg("Please give your Email!");
      } else if (!emailValidation(email)) {
        setErrMsg("Give a valid Email!");
      } else if (subject === "") {
        setErrMsg("Please give your Subject!");
      } else if (message === "") {
        setErrMsg("Message is required!");
      } else {
        setSuccessMsg(
          `Thank you dear ${username}, Your Messages has been sent Successfully!`
        );
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    };
  return (
    <>
       <div className="row">
      <div className="section-title text-2xl font-bold">
          <h3>Contact</h3>
      </div>
  </div>
      {/* <div> */}
      <div className="row ">
        <div className="contact-content w-full h-auto flex flex-col gap-5 lg:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[--bg-black-100] to-[--bg-black-900] group hover:bg-gradient-to-b hover:from-[--bg-black-50] hover:to-[--bg-black-900] transition-colors duration-100 group flex flex-col gap-8 p-4 lgl:p-8 rounded-lg text-[--text-black-900]">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-4">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[--bg-black-100] to-[ --bg-black-900] hover:bg-gradient-to-b hover:from-[ --bg-black-50] hover:to-[ --bg-black-900] transition-colors duration-100 group text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[--bg-black-100] to-[ --bg-black-900] hover:bg-gradient-to-b hover:from-[ --bg-black-50] hover:to- --bg-black-900] transition-colors duration-100 group text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4 ">
                  <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-[#ec1839]"
                    } w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 shadow-inner  bg-gradient-to-r from-[--bg-black-100] to-[ --bg-black-900] text-[ --text-black-900] px-4 active:outline-none focus-visible:outline-[#ec1839] outline-none focus-visible:border-b-transparent duration-300`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-[#ec1839]"
                    } w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 shadow-inner  bg-gradient-to-r from-[--bg-black-100] to-[ --bg-black-900] text-[ --text-black-900] px-4 active:outline-none focus-visible:outline-[#ec1839] outline-none focus-visible:border-b-transparent duration-300`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-[#ec1839]"
                  } w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 shadow-inner  bg-gradient-to-r from-[--bg-black-100] to-[ --bg-black-900] text-[ --text-black-900] px-4 active:outline-none focus-visible:outline-[#ec1839] outline-none focus-visible:border-b-transparent duration-300`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Please give your Subject!" &&
                    "outline-[#ec1839]"
                  } w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 shadow-inner  bg-gradient-to-r from-[--bg-black-100] to-[ --bg-black-900] text-[ --text-black-900] px-4 active:outline-none focus-visible:outline-[#ec1839] outline-none focus-visible:border-b-transparent duration-300`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-[#ec1839]"
                  } w-full rounded-lg border-b-[1px] border-b-gray-600 shadow-inner  bg-gradient-to-r from-[--bg-black-100] to-[ --bg-black-900] text-[ --text-black-900] px-4 active:outline-none focus-visible:outline-[#ec1839] outline-none focus-visible:border-b-transparent duration-300 resize-none
                }`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12  border-b-[1px] border-b-gray-600 shadow-inner bg-gradient-to-r from-[ --bg-black-100] to-[ --bg-black-900] text-[ --text-black-900] rounded-lg text-base tracking-wider uppercase hover:from-[--bg-black-50] hover:to-[ --bg-black-900] active:outline-none focus-visible:outline-[#ec1839] outline-none focus-visible:border-b-transparent duration-300 font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
   </>
  );
};

export default Contact;
