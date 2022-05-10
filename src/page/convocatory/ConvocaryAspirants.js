import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PETITIONS } from "../../../requestUrl";
import { makeStyles } from "@material-ui/core/styles";

const ConvocatoryAspirants = () => {
	const [convAsp, setConvAsp] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(
				"https://selectprocess.herokuapp.com/api/admin/convocatories"
			);
			setConvAsp(data);
		}
		fetchData();
	}, []);

	const [apirantsConvocatory, setApirantsConvocatory] = useState([]);
	const token = useSelector((state) => state.token);

	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(PETITIONS.GetAnswersFromForm, {
				headers: { Authorization: token },
			});

			setApirantsConvocatory(data);
		}
		fetchData();
	}, []);

  return (
    <>
      {convAsp?.map((item, index) => (
        <div className="Aspirants_in_convocatory" key={index}>
          <div className='table_aspirant_in'>

            <h1 key={item._id} className="Aspirants_conv_title">{item.name}</h1>
            {" "}
            <table className="table_aspirants_in_conv">
              <tr>
                <td className="row_aspirants_in_conv" align='center'>Nombre</td>
                <td className="row_aspirants_in_conv" align='center'>Apellido</td>
                <td className="row_aspirants_in_conv" align='center'>Edad</td>
                <td className="row_aspirants_in_conv" align='center'>Sexo</td>
                <td className="row_aspirants_in_conv" align='center'>Email</td>
                <td className="row_aspirants_in_conv" align='center'>Numero de telefono</td>
                <td className="row_aspirants_in_conv" align='center'>Nacionalidad</td>
                <td className="row_aspirants_in_conv" align='center'>Estrato</td>
              </tr>
              {item.usersRegistered.map((i) =>
                apirantsConvocatory?.map((aspirant) =>
                  i === aspirant.user_id ?
                          <tr key={aspirant.user_id}  className="table_aspirants_in_conv">
                            <td  align='center'>{aspirant.firstName}</td>
                            <td   align='center'>{aspirant.firstSurname}</td>
                            <td  align='center'>{aspirant.age}</td>
                            <td  align='center'>{aspirant.sex}</td>
                            <td  align='center'>{aspirant.email}</td>
                            <td  align='center'>{aspirant.phone1}</td>
                            <td  align='center'>{aspirant.nacionality}</td>
                            <td  align='center'>{aspirant.Stratum}</td>
                          </tr>
                      

                   
                    : ""
                )
              )}
            </table>
          </div>
        </div>
      ))}
      ;
    </>
  );
};
export default ConvocatoryAspirants;
