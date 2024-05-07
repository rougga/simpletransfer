function checkAvailablePlaces(id_employee){
    let id_workplace = getWorkPlace(id_employee);
    let wantedPlaces = [];
    wantedPlaces = getWantedPlaces(id_employee);
    let matchedEmployees= [];
    matchedEmployees = getMatchedEmployees(id_workplace,wantedPlaces);
    return matchedEmployees;
}

function getMatchedEmployees(id_workplace,wantedPlaces){
    
}