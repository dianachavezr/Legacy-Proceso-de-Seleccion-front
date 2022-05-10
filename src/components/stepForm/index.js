import React, { useEffect, useState } from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getData, getProfileFull } from "../../actions/sololearnProfile";
import axios from 'axios';
import FormSend from '../formSend/FormSend';
import { PETITIONS } from '../../../requestUrl';
import { useHistory } from 'react-router-dom';
import MotivationLetter from './MotivationLetter';
import './StepForm.css'

const Index = () => {
  const { profile } = useSelector((state) => state.sololearn);
  
  const { user } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  if(step < 1 ){
    setStep(1)
  }else if(step > 4){
    setStep(4)
  }

  const [data, setData] = useState();
  const [sendAllData, setSendAllData] = useState(false);
  const setDataToForm = (allValues, send = sendAllData) => {
    setData({...data, ...allValues})
    setSendAllData(send)
  }

  useEffect(() =>{
    try {
      axios.get(`${PETITIONS.getProfileById}${user._id}`).then(res => res)
    } catch (error) {
      return error
    }
  }, [user])


  
  useEffect(() => {
    if(sendAllData){
      try {
        axios.post('https://selectprocess.herokuapp.com/api/candidate/profile', {...data, user_id : user?._id})
      } catch (error) {
        return(error)
      }

      Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'Datos enviados exitosamente',
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      })
    }
    dispatch(getProfileFull(user._id))
    dispatch(getData(user._id))
  }, [ sendAllData, dispatch, getData, user ])
  

  return (<>
    {profile.length ? <FormSend /> :
      <div>
        {
          step === 1 ? <Step1 setStep={setStep} data={data} setDataToForm={setDataToForm} step={step}/>
          : step === 2 ? <Step2 setStep={setStep} data={data} setDataToForm={setDataToForm} step={step}/>
          : step === 3 ? <Step3 setStep={setStep} data={data} setDataToForm={setDataToForm} step={step}/>
          : step === 4 ? <MotivationLetter setStep={setStep} data={data} setDataToForm={setDataToForm} step={step}/>
          : null
        }
      </div>
    }
  </>
  )
}

export default Index