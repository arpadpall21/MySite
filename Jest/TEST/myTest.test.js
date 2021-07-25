function throwErr(){
  throw new Error('some error')
}

test('test-1', function(){
  expect(throwErr()).toThrow()
  expect(throwErr()).toThrow('some error')
})


