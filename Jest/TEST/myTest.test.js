jest.enableAutomock();                                                    // enables module auto mocking (enable by default from config)
const importedFn = require('./module_1');                                 // imported function is automatically mocked   

test('some test', () => {
  console.log( importedFn() );                                            // -> undefined 

})

jest.enableAutomock();                                                    // enables module auto mocking (enable by default from config)
const importedFn2 = require('./module_1');                                // imported function is not mocked anymore

test('some test', () => {
  console.log( importedFn2() );                                           // -> undefined 

})

