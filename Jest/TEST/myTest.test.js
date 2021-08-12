const mod1 = require('./module_1')
jest.mock('./module_1', () => {
  return {
    get2: null
  }
})

it('test', () => {
  console.log( mod1.get2() )        // undefined 
  console.log( mod1.getRandom() )   // undefined
  
  mod1.getRandom.mockImplementation(() => 21)   // mocking an imported function setting a default value to the imported function 
  console.log( mod1.getRandom() )               // -> 21
  
  
  console.log( mod1.p1 )
  console.log( mod1.p2 )
  console.log( mod1.p3 )
  
  mod1.get10.mockImplementationOnce(() => 11 )
  console.log( mod1.get10() )                   // -> 11
  console.log( mod1.get10() )                   // -> undefined 
  
  mod1.getRandom.mockReturnThis()
  console.log( getRandom() )
})

