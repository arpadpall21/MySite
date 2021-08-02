expect.extend({
  toBeNotString(received){
    if(typeof received !== 'string'){
      return {pass:true, message:() => 'not a string data type'}
    } else {
      return {pass:false, message:() => `${received} is a string data type`}
    }
  }
})

test('should not be a string', function(){
  expect(21).toBeNotString()                  // test passes 
  expect('21').toBeNotString()                // test fails 
})

