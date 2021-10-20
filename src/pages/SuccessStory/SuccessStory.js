import React, { useEffect, useState } from "react";
import Story from "../Story/Story";

const SuccessStory = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const url = `https://api.npoint.io/ac14ca4491d823f4efe8`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div>
      {/* Our Success Story  */}
      <div className="services text-center">
        <h2 className="pt-5">Our Success Story</h2>
        <div className="mx-auto border border-success w-75 m-5"></div>
        <div>
          <div className="row row-cols-1 row-cols-md-2 g-4 mb-5 container mx-auto">
            {stories.map((story) => (
              <Story key={story.id} story={story}></Story>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
