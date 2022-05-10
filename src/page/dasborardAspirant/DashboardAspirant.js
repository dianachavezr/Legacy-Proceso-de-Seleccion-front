import React, { useEffect } from "react";
import DoughtnutHtml from "../../components/doughnut/DoughtnutHtml";
import DoughtnutCss from "../../components/doughnut/DoughtnutCss";
import DoughtnutJavascript from "../../components/doughnut/DoughtnutJavascript";
import DoughtnutPython from "../../components/doughnut/DoughtnutPython";
import NotProfile from "../../components/notProfile/NotProfile";
import { useSelector } from "react-redux";
import './DashboardAspirant.css'


function DashboardAspirant() {
  const { profile } = useSelector((state) => state.sololearn);

  return (
    <div className="dash">
      <div className="dash__content d-flex justify-content-between">
        <span className="upperCase bold">Dashboard Aspirante</span>
        <div className="box__content">
          <span className="text-crumbs bold-500">Programate</span>
          <i className="fas fa-chevron-right subtitle" />
          <span className="text-crumbs">Dashboard</span>
        </div>
      </div>

      {profile.length ? <><div className="status d-flex justify-content-between align-items-center mb-3 flex-wrap">
        <div className="logo-sololearn">
          <img
            src="https://i.ibb.co/MMvzd4z/sololearn-logo.png"
            alt="sololearn-logo"
            border="0"
            width="400px"
          />
        </div>

        <div className="status__container d-flex flex-column">
          <em>Estado del aspirante:</em>
          <p className="text-sololearn">
            <span className="bold-500">
              Perfil: {profile.map((item) => item.userFullName)}
            </span>
          </p>
        </div>
      </div>
      <div className="doughtnut d-flex flex-wrap justify-content-around gap-4">
        <div className="doughtnut__container">
          <div className="doughtnut__container-title d-flex justify-content-between align-items-center gap-4">
            <span className="text-lenguages">Html</span>
            <i className="fab fa-html5 icon-soloLearn" />
          </div>
          <div className="doughtnut__container-graph">
            {profile.map((item) => (
              <DoughtnutHtml key={item.userFullName} item={item} />
            ))}
          </div>
        </div>
        <div className="doughtnut__container">
          <div className="doughtnut__container-title d-flex justify-content-between align-items-center">
            <span className="text-lenguages">css</span>
            <i className="fab fa-css3-alt icon-soloLearn" />
          </div>
          <div className="doughtnut__container-graph">
            {profile.map((item) => (
              <DoughtnutCss key={item.userFullName} item={item} />
            ))}
          </div>
        </div>
        <div className="doughtnut__container">
          <div className="doughtnut__container">
            <div className="doughtnut__container-title d-flex justify-content-between align-items-center">
              <span className="text-lenguages">Javascript</span>
              <i className="fab fa-js icon-soloLearn" />
            </div>
            <div className="doughtnut__container-graph">
              {profile.map((item) => (
                <DoughtnutJavascript key={item.userFullName} item={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="doughtnut__container">
          <div className="doughtnut__container-title d-flex justify-content-between align-items-center">
            <span className="text-lenguages">Python</span>
            <i className="fab fa-python icon-soloLearn" />
          </div>
          <div className="doughtnut__container-graph">
            {profile.map((item) => (
              <DoughtnutPython key={item.userFullName} item={item} />
            ))}
          </div>
        </div>
      </div> </> : <NotProfile/>}
    </div>
  );
}

export default DashboardAspirant;
