import React from "react";
import RotatingText from "./TitreTournant";

export default function SectionDev({ t }) {
  return (
    <section className="SectionDev">
      <div className="SectionDev-container">
        <div className="title-wrapper">
          <h1>CREATIVE</h1>
          <RotatingText
            texts={["DEVELOPER", "DESIGNER"]}
            mainClassName="px-12 sm:px-12 md:px-12 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg stroke"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </div>
      </div>
    </section>
  );
}
