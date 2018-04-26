import axios from 'axios';

export const FETCH_SERVICE_TYPES = 'FETCH_SERVICE_TYPES';
export const UPDATE_DEVICE_LOCATION = 'UPDATE_DEVICE_LOCATION';
export const UPDATED_SELECTED_SERVICE_TYPES = 'UPDATED_SELECTED_SERVICE_TYPES';
export const SUBMIT_SERVICE_SEARCH = 'SUBMIT_SERVICE_SEARCH';

export function updateDeviceLocation(location) {
    return {
        type: UPDATE_DEVICE_LOCATION,
        payload: location
    };
}

export function updateServiceTypesInForm(serviceTypes) {
    return {
        type: UPDATED_SELECTED_SERVICE_TYPES,
        payload: serviceTypes
    };
}

export function searchServices (values) {

    var request = axios.post('http://localhost:18080/api/search/', {
        caseId : '',
        postcode: values.postcode,
        northing: '',
        easting: '',
        searchDistance: values.distance,
        gpPracticeId: '',
        whenServiceNeeded: values.urgency,
        age: '',
        gender: '',
        symptomGroupDiscriminatorCombos: null,
        serviceTypeIds: values.serviceTypeIds
    });

    return {
        type: SUBMIT_SERVICE_SEARCH,
        payload: request
    };
}

export function getServiceTypes() {
    // TODO: Replace mock response with REST call
    // const url = `${ROOT_URL}&q=${city},gb`;
    // const request = axios.get(url);

    return {
        type: FETCH_SERVICE_TYPES,
        payload: [{
            "uid": 41,
            "description": "Acute Assessment unit",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 5,
            "description": "Ambulance Service",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 24,
            "description": "Care Home",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 17,
            "description": "Clinics",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 20,
            "description": "Community Based Services",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 28,
            "description": "Community Hospital",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 47,
            "description": "Dental Emergency",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 12,
            "description": "Dental Services",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 134,
            "description": "Distance Selling Pharmacy (DSP)",
            "cmsnationalranking": "4",
            "cmscapacitymodel": null,
            "cmscapacityreset": "internal",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 38,
            "description": "District/Community Nurse",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 124,
            "description": "Domiciliary Dentist",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 125,
            "description": "Domiciliary Optician",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 31,
            "description": "Emergency Care Practitioner (ECP)",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 40,
            "description": "Emergency Department",
            "cmsnationalranking": "4",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 120,
            "description": "Eye Casualty",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 117,
            "description": "GP Choice",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "dn goes here",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 123,
            "description": "GP Extended Hours ",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "dn goes here",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 100,
            "description": "GP in hours",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "dn goes here",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 106,
            "description": "GP-Led UCC with ED",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 25,
            "description": "GP Out of Hours Provider (OOH)",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 113,
            "description": "Health Information",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 18,
            "description": "Health Visitor",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 122,
            "description": "Hyper-Acute Stroke Unit (HASU)",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 133,
            "description": "Integrated Urgent Care (IUC) Clinical Assessment Service (CAS)",
            "cmsnationalranking": "4",
            "cmscapacitymodel": null,
            "cmscapacityreset": "internal",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 27,
            "description": "Intermediate Care",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 7,
            "description": "Mental Health",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 19,
            "description": "Midwifery",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 112,
            "description": "Minor Eye Condition service (MECS)",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 35,
            "description": "MIU",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 49,
            "description": "Multi-Disciplinary Services",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 130,
            "description": "NHS111 Provider",
            "cmsnationalranking": "4",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 14,
            "description": "Optician",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 50,
            "description": "Palliative Care",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 13,
            "description": "Pharmacist",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 132,
            "description": "Pharmacist Enhanced Service",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 116,
            "description": "Pharmacist - Extended Hours",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 131,
            "description": "Pharmacist Urgent Prescription",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 32,
            "description": "Primary Care Practitioner (PCP)",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 121,
            "description": "Primary Percutaneous Coronary Intervention (PPCI)",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 129,
            "description": "Safeguarding",
            "cmsnationalranking": "4",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 29,
            "description": "Sexual Health",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 30,
            "description": "Single Point of Access (SPoA)",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 8,
            "description": "Social Care",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 48,
            "description": "Specialist Service",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 105,
            "description": "Speciality Emergency Department (Spec ED)",
            "cmsnationalranking": "4",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 4,
            "description": "Therapist",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 46,
            "description": "UCC",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 11,
            "description": "Voluntary agency",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        },
        {
            "uid": 45,
            "description": "WIC",
            "cmsnationalranking": "1",
            "cmscapacitymodel": "n/a",
            "cmscapacityreset": "interval",
            "cmssearchcapacitystatus": true
        }]
    };
}
