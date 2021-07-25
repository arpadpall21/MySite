const {myFn1, myFn2} = require('./testFn')

test('should run imported functions', function(){
  expect(myFn1()).toBe(5)
  expect(myFn2()).toBe(15)
  
})

