const employeeList = [
 {
  name: 'Jan',
  officeNum: 1,
  phoneNum: '222-222-2222'
 },
 {
  name: 'Juan',
  officeNum: 304,
  phoneNum: '489-789-8789'
 },
 {
  name: 'Margie',
  officeNum: 789,
  phoneNum: '789-789-7897'
 },
 {
  name: 'Sara',
  officeNum: 32,
  phoneNum: '222-789-4654'
 },
 {
  name: 'Tyrell',
  officeNum: 3,
  phoneNum: '566-621-0452'
 },
 {
  name: 'Tasha',
  officeNum: 213,
  phoneNum: '789-766-5675'
 },
 {
  name: 'Ty',
  officeNum: 211,
  phoneNum: '789-766-7865'
 },
 {
  name: 'Sarah',
  officeNum: 345,
  phoneNum: '222-789-5231'
 }
];


let command= prompt ('What would you like to do?');



if (command== 'print'){
 for( let i = 0 ; i < employeeList.length ; i++ ) {
  let employee = employeeList[i];
  render(employee.name , employee.officeNum , employee.phoneNum);
 }
}


if (command == 'verify') {
 let nameInput = prompt('Who would you like to verify?');
 let employee = employeeList.find(e => e.name == nameInput);
 render ( employee != undefined);
}

if (command == 'lookup') {
 let nameInput = prompt('Who would you like to lookup?');
 let employee = employeeList.find(e => e.name == nameInput);
 if ( employee != undefined){
  render (employee.name, employee.officeNum, employee.phoneNum);
 }
  
}
// ​
// render('start');
// for( let i = 0 ; i < employeeList.length ; i++ ) {
//  render(i);
// }
// render('done');

if (command == 'contains') {
  let nameInput = prompt('Enter any part of the name you are searching?');
  for( let i = 0 ; i < employeeList.length ; i++ ) {
    let employee = employeeList[i];
    let contains = employee.name.includes(nameInput);
    if (contains){
     render (employee.name, employee.officeNum, employee.phoneNum);
    }
  }
}

// ​console.log(3)

if (command == "update") {
 let nameInput = prompt('Whom would you like to update?');
 let updateField = prompt('What field would you like to update?');
 let updated = prompt('What is the new value?');
 for( let i = 0 ; i < employeeList.length ; i++ ) {
  let employee = employeeList[i];
  if (employee.name == nameInput){
   employee[updateField] = updated;
   render(employee.name , employee.officeNum , employee.phoneNum);
  }
 }
}

if (command == 'add') {
  var newEmployee = {
    name: nameInput,
    officeNum: office,
    phoneNum: phone
    }
  let nameInput = prompt('New employee name?');
  let office = prompt('Assigned office number?');
  let phone = prompt('Assigned phone number?');
  employeeList.push(newEmployee);
  render (employeeList)

}

if (command == 'erase') {
  let rid = prompt('Name of person to be erased?')
  for (i = 0, len = arr.length; i < len; i++)
      if (employee.name == rid){
        (employeeList.splice[i]);
  }
}
