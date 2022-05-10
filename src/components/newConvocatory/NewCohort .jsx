import React, { useEffect, useState } from "react";
import {
	getDepartments,
	getOneConvocatory,
} from "../../helpers/ConvocatoryHelper";
import FormConvocatory from "./FormConvocatory";

import { useQuery } from "../useQuery/useQuery";


const NewCohort = () => {
	const [departments, setDepartments] = useState([]);
	const [conv, setConv] = useState([]);
	
  // get Query from url params whit custom hook
  let param = useQuery();
  let query = param.get("idConvocatory");

	let stractus = [];
	for (let i = 1; i <= 6; i++) {
		stractus.push(i);
	}

	useEffect(() => {
		getDepartments().then(async (department) => setDepartments(department));
		if (query) {
			getOneConvocatory(query).then(async (oneConvocatory) => setConv(oneConvocatory));
		}
	}, [ query ]);
	
	let data;
	conv.map((convData) => {
		data = convData
		return data
	})

	return (
		<>
		{data !== undefined && query? 
			<FormConvocatory departments={departments} data={data} query={query} stractus={stractus}/>
			: null}
			{!query ? <FormConvocatory departments={departments} query={query} stractus={stractus}/> : null}
		</>
	);
};

export default NewCohort;
