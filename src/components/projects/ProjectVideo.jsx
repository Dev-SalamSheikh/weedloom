import React from "react";

const ProjectVideo = () => {
  return (
    <div className="proejctVideo w-full">
      <div className="projectVideo__content grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="project__video">
          <iframe
            className="w-full h-56"
            src="https://www.youtube.com/embed/JRQei9hJekc"
            title="32Stitches & CHENDA, Harley Bird - Freedom [NCS Release]"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="project__video">
          <iframe
            className="w-full h-56"
            src="https://www.youtube.com/embed/EOLbOsMgwjY"
            title="Top 10 Most Popular Songs by NCS | Episode 1 Ncs 1M"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="project__video">
          <iframe
            className="w-full h-56"
            src="https://www.youtube.com/embed/hmEmT7lHfDY"
            title="top 10 most popular song by NCS | episode 6"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="project__video">
          <iframe
            className="w-full h-56"
            src="https://www.youtube.com/embed/zE2CNS8jfBg"
            title="top 10 most popular song by NCS | episode 7"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProjectVideo;
