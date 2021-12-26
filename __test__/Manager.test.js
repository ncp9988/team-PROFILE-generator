

const Manager = require('../lib/Manager');


test('check to see if you get manager getName', () => {
    var myManager = new Manager('Shelby', '1234','ncp9988@gmail.com','001');
    expect(myManager.getName()).toBe('Shelby')
});

test('check to see if you get manager getId', () => {
    var myManager = new Manager('Shelby', '1234','ncp9988@gmail.com','001');
    expect(myManager.getId()).toBe('1234')
});
test('check to see if you get manager getEmail', () => {
    var myManager = new Manager('Shelby', '1234','ncp9988@gmail.com','001');
    expect(myManager.getEmail()).toBe('ncp9988@gmail.com')
});

test('check to see if you get manager office number', () => {
    var myManager = new Manager('Shelby', '1234','ncp9988@gmail.com','001');
    expect(myManager.getOfficeNumber()).toBe('001')
});