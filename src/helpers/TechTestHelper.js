import { PETITIONS } from "../../requestUrl";

export const getOneTest = async (id) => {
  const res = await fetch(`${PETITIONS.getOneTechTest}${id}`);
  const response = await res.json();

  return response;
};
