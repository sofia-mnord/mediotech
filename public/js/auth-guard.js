import { auth } from './firebase-init.js'
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js'

/**
 * Protects a page from unauthenticated access by redirecting the user
 * to login-page if not authenticated.
 */
export function requireAuthentication () {
  onAuthStateChanged(auth, user => {
    if (!user) {
      window.location.href = 'login.html'
    }
  })
}

/**
 * Redirects the user to start page if they are authenticated.
 * Only used on the login page.
 */
export function redirectAuthenticatedUser () {
  onAuthStateChanged(auth, user => {
    if (user) {
      window.location.href = 'index.html'
    }
  })
}
