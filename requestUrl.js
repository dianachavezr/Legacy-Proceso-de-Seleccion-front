// Endpoints
const BASEURL = 'https://selectprocess.herokuapp.com/api/'

export const PETITIONS = {
  // ============ User ======================
  // Register candidate
  register: `${BASEURL}user/register`,
  // Activate user
  activateUser: `${BASEURL}user/activation/`,
  // update user role
  updateRole: `${BASEURL}user/update_role/`,
  // Register Admin
  registerAdmin: `${BASEURL}user/register_admin`,
  // ========================================

  // ============ Convocatory ===============
  // Create convocatory
  createConvocatory: `${BASEURL}admin/new-conv`,
  // Get all Convocatories
  getConvocatories: `${BASEURL}admin/convocatories`,
  // Update convocatory
  updateConcovatory: `${BASEURL}admin/update-conv/`,
  // Delete 
  deleteConvocatory: `${BASEURL}admin/convocatory/`,
  // Get one Convocatory
  getOneConvocatory: `${BASEURL}admin/convocatory/` ,
  // ========================================

  // ============ Tech Test ================
  // Create tech test
  createTechTest: `${BASEURL}admin/new-test`,
  // Get all tech test
  getTechTest: `${BASEURL}admin/test`,
  // Get one tech test
  getOneTechTest: `${BASEURL}admin/test/`,
  // Update tech test
  updateTechTest: `${BASEURL}admin/test/`,
  // Delete tech test
  deleteTechTest: `${BASEURL}admin/test/`,
  // Send Tech Test
  sendTechTest: `${BASEURL}candidate/tech-test/`,
  // Verify if exist tech test
  verifyTechTest: `${BASEURL}candidate/candidate/`,
  // ========================================
  // ============== Candidate ==============
  // Get profile
  getProfileById: `${BASEURL}candidate/candidate/`,
  // get all profiles
  getAllCandidates: `${BASEURL}candidate/candidate-profile`,
  // get all sololearn califications
  getAllCalifications: `${BASEURL}candidate/calification`,

  // =======================================

  // =========Convocatory Aspirant============
  // update users in convocatory
  addUsersToConvocatory: `${BASEURL}admin/update-candidate/`,

  // ========== Form Aspirant ===============
  // Get Information from the form 
  GetAnswersFromForm: `${BASEURL}candidate/candidate-profile`,
}
