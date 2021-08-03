test('some test-1', function(){
  expect('Kicsi kutya tarka').toEqual(expect.stringContaining('kutya'))   // test passes 
  expect('Kicsi kutya tarka').toEqual(expect.stringContaining('macka'))   // test fails 
})

test('some test-2', function(){
  expect('Kicsi kutya tarka').toEqual(expect.stringMatching('ta'))        // test passes 
  expect('Kicsi kutya tarka').toEqual(expect.stringMatching(/k.cs.\s/i))  // test passes 
  
  expect('Kicsi kutya tarka').toEqual(expect.stringMatching('farka'))     // test fails
  expect('Kicsi kutya tarka').toEqual(expect.stringMatching(/k.cs.\s/))   // test fails 
})

const mock = jest.fn()

function testFn(a, b, cb){
  cb(a, b)
}

test('mock called with', function(){
  testFn('one', 'two', mock)
  
  expect(mock).toBeCalledWith(expect.stringContaining('one'), expect.stringContaining('two'))   // test passes 
})