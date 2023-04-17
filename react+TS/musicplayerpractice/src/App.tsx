import React from "react";
import styled from "styled-components";
// import qala from "./assets/qala.mp3";
// import { useState } from "react";


const DivFlex = styled.div`
display: flex;
width: 140px;
justify-content: space-between;
`;

const InputPlay = styled.input`

`;




function App() {
  return (
    <div className="App">

      <DivFlex>
        <p>
          00:00
        </p>

        <p>
          00:00
        </p>
      </DivFlex>

      <InputPlay type="range"></InputPlay>

      {/* <input
        type="range"
        min="0"
        max="1000"
        // default="0"
        // value={seconds}
        className="timeline"
      // onChange={(e) => {
      //   sound.seek([e.target.value]);
      /> */}


    </div >
  );
}

export default App;
