jest.useFakeTimers()
// jest.useRealTimers()
jest.runAllTimers()

it('test', () => {
  setTimeout( () => {
    console.log( 'timed out after 2 seconds!' )
  }, 2000)
  console.log( 'TEST' )
})

