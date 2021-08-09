class TestClass {
  constructor(a, b){
    this.a = a
    this.b = b;
  }
}

var myObj = new TestClass(21, 22)

// toEqual() --------------------------------------------------------------------------------
  test('test-1', function(){
    expect({}).toEqual({p1:undefined})                                                      // test passes 
    
    expect([,1]).toEqual([undefined,1])                                                     // test passes 
    
    expect({a:21, b:22}).toEqual(myObj)
  })
  
  
// toStrictEqual() -------------------------------------------------------------------------
  test('test-2', function(){
    expect({}).toStrictEqual({p1:undefined})                                                // test fails  
  })
  
  test('test-2', function(){
    expect([,1]).toStrictEqual([undefined,1])                                               // test fails
  })

  test('test-3', function(){
    expect({a:21, b:22}).toStrictEqual(myObj)                                               // test fails
  })