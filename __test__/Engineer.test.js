

const Engineer = require('../lib/Engineer');


test('check to see if you get engineer getName', () => {
    var myEngineer = new Engineer('Shelby', '1234','ncp9988@gmail.com','ncp9988');
 
    expect(myEngineer.getName()).toBe('Shelby')
});

test('check to see if you get engineer getId', () => {
    var myEngineer = new Engineer('Shelby', '1234','ncp9988@gmail.com','ncp9988');
    expect(myEngineer.getId()).toBe('1234')
});
test('check to see if you get engineer getEmail', () => {
    var myEngineer = new Engineer('Shelby', '1234','ncp9988@gmail.com','ncp9988');
    expect(myEngineer.getEmail()).toBe('ncp9988@gmail.com')
});

test('check to see if you get engineer getGithub', () => {
    var myEngineer = new Engineer('Shelby', '1234','ncp9988@gmail.com','ncp9988');
    expect(myEngineer.getGithub()).toBe('ncp9988')
});



