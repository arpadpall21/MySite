test('some test', function(){
  const myObj = { add(a, b){console.log('add was called!'); return a + b} }
  
  const spy = jest.spyOn(myObj, 'add');                 // spying on the specified object method   
  
  myObj.add(1, 2);                                      // -> 3
  
  expect(spy).toHaveBeenCalled();                       // the spy is used to spy on the spied method 
  
// apply mock implementation ---------------------------
  spy.mockImplementation(() => 'new mock implementation!');   // mock implementation applied on the object's method 
  console.log( myObj.add(1, 2) );                       // -> 'new mock implementation!' 
  
  myObj.add = jest.fn(() => 'another mock implementation!')
  console.log( myObj.add(1, 2) );                       // -> 'another mock implementation!' 
  
// using 'get' 'set' options ---------------------------
  
  
  
})
