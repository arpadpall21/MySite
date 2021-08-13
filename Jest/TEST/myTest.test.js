const mod1 = require('./module_1')
jest.mock('./module_1')

it('test', () => {
  console.log( mod1.get2 )        // undefined -> automatically mocked 
  console.log( mod1.getRandom() )   // undefined
  
  mod1.getRandom.mockImplementation(() => 21)   // mocking an imported function setting a default value to the imported function 
  console.log( mod1.getRandom() )               // -> 21
    
  console.log( mod1.p1 )                        // -> 21    // properties are not automatically mocked 
  console.log( mod1.p2 )                        // -> []
  console.log( mod1.p3.n2() )                   // -> undefined   // functions in any depth are mocked 
  console.log( mod1.p4.n2 )
  console.log( mod1.p5.n1.n2.n3.n4.n5() )       // -> undefined   // functions in any depth are mocked 
  
  
  // mod1.get10.mockImplementationOnce(() => 11 )
  // console.log( mod1.get10() )                   // -> 11
  // console.log( mod1.get10() )                   // -> undefined 
  
  // mod1.getRandom.mockReturnThis()
  // console.log( getRandom() )
  
  const mock
})

