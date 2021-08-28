test('some test', function(){
  const mockFn = jest.fn(function(shouldThrow){
    if (shouldThrow) {
      throw new Error('some error');
    } else {
      return 'something';
    }
  })
  
  mockFn();
  try { mockFn(true); } catch(e) { }
  mockFn();
  
// toHaveReturned() / toHaveReturnedTimes() ------------------
  expect(mockFn).toHaveReturned();                            // mock function returned (not throw) at least once 
  expect(mockFn).toHaveReturnedTimes(2);                      // mock function returned 2 times (of of 3 calls throws once)
  
// toHaveReturnedWith() / toHaveLastReturnedWith() / toHaveNthReturnedWith() ---
  let counter = 0;
  const jestFn2 = jest.fn(function(){
    counter++;
    return counter;
  })
  
  jestFn2();
  jestFn2();
  jestFn2();
  
  expect(jestFn2).toHaveReturnedWith(2);                      // mock function have returned 2 at lest once 
  
  expect(jestFn2).toHaveLastReturnedWith(3);                  // mock function have returned 3 for the last time  
  
  expect(jestFn2).toHaveNthReturnedWith(1, 1);                // mock function have returned 1 for the fist time 
  expect(jestFn2).toHaveNthReturnedWith(2, 2);                // mock function have returned 2 for the 2nd time 
  expect(jestFn2).toHaveNthReturnedWith(3, 3);                // mock function have returned 3 for the 3rd time 
})
