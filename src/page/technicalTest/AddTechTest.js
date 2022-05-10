import React, { useEffect, useState } from "react";
import { PETITIONS } from "../../../requestUrl";
import axios from "axios";
import  "./TechTest.css"
import { useQuery } from "../../components/useQuery/useQuery";
import { getOneTest } from "../../helpers/TechTestHelper";
import FormTechTest from "./FormTechTest";

const AdministerTechnicalTestAdd = () => {
	const [convocatory, setConvocatory] = useState([]);
	const [testInfo, setTestInfo] = useState([]);

	let query = useQuery();
	let idTest = query.get("idtest");

	useEffect(() => {
		axios.get(PETITIONS.getConvocatories).then((res) => {
			setConvocatory(res.data);
		});
		if (idTest) {
			getOneTest(idTest).then(async (TechTest) => setTestInfo(TechTest));
		}
	}, []);

	let data;
	testInfo.map((testData) => {
		data = testData;
		return data;
	});


	return (
		<div className="FormTechTest" >
			{data !== undefined && idTest ? (
				<FormTechTest query={idTest} data={data} convocatory={convocatory} />
			) : null}
			{!idTest ? (
				convocatory?.length <= 0 ? <h2>Por favor agregue una convocatoria antes de asignar una prueba técnica</h2> :
				<FormTechTest convocatory={convocatory} query={idTest} />
			) : null}
		</div>
	);
};

export default AdministerTechnicalTestAdd;
