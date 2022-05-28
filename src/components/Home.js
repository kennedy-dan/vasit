import React, { useState } from "react";
import Testimonial from "../assets/Testimonial_image1.png";
import black from "../assets/black-smiling.png";
import { PaperClipIcon, XIcon } from "@heroicons/react/solid";
import under from "../assets/SVG/Asset 4.svg";
const Home = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  onChange,
  setselectedFile,
  selectedFile,
  img,
  value,
  handleChange,
  handleStoryChange,
  story,
  setAllStories,
  allStory,
  location,
  handleLocationChange,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);
  const handleSubmit = async () => {
    setShowModal(false);
    await setAllStories([
      ...allStory,
      { firstName, lastName, img, story, value, location, id:Math.round() * 1000 },
    ]);
    console.log(allStory);
    setShowNewModal(true);
  };

  const handlenewSubmit = () => {
    setShowNewModal(false);

  }

  const newModal = (
    <div
      className="fixed z-10 inset-0 overflow-y-auto "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-1/2">
          <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start"></div>
          </div>
          <div className=" px-4  sm:px-6  sm:flex-row-reverse  modal-size">
            <div className="flex justify-center"> 
                <div className=" w-20 flex justify-center h-20 rounded-full bg-[#FFF8F5] ">

                </div>
            </div>
            <p className="py-1 font-bold text-center">
              Thank you for sharing your story!
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex py-7 justify-center">
              <button
                type="button"
                onClick={handlenewSubmit}
                className="mt-3 bg-[#FF5C00]  inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-8 py-3 bg-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm update-prod-btn"
              >
                <p className="text-white">Close</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const modal = (
    <div
      className="fixed z-10 inset-0 overflow-y-auto "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-1/2">
          <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start"></div>
          </div>
          <div className=" px-4  sm:px-6  sm:flex-row-reverse  modal-size">
            <p className="py-1 font-bold text-center">
              Share your amazing story!
            </p>
            <div>
              <form>
                <label htmlFor="customFile">
                  <div className="flex justify-between border rounded py-2 px-2 ">
                    {selectedFile ? <p>{selectedFile}</p> : <p>Choose Image</p>}
                    {selectedFile? <XIcon className="h5 w-5" onClick={(e) => setselectedFile(null)}/> : <PaperClipIcon className="h5 w-5"/>}

                  </div>
                </label>
                <input
                  type="file"
                  name="avatar"
                  className="custom-file-input"
                  id="customFile"
                  onChange={onChange}
                  style={{ display: "none" }}
                />
              </form>
            </div>
            <div className="flex justify-between mt-5">
              <div>
                <p>First Name</p>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded w-[230px] py-2"
                />
              </div>
              <div>
                <p>Last Name</p>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border rounded w-[230px] py-2"
                />
              </div>
            </div>
            <div className="mt-5">
              <p>Share Your story</p>
              <textarea
                value={story}
                onChange={handleStoryChange}
                type=""
                className="border w-full h-full pb-20 rounded"
              />
            </div>
            <div className="flex justify-between">
              <p>What did you interact with Vasiti as?</p>
              <form>
                <input
                  type="radio"
                  value="customer"
                  id="customer"
                  onChange={handleChange}
                  name="value"
                  className="mr-1"
                />
                <label htmlFor="customer" className="mr-3">customer</label>

                <input
                  type="radio"
                  value="vendor"
                  className="mr-1"

                  id="vendor"
                  onChange={handleChange}
                  name="value"
                />
                <label htmlFor="vendor">vendor</label>
              </form>
            </div>
            <div className="mt-5">
              <p>City or Higher Institution (for Students)</p>
              <input
                value={location}
                onChange={handleLocationChange}
                className="border w-full h-full pb-10 rounded mt-2"
              />
            </div>

            <div className="flex py-7 justify-end">
              <button
                type="button"
                onClick={handleSubmit}
                className="mt-3 bg-[#FF5C00]  inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-4 bg-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm update-prod-btn"
              >
                <p className="text-white">Share Your Story!</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div >
      <div className="xl:flex justify-between ml-20  h-screen items-center z-0">
        <div className="block w-1/2 pt-10 ">
          <h3 className="text-left xl:text-7xl text-4xl font-bold">
            Amazing Experiences from Our Wonderful Customers
          </h3>
          <p className="pt-8 text-left">
            Here is what customers and vendors are saying about <br /> us, you
            can share your stories with us too.
          </p>
        </div>
        <div className="w-1/2">
          <div className="xl:w-[651px] xl:h-[651px] w-400 h-400 bg-[#FFF8F5] rounded-full z-[-1] left-[662px] top-[209px] xl:absolute">
            <img
              src={Testimonial}
              className="xl:h-[581px] h-300"
              alt="hero-img"
            />
          </div>
        </div>
      </div>
      <div className="bg-black xl:mt-[-20px] xl:top-[20] xl:z-[1]">
        <div className="xl:flex justify-between ml-20 py-10 z-10">
          <div className="pr-5">
            <div className="w-[501px] h-[501px] bg-[#2E2E2E] rounded-full">
              <img src={black} className="h-[501px]" alt="hero-img" />
            </div>
          </div>
          <div className="mx-40 pt-10">
            <p className="text-white text-lg text-left">
              Tolu & Joy’s Experience
            </p>
            <div className="border border-white w-fit py-1 px-3 rounded mt-3">
              <p className="text-white text-left">customer</p>
            </div>
            <p className="text-white text-left mt-10">
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <p
              className="text-white text-left mt-10"
              onClick={() => setShowModal(true)}
            >
              SHARE YOUR OWN STORY
              <img src={under} className="w-1/2" alt="story" />
            </p>
          </div>
        </div>
        {showModal ? modal : null}
        {showNewModal ? newModal : null}
      </div>
    </div>
  );
};

export default Home;
