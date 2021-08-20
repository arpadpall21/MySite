test('some-test', function(){
  const mockFn = jest.fn(() => 21);
  console.log( mockFn() );                        // -> 21
  
  mockFn.mockImplementation(() => 22);            // overrides the previous optional mock implementation 
  console.log( mockFn() );                        // -> 22
  
// using with classes ----------------------------
  class Animal {
    constructor(type, wild){
      this.type = type
      this.wild = wild
    }
    
    getAnimal(){
      return 
    }
  }
})
