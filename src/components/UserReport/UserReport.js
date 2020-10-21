import React from "react";
import UserReportSlide from "./UserReportSlide";
import "./UserReport.css";
function UserReport() {
  return (
    <div>
      <div className="user-report-container">
        <div className="user-slider">
          <UserReportSlide />
        </div>
      </div>
    </div>
  );
}

export default UserReport;
