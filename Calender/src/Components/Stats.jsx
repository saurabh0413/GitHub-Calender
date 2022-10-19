import React from "react";
import styled from "styled-components";
import "../App.css";
const Stats = () => {
  return (
    <div>
      <div style={{ width: "40%", margin: "auto" }}>
        <a href="https://github.com/saurabh0413">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=saurabh0413"
          />
        </a>
      </div>

      <div
        style={{
          width: "60%",
          height: "300px",
          display: "flex",
          margin: "auto",
        }}
      >
        <a href="https://github.com/saurabh0413">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=saurabh0413"
          />
        </a>
        <a href="https://github.com/saurabh0413">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=saurabh0413&count_private=true&show_icons=true"
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
