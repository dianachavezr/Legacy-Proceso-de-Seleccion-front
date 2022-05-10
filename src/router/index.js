import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Parameterization from "../components/inscription/Parameterization";
import MotivationLetter from "../components/inscription/MotivationLetterTable";
import Aspirants from "../page/aspirants/Aspirants";
import Convocatory from "../page/convocatory/Convocatory";
import DashboardAspirant from "../page/dasborardAspirant/DashboardAspirant";
import DashboardAdmin from "../page/dashboardAdmin/DashboardAdmin";
import AdministerTechnicalTest from "../page/technicalTest/AdministerTechnicalTest";
import AddTechTest from "../page/technicalTest/AddTechTest";
import QualifyTechnicalTest from "../page/Qualification/QualifyTechnicalTest";
import Results from "../page/Results/Results";
import InterviewAspirant from "../page/interviewAspirant/InterviewAspirant";
import ProofAspirant from "../page/proofAspirant/ProofAspirant";
import InterviewDay from "../page/citation/InterviewDay";
import NewCohort from "../components/newConvocatory/NewCohort ";
import LoginFull from "../components/auth/LoginFull";
import WaitingList from "../page/waitingList/WaitingList";
import { useDispatch, useSelector } from "react-redux";
import Citations from "../page/citations/Citations";
import NewCitation from "../components/citation/newCitation/NewCitation";
import InterviewDays from "../page/interviewDays/InterviewDays";
import Footer from "../components/footer/Footer";
import { getData } from "../actions/sololearnProfile";
import SelectionResults from "../page/selection/SelectionResults";
import Verify from "../components/verify/Verify";
import RegisterAdmin from "../components/register/RegisterAdmin";
import WhatsAppButton from "../components/Whatsapp Button/whatsAppButton";
import Register from "../components/register/Register";
import ListOfUsers from "../components/allUsers/ListOfUsers";
import AspirantConvocatorys from "../page/Aspirant Convocatory/AspirantConvocatory";

import './style.css'
import QualifyAssessment from "../page/Qualification/QualifyAssessment";
import QualifySololearn from "../page/Qualification/QualifySoloLearn";
import QualifyMotivationLetter from "../page/Qualification/QualifyMotivationLetter";
import QualifyInterview from "../page/Qualification/QualifyInterview";
import ConvocatoryAspirants from "../page/convocatory/ConvocaryAspirants";
import NavBarIndex from "../components/navBarIndex/NavBarIndex";
import Index from "../components/stepForm";



const App = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(auth.user._id));
  }, [dispatch, auth]);

  const { isLogged, isAdmin } = auth;
  const { pathname } = useLocation();

  return (
    <>
      {/* {pathname !== "/login" && <Header user={user} adminstate={adminstate} />} */}
      {pathname !== "/" && pathname !== "/register" && pathname !== '/verify' && <Header /> || <NavBarIndex/>}

        {/* {pathname !== "/login" && <Nav user={user} adminstate={adminstate} />} */}
        {pathname !== "/" && pathname !== "/register" && pathname !== '/verify' && <Nav />}

        <Switch>
          
          <Route exact path="/verify" component={Verify} />
          
          <Route exact path="/" component={LoginFull} />
       
          <Route exact path="/register" component={Register} /> 
          

          {/* <Redirect to="/login" /> */}
          {isLogged && isAdmin && (
            <>
              <Route path="/dashboard" component={DashboardAdmin} />
              <Route path="/users" component={ListOfUsers}/>
              <Route path="/dia-de-entrevista" component={InterviewDays} />
              <Route path="/calendario"><InterviewDay /></Route>
              <Route path="/convocatoria" component={Convocatory} />
              <Route path="/nuevacohorte" component={NewCohort} />
              <Route path="/editarcohorte" component={NewCohort} />
              <Route path="/convocatorias-aspirantes" component={ConvocatoryAspirants} />
              
              <Route path="/citacion" component={Citations} />
              <Route path="/aspirantes" component={Aspirants} /> 
              <Route path="/prueba" component={AdministerTechnicalTest} />
              <Route path="/agregar" component={AddTechTest}/>
              <Route path="/editarprueba" component={AddTechTest}/>
              <Route path="/citaciones" component={Citations} />
              <Route path="/nuevacitacion" component={NewCitation} />

              <Route path="/calificacion-sololearn" component={QualifySololearn} />
              <Route path="/motivationLetter" component={QualifyMotivationLetter} />
              <Route path="/calificacion-prueba-tecnica" component={QualifyTechnicalTest} />
              <Route path="/calificacion-entrevista" component={QualifyInterview} />
              <Route path="/calificacion-assessment" component={QualifyAssessment} />

              <Route path="/register-admin" component={RegisterAdmin} />
      
              <Route path="/InfoAspirants" component={Results} />
              <Route path="/waiting-list" component={WaitingList} />

              <Route path="/parameterization" component={Parameterization} />
              <Route path="/selection-results" component={SelectionResults} />
            </>
          )}
          {!isAdmin && isLogged && (
            <>

              <Route exact path="/inscripcion" component={Index} />
              <Route exact path="/entrevista">
                <InterviewAspirant />
              </Route>
              <Route exact path="/Convocatoriasaspirante" component={AspirantConvocatorys}/>
              <Route exact path="/aspirante" component={ProofAspirant} />
              <Route exact path="/dashboard" component={DashboardAspirant} />
              <WhatsAppButton/>
            </>
          )}
        </Switch>
      {pathname !== '/verify' && <Footer />}
    </>
  );
};
export default App;
