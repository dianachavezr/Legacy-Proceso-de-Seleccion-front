export const GET_PROFILE = "GET_PROFILE"
export const GET_PROFILES = "GET_PROFILES"
export const GET_CONVOCATORYS = "GET_CONVOCATORYS"
export const GET_CONVOCATORY = "GET_CONVOCATORY"
export const GET_ACEPT = "GET_ACEPT";
export const PUT_PARAMETERIZATION = "PUT_PARAMETERIZATION"


export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    case GET_CONVOCATORYS:
      return {
        ...state,
        convocatorys: payload
      };
    case GET_CONVOCATORY:
      return {
        ...state,
        convocatory: payload
      };
    case PUT_PARAMETERIZATION:
      return {
        ...state,
        convocatory: payload
      }
    case GET_ACEPT:
      return {
        ...state,
        acept: payload,
      };
    default:
      return state;
  }
};
