class TestClass {
  constructor(a, b){
    this.a = a
    this.b = b
  }
  
  summAll(){
    return a + b
  }
}

module.exports = {
  get2() { return 2 },
  getRandom() { return Math.random * 10 },
  get10() { return 10 },
  p1:21,
  p2:[1, 2, 3],
  p3:{n1:'x', n2(){ return 22}, n3:22, n4:[1, 2, 3], n5:false},
  p4:{n2:'y'},
  p5:{n1:{n2:{n3:{n4:{n5(){ return 'really deep!' }}}}}},
  myClass: TestClass
}

console.log( 'required!' )