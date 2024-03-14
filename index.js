// Write your solution in this file!
const employee = {
    name: 'John',
    age: 30,
    role: 'Software Engineer'
  };
  
  function updateEmployeeWithKeyAndValue(employee,key,value) {
    const updatedEmployee = {...employee};
        updatedEmployee[key] = value;
    return updatedEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
  }
//   module.exports = destructivelyUpdateEmployeeWithKeyAndValue; 
function deleteFromEmployeeByKey(employee, key) {
    const employeeClone = { ...employee };
    delete employeeClone[key];
    return employeeClone;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    if (employee && employee[key]) {
        delete employee[key];
    }
    return employee;
}