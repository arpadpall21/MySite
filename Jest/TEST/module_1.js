module.exports = {
  get2() { return 2 },
  getRandom() { return Math.random * 10 },
  get10() { return 10 },
  p1:21,
  p2:[1, 2, 3],
  p3:{n1:'x', n2(){ return 22}},
  p4:{n2:'y'},
  p5:{n1:{n2:{n3:{n4:{n5(){ return 'really deep!' }}}}}}
}