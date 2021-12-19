const Employee = require('../lib/Employee')

test('check to see if you get employee object', () => {
    var myEmployee = new Employee();
    expect(typeof (myEmployee)).toBe('object')
});

test('check to see if you get employee name', () => {
    var myEmployee = new Employee('Shelby');
    expect(myEmployee.name).toBe('Shelby')
});

test('check to see if you get employee id', () => {
    var myEmployee = new Employee('Shelby', '1234');
    expect(myEmployee.id).toBe('1234')
});
test('check to see if you get employee email', () => {
    var myEmployee = new Employee('Shelby', '1234','ncp9988@gmail.com');
    expect(myEmployee.email).toBe('ncp9988@gmail.com')
});


test('check to see if you get employee getName', () => {
    var myEmployee = new Employee('Shelby', '1234','ncp9988@gmail.com');
    expect(myEmployee.getName()).toBe('Shelby')
});
test('check to see if you get employee getId', () => {
    var myEmployee = new Employee('Shelby', '1234','ncp9988@gmail.com');
    expect(myEmployee.getId()).toBe('1234')
});
test('check to see if you get employee getEmail', () => {
    var myEmployee = new Employee('Shelby', '1234','ncp9988@gmail.com');
    expect(myEmployee.getEmail()).toBe('ncp9988@gmail.com')
});

