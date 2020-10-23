import React from "react";
import "./DailyUpdate.css";
import DailyUpdateItem from "./DailyUpdateItem";
import { DATA_UPDATE } from "../../constants/data";
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
              <DailyUpdateItem data={DATA_UPDATE[0]} />
            </div>
            <div className="item-update-right">
              <DailyUpdateItem data={DATA_UPDATE[1]} />
              <DailyUpdateItem data={DATA_UPDATE[2]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyUpdate;
