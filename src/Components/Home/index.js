import React from "react";
import Featured from "./Featured";
import Matches from "./matches";
import MeetsPlayer from "./meetPlayers";
import Promotion from "./promotion";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
      <MeetsPlayer />
      <Promotion />
    </div>
  );
};

export default Home;
