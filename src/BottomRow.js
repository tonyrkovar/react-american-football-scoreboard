import React, { useState } from "react";
import "./App.css";



const BottomRow = () => {
  const [down, setDown] = useState(1);
  const [yards, setYards] = useState(1);
  const [quarter, setQuarter] = useState(1);
  const [ballOn, setBallON] = useState('');

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        {/* <button onClick={() => {
          if(down < 4){
            setDown(down + 1);
          }else{
            setDown(0)
          }
        }}>New Down</button> */}
        <button onClick= {() => down < 4 ? setDown(down+1) : setDown(1)}>New Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{yards}</div>
        <button onClick= {() => setYards(yards+1)}>+</button>
        <button onClick= {() => setYards(yards-1)}>-</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
        <form>
          <input type='text'></input>
          <input type="submit"></input>
        </form>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick= {() => quarter < 4 ? setQuarter(quarter+1) : setQuarter(1)}>+</button>
      </div>
    </div>
  );
};

export default BottomRow;
