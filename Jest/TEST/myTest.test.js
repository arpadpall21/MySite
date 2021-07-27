describe('desc-1', function(){
  test('test', function(){})
})

describe.skip.each(['des-1', 'desc-2', 'desc-3'])('name: %s', function(){            // only this describe each is executed 
  test('test', function(){})
})

describe('desc-3', function(){
  test('test', function(){})
})
