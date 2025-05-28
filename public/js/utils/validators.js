/**
 * Validates a Swedish personal number with the format YYYYMMDD-XXXX.
 *
 * @param {string} personalNumber - The personal number to validate.
 * @returns {boolean} - True if valid format, false if not.
 */
export function validatePersonalNumber (personalNumber) {
  return /^\d{8}-\d{4}$/.test(personalNumber)
}
