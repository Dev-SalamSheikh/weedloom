import React from "react";
import SectionHeader from "../SectionHeader";
import InhouseCard from "./inhourse card/InhouseCard";

const Inhouse = () => {
  return (
    <section className="pt-16 pb-4">
      <div className="inhouse__container container mx-auto md:px-20 px-4">
        <SectionHeader text="Inhouse Services" />

        <div className="inhourse__content mt-8 flex flex-wrap md:flex-nowrap gap-4">
          <InhouseCard
            image="https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/genie_dweb.jpg"
            title="Genesis Service"
            subtitle="Plan your dream wedding in your budget"
          />
          <InhouseCard
            image="https://images.pexels.com/photos/11434577/pexels-photo-11434577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Service Two"
            subtitle="Plan your dream wedding in your budget"
          />
        </div>
        <div className="inhourse__content mt-8 flex flex-wrap md:flex-nowrap gap-4">
          <InhouseCard
            image="https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress&cs=tinysrgb&w=1600"
            title="Service Three"
            subtitle="Plan your dream wedding in your budget"
          />
          <InhouseCard
            image="https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?cs=srgb&dl=pexels-kumar-saurabh-1456613.jpg&fm=jpg"
            title="Service Four"
            subtitle="Plan your dream wedding in your budget"
          />
        </div>
      </div>
    </section>
  );
};

export default Inhouse;
