test('some-test', async function(){
// .mockClear() / jest.crearAllMocks() --------------------------------
  const mockFn1 = jest.fn((a, b) => a + b);
  const mockFn2 = jest.fn((a, b) => a + b);
  const mockFn3 = jest.fn((a, b) => a + b);
  
  mockFn1(1, 2)
  mockFn2(5, 5)
  mockFn3(7, 4)
  
  console.log( mockFn1.mock.calls );                                   // -> [[1, 2]]                    
  console.log( mockFn2.mock.results );                                 // -> [{type:'return', value:10}] 
  console.log( mockFn3.mock.results );                                 // -> [{type:'return', value:11}] 
  
  mockFn1.mockClear();                                                 // clears the 'mock.calls' and mock.results' for this mock function only 
  
  console.log( mockFn1.mock.calls );                                   // -> [] 
  console.log( mockFn2.mock.results );                                 // -> [{type:'return', value:10}] 
  console.log( mockFn3.mock.results );                                 // -> [{type:'return', value:11}] 
  
  jest.clearAllMocks();                                                // clears the 'mock.calls' and mock.results' for all mock functions 
  
  console.log( mockFn1.mock.calls );                                   // -> [] 
  console.log( mockFn2.mock.results );                                 // -> [] 
  console.log( mockFn3.mock.results );                                 // -> []   
  
  console.log( mockFn1(1, 2) )                                         // -> 3              // does not remove any mock implementation 
  
// .mockReset() / jest.resetAllMocks() --------------------------------
  const mockFn4 = jest.fn((a, b) => a + b);
  const mockFn5 = jest.fn((a, b) => a + b);
  
  mockFn4(1, 2)
  mockFn5(5, 5)
  
  console.log( mockFn4.mock.calls );                                   // -> [[1, 2]]                    
  console.log( mockFn5.mock.results );                                 // -> [{type:'return', value:10}] 
  
  mockFn4.mockReset();                                                 // clears the 'mock.calls' and mock.results' and also resets all mock implementations for this mock function only   
  
  console.log( mockFn4.mock.calls );                                   // -> []
  console.log( mockFn5.mock.results );                                 // -> [{type:'return', value:10}]
  console.log( mockFn4(1, 2) );                                        // -> undefined        // because mock implementations are cleared as well 
  console.log( mockFn5(5, 5) );                                        // -> 10 
  
  jest.resetAllMocks();                                                // clears the 'mock.calls' and mock.results' and also resets all mock implementations for all mock functions    
  
  console.log( mockFn4.mock.calls );                                   // -> []
  console.log( mockFn5.mock.results );                                 // -> []
  console.log( mockFn4(1, 2) );                                        // -> undefined        // because mock implementations are cleared as well 
  console.log( mockFn5(5, 5) );                                        // -> undefined  
  
  
  
  
})
