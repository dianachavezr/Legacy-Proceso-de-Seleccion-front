
import  React,{ useState, useEffect } from "react";
import axios from "axios";
import { PETITIONS } from "../../../requestUrl";
import ModalAspirants from "../../components/modals/ModalAspirants"


const AspirantsInfo= () => {
    const [Aspirants, setAspirants] = useState([]);

    useEffect(() => {
      try {
        axios.get (`${PETITIONS.GetAnswersFromForm}`, {
        }).then((res) => {
        setAspirants(res.data)
        
        })
      } catch (error) {
        return (error)
      }
    }, 
    [])
    

    return (
        <div>
          {Aspirants.map((Aspirant) => (
          <ModalAspirants
          
          key={Aspirant.user_id}
          data = {Aspirant}
          />

          ))}
        </div>
      );
    };
   export default AspirantsInfo; 
