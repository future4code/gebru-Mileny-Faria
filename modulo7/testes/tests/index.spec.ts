import { performPurchase, User } from "../src"

describe.skip('teste function performPurchase', () => {
    test('saldo maior que o valor de compra', () => {
      const user: User = {
        name: 'Mileny',
        balance: 100
      }
  
      const result = performPurchase(user, 50)
      expect(result).toEqual({
        name: 'Mileny',
        balance: 50
      })
    })
  
    test('saldo igual ao valor de compra', () => {
      const user: User = {
        name: 'Mileny',
        balance: 50
      }
  
      const result = performPurchase(user, 50)
      expect(result).toEqual({
        name: 'Mileny',
        balance: 0
      })
    })
  
    test('saldo menor que o valor de compra', () => {
      const user: User = {
        name: 'Mileny',
        balance: 30
      }
  
      const result = performPurchase(user, 50)
      expect(result).not.toBeDefined()
  })
})