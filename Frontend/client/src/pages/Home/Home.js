import React from "react";
import Banner from "../../components/Banner/HomeBanner";
import Market from "../../components/Market/Market";
import Featured from "../../components/Featured/Featured";

function Home() {
  return (
    <div>
      <Banner />
      <Market />
      <Featured />
    </div>
  );
}

export default Home;
