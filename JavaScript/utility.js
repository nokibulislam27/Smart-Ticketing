function setValueByElementId(id, value){
    const elementId = document.getElementById(id);
    elementId.innerText = value;
}

function getValueByElementId(id){
    const elementId = document.getElementById(id);
    const value = parseInt(elementId.innerText);
    return value;
}

function getSeatNumberByElementId(seatName){
    const seatNumber = document.getElementById(seatName);
    return seatNumber;
}