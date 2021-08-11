it('test', () => {
  let myMock = jest.fn((a) => a)
  myMock.mockReturnValueOnce('x')
  
  console.log(
    myMock()
  )
  console.log(
    myMock()
  )
})