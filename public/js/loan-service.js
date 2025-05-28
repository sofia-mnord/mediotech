import { database } from './firebase-init.js'
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  doc
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js'

const loansRef = collection(database, 'loans')

/**
 * Saves a loan form with data to Firestore.
 *
 * @param {object} data - the data to be saved
 * @throws {Error} - Throws an error if a loan with the same equipment ID already exists.
 * @returns {Promise} - a promise that resolves with a reference to the newly added document.
 */
export async function saveLoan (data) {
  const duplicateQuery = query(loansRef,
    // checks if there already is a loan with the same equipment ID
    where('equipmentId', '==', data.equipmentId)
  )

  const existing = await getDocs(duplicateQuery)

  if (!existing.empty) {
    throw new Error('Denna utlåning finns redan.')
  }

  return await addDoc(loansRef, data)
  // throw new Error('Simulerat fel')
}

/**
 * Gets all loans from Firestore database.
 *
 * @returns {Promise} - a promise that resolves to an array of loan objects, each including its document ID.
 */
export async function getLoans () {
  const snapshot = await getDocs(loansRef)
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

/**
 * Gets loans with a specifik equipment id.
 *
 * @param {string} id - the equipment id
 * @returns {object} - a loan from the database
 */
export async function getLoanByEquipmentId (id) {
  const q = query(loansRef, where('equipmentId', '==', id))
  const snapshot = await getDocs(q)

  if (snapshot.empty) return null

  const docData = snapshot.docs[0]
  return {
    id: docData.id,
    ...docData.data()
  }
}

/**
 * Deletes a loan from the database.
 *
 * @param {string} loanId - the ID of the loan to delete.
 */
export async function deleteLoanById (loanId) {
  const loanDocRef = doc(database, 'loans', loanId)
  await deleteDoc(loanDocRef)
  // throw new Error('Simulerat fel')
}
