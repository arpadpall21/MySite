describe('my beverage', () => {
  test('is delicious and not sour', () => {
    const myObj = {p1:21, p2:{nest:33}}
    
    expect([1, 2, {p1:21, nest:[11]}]).toContainEqual({p1:21, nest:[11]})
  });
});