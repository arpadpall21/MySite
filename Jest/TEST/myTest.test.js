test('some test', function(){
  const myObj = { 
    add(a, b){ return a + b},
    multiply(a, b){ return a * b}
  }
  
  const myObj2 = {
    divide(a, b) { return a / b }
  }
  
  const spy1 = jest.spyOn(myObj, 'add'); 
  const spy2 = jest.spyOn(myObj, 'multiply'); 
  const spy3 = jest.spyOn(myObj2, 'divide'); 
  
  myObj.add(3, 3);
  myObj.multiply(3, 3);
  myObj2.divide(3, 3);
  
  console.log( spy1.mock.calls );
  console.log( spy2.mock.calls );
  console.log( spy3.mock.calls );
  
  myObj.add(3, 3);
  myObj.multiply(3, 3);
  myObj2.divide(3, 3);
  
  jest.restoreAllMocks();

  myObj.add(3, 3);
  myObj.multiply(3, 3);
  myObj2.divide(3, 3);
  myObj.add(3, 3);
  myObj.multiply(3, 3);
  myObj2.divide(3, 3);
  
  console.log( spy1.mock.calls );
  console.log( spy2.mock.calls );
  console.log( spy3.mock.calls );
  
})
