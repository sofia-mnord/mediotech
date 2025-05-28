/**
 * Test for validating the function for validating personal number validators.js
 */

import { validatePersonalNumber } from '../public/js/utils/validators.js'

describe('Validation function', () => {
  test('should return true with correctly formatted personal number YYYYMMDD-XXXX', () => {
    const input = '19121212-1212'
    const expected = true

    const actual = validatePersonalNumber(input)

    expect(actual).toBe(expected)
  })

  test('should return false with incorrectly formatted personal number YYMMDD-XXXX', () => {
    const input = '121212-1212'
    const expected = false

    const actual = validatePersonalNumber(input)

    expect(actual).toBe(expected)
  })

  test('should return false with incorrectly formatted personal number YYYYMMDDXXXX', () => {
    const input = '191212121212'
    const expected = false

    const actual = validatePersonalNumber(input)

    expect(actual).toBe(expected)
  })

  test('should return false with incorrectly formatted personal number YYMMDDXXXX', () => {
    const input = '1212121212'
    const expected = false

    const actual = validatePersonalNumber(input)

    expect(actual).toBe(expected)
  })
})
