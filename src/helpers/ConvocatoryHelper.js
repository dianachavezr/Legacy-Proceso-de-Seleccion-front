export const getDepartments = async () => {
  const APIURL = "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json";

  // Fetching data...
  const res = await fetch(APIURL);
  const response = await res.json();

  return response;
};

export const dataTypePopulation = [
  "Indígena",
  "Afrocolombiano",
  "Raizal",
  "Palenquero",
  "Gitano",
  "Migrante",
  "Desplazado por la violencia",
  "Víctima del conflicto armado",
  "Desmovilizado",
  "Desplazado por fenómenos naturales",
  "Personas privadas de libertad o INPEC",
  "Adolescentes en conflicto con la ley penal",
  "LGBTIQ+",
]

export const getOneConvocatory = async (id) => {
  const APIURL = `https://selectprocess.herokuapp.com/api/admin/convocatory/${id}`;

  // Fetching data...
  const res = await fetch(APIURL);
  const response = await res.json();

  return response;
};