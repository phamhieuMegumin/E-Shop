import React from "react";
import "./DailyUpdate.css";
import DailyUpdateItem from "./DailyUpdateItem";
function DailyUpdate() {
  return (
    <div className="daily-update">
      <div className="daily-update-container">
        <div className="daily-update-title">
          <div className="feature-title">
            <div>
              <h4>Daily updated</h4>
              <h1>LATEST ON BLOGS</h1>
              <p>
                Open sans 14px Lorem ipsum dolor sit amet, consectetur
                adipisicing elit,eiusmod tempor incididunt aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="daily-update-list">
          <div>
            <div className="item-update-left">
              <DailyUpdateItem />
            </div>
            <div className="item-update-right">
              <DailyUpdateItem />
              <DailyUpdateItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyUpdate;
