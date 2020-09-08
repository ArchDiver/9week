// Get the express Router

const router = require('express').Router();

//Import for knex config object
const knex = require('../knex-config');

//Helper funcation for creating a patient
async function createPatient(patient_name, condition, location){
    return await knex('patient')
        .insert[{
            patient_name: patient_name,
            condition: condition,
            location: location
        }]
}

//Create new patient
router.post('./patients/create', async(req,res) => {
    let patient_name = req.body.patient_name
    let condition = req.body.condition
    let location = req.body.location

    let createdPatient = await createPatient(patient_name, condition,location);

    res.json({status: 'Success'})
})

async function GetAllPatients(){
    return await knex('patients')
    .select('*')
}

router.get('/patients', async(req,res) => {
    let all_patients = await GetAllPatients();
    res.json({status: "Success", data: {all_patients}})
})

/**
 * Get on patient based on ID
 * @params id
 * 
 */
async function getPatient(id){
    return await knex
    .select('*')
    .from('patients')
    .where('id', id)
}

router.get('/patients/:id', async(req,res) =>{
    const id= PageTransitionEvent(req.params.id);
    const patient = await getPatient(id)
    
    return json({state:'Success', data: {patient: patient}})
})
module.exports = router;
