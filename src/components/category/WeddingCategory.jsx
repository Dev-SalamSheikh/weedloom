import React from "react";
import WcategorySingle from "./category card/WcategorySingle";
import SectionHeader from "../SectionHeader";

const WeddingCategory = () => {
  return (
    <section className="lg:py-14">
      <div className="container mx-auto md:px-20 px-4">
        <SectionHeader text="Weeding Category" />
        <div className="wedding__content flex justify-between flex-wrap md:flex-nowrap gap-3 mt-8">
          <WcategorySingle
            bgColor="#D8DFFC"
            title="Venues"
            subtitle="Banquet Halls, Lawns / Farmhouses, Reso"
            image="https://images.pexels.com/photos/6544769/pexels-photo-6544769.jpeg?auto=compress&cs=tinysrgb&w=1600"
            leftLink1="View All Venues left"
            leftLink2="View All Venues left"
            leftLink3="View All Venues left"
            leftLink4="View All Venues left"
            rightLink1="View All Venues right"
            rightLink2="View All Venues right"
            rightLink3="View All Venues right"
            rightLink4="View All Venues right"
          />
          <WcategorySingle
            bgColor="#F4D5C2"
            title="Photography"
            subtitle="Banquet Halls, Lawns / Farmhouses, Reso"
            image="https://images.pexels.com/photos/10281207/pexels-photo-10281207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            leftLink1="View All Venues left"
            leftLink2="View All Venues left"
            leftLink3="View All Venues left"
            leftLink4="View All Venues left"
            rightLink1="View All Venues right"
            rightLink2="View All Venues right"
            rightLink3="View All Venues right"
            rightLink4="View All Venues right"
          />
        </div>
        <div className="wedding__content flex justify-between flex-wrap md:flex-nowrap gap-3 mt-8">
          <WcategorySingle
            bgColor="#DFB2AD"
            title="Makeup"
            subtitle="Banquet Halls, Lawns / Farmhouses, Reso"
            image="https://images.pexels.com/photos/6544769/pexels-photo-6544769.jpeg?auto=compress&cs=tinysrgb&w=1600"
            leftLink1="View All Venues left"
            leftLink2="View All Venues left"
            leftLink3="View All Venues left"
            leftLink4="View All Venues left"
            rightLink1="View All Venues right"
            rightLink2="View All Venues right"
            rightLink3="View All Venues right"
            rightLink4="View All Venues right"
          />
          <WcategorySingle
            bgColor="#CFCDB8"
            title="Bridal Wear"
            subtitle="Banquet Halls, Lawns / Farmhouses, Reso"
            image="https://images.pexels.com/photos/10281207/pexels-photo-10281207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            leftLink1="View All Venues left"
            leftLink2="View All Venues left"
            leftLink3="View All Venues left"
            leftLink4="View All Venues left"
            rightLink1="View All Venues right"
            rightLink2="View All Venues right"
            rightLink3="View All Venues right"
            rightLink4="View All Venues right"
          />
        </div>
        <div className="wedding__content flex justify-between flex-wrap md:flex-nowrap gap-3 mt-8">
          <WcategorySingle
            bgColor="#DCF7F7"
            title="Groome Wear"
            subtitle="Banquet Halls, Lawns / Farmhouses, Reso"
            image="https://images.pexels.com/photos/6544769/pexels-photo-6544769.jpeg?auto=compress&cs=tinysrgb&w=1600"
            leftLink1="View All Venues left"
            leftLink2="View All Venues left"
            leftLink3="View All Venues left"
            leftLink4="View All Venues left"
            rightLink1="View All Venues right"
            rightLink2="View All Venues right"
            rightLink3="View All Venues right"
            rightLink4="View All Venues right"
          />
          <WcategorySingle
            bgColor="#E5D3BD"
            title="Mehndi"
            subtitle="Banquet Halls, Lawns / Farmhouses, Reso"
            image="https://images.pexels.com/photos/10281207/pexels-photo-10281207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            leftLink1="View All Venues left"
            leftLink2="View All Venues left"
            leftLink3="View All Venues left"
            leftLink4="View All Venues left"
            rightLink1="View All Venues right"
            rightLink2="View All Venues right"
            rightLink3="View All Venues right"
            rightLink4="View All Venues right"
          />
        </div>
      </div>
    </section>
  );
};

export default WeddingCategory;
