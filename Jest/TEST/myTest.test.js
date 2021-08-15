let mod1 = require('./module_1')
jest.mock('./module_1', function(){ return { get2: function(){return 2}, p2:22 }})

it('test', async () => {
  console.log( mod1.get2() )
  
  console.log( mod1.p2 )
  
  console.log( mod2.p2 )
  
  // let myObj = new mod_.myClass(3, 5)
  
  // console.log( myObj.summAll() )
  
  // console.log( myObj.a )
  // console.log( myObj.b )
})

