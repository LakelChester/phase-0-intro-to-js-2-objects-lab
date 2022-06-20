// Write your solution in this file!
const employee = {
    name : 'Johnny',
    streetAddress : "21 Jump St",
}



function updateEmployeeWithKeyAndValue(employee, key, value){
    
    const newEmployee = {...employee};

    newEmployee[key] = value

    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee

}

function deleteFromEmployeeByKey(employee, key) {
 
    const newEmployeeKey = Object.assign({}, employee)
    
    delete newEmployeeKey[key];
    
    return newEmployeeKey
}

function destructivelyDeleteFromEmployeeByKey(newEmployee, key){

    delete newEmployee[key]

    return newEmployee


}