// Minimal shim for @base44/sdk used by the app.
export function createClient(opts = {}) {
  // Return an object shaped similarly to the real SDK used by the app.
  return {
    auth: {
      async me() { return null; },
      logout(redirect) { if (redirect) window.location.href = redirect; },
      redirectToLogin(redirect) { window.location.href = `/login?next=${encodeURIComponent(redirect||window.location.href)}`; }
    },
    entities: {
      Product: {
        async filter() { return []; },
        async list() { return []; },
      }
    }
  }
}
