// Write your solution in this file!
const employee = {
    name : "Sam",
    streetAddrress : "11 Broadway",
}
function updateEmployeeWithKeyAndValue(object, key, value) {
    return {
        ...employee,[key]:value
    };
}
/*console.log(employee)*/
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}
/*const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
    employee, "name", "Sam")*/
/*const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(  
    employee, "streetAddress", "12 Broadway",
    )
console.log(newEmployee)*/
employee.streetAddrress = "12 Broadway"
function deleteFromEmployeeByKey(object, key) {
    return {
        ...employee[key],
    }
}
delete employee.streetAddrress;
function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}
employee = destructivelyDeleteFromEmployeeByKey(employee.name)