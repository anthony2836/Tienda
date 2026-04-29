export function createAxiosClient(options = {}) {
  const { baseURL = '', headers = {}, token = null } = options;

  // Minimal axios-like client used only for server calls in the app.
  return {
    async get(path) {
      const url = `${baseURL}${path}`;
      const resp = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...(headers || {}),
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      if (!resp.ok) {
        const err = new Error('Request failed');
        err.status = resp.status;
        try { err.data = await resp.json(); } catch(e) { err.data = null; }
        throw err;
      }
      return resp.json();
    }
  };
}
