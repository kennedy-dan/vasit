import React from "react";

const Stories = ({ allStory }) => {
  console.log(allStory);
  return (
    <div className="md:container absolute md:mx-auto mx-30 py-8  pt-20 grid md:grid-cols-3 justify-center">
      {allStory.map((story) => (
        <div className="mx-20 my-10" key={story.id}>
          <img
            src={story.img}
            className="w-[130px] h-[130px] rounded-full my-4 align-middle"
            alt="profile"
          />
          <p className="text-left py-2 text-lg font-semibold">
            {story.firstName + " " + story.lastName}
          </p>
          <div className="flex mb-5">
            <p className="text-left">in {story.location}</p>
            <div className="border rounded bg-[#EEF8FF] px-2 y-4 ml-4">
              <p className="text-blue-500 text-left">{story.value}</p>
            </div>
          </div>
          <p className="text-left">{story.story}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
