import { sum } from '../sum'

describe('sum', () => {
   it('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3)
   })
   it('adds 8 + 2 to equal 10', () => {
      expect(sum(8, 2)).toBe(10)
   })
})