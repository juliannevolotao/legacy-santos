import React, { useState } from "react";
// import Plyr from "react-plyr";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
const Camp = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}
    >
        <img loading="lazy" style={{width: "100%", height: "auto"}} src="/images/camp/jornal-pt.jpg" alt="Legacy Camp" />

    </div>
  );
};
export default Camp;
