

const Intern = require('../lib/Intern');


test('check to see if you get intern getName', () => {
    var myIntern = new Intern('Shelby', '1234','ncp9988@gmail.com');
    expect(myIntern.getName()).toBe('Shelby')
});


test('check to see if you get intern getId', () => {
    var myIntern = new Intern('Shelby', '1234','ncp9988@gmail.com');
    expect(myIntern.getId()).toBe('1234')
});

test('check to see if you get intern getEmail', () => {
    var myIntern = new Intern('Shelby', '1234','ncp9988@gmail.com');
    expect(myIntern.getEmail()).toBe('ncp9988@gmail.com')
});

test('check to see if you get intern school', () => {
    var myIntern = new Intern('Shelby', '1234','ncp9988@gmail.com','SMU');
    expect(myIntern.getSchool()).toBe('SMU')
});



