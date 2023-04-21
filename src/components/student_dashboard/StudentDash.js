import React from "react";
import StudentDashCss from "./StudentDash.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StudentDash = () => {
  return (
    <div class={StudentDashCss.container}>
      <div class={StudentDashCss.nav}>
        <span>STUDENT</span>
      </div>

      <div class={StudentDashCss.semesterBox}>
        <span id={(StudentDashCss.semHead, StudentDashCss.center)}>
          Current-Sem
        </span>
        <span id={StudentDashCss.semHead}>VI</span>
      </div>

      <div class={StudentDashCss.front}>
        <div class={StudentDashCss.options}>
          <button>Dashboard</button>
          <button>Courses</button>
          <button>Quiz </button>
        </div>

        <div class={StudentDashCss.dashboard}>
          <div class={StudentDashCss.studentInfo}>
            <div class={StudentDashCss.profile}>
              <div class={StudentDashCss.profile1}>
                <div class={StudentDashCss.pic}>
                  <FontAwesomeIcon icon="fa-4x fa-sharp fa-solid fa-user" />
                </div>
              </div>
              <hr />
              <div class={StudentDashCss.profile2}>
                <div class={(StudentDashCss.stId, StudentDashCss.infoBox)}>
                  <span>Mohit Kumar</span>
                </div>
                <div class={(StudentDashCss.stId, StudentDashCss.infoBox)}>
                  2020KUEC2031
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDash;
