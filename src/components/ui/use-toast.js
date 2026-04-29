import * as React from "react"

const TOAST_LIMIT = 1

let count = 0
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }
    case "DISMISS_TOAST": {
      const { toastId } = action
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined ? { ...t, open: false } : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) return { ...state, toasts: [] }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

export function useToast() {
  const [state, setState] = React.useState({ toasts: [] })

  const toast = React.useCallback(({ ...props }) => {
    const id = genId()
    setState((prev) => reducer(prev, { type: "ADD_TOAST", toast: { ...props, id, open: true } }))
  }, [])

  return {
    ...state,
    toast,
    dismiss: (toastId) => setState((prev) => reducer(prev, { type: "DISMISS_TOAST", toastId })),
  }
}