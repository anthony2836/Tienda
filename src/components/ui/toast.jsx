import * as React from "react"
import { cn } from "@/lib/utils"

export const ToastProvider = ({ children }) => <>{children}</>
export const ToastViewport = ({ className }) => (
  <div className={cn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className)} />
)

export const Toast = ({ className, ...props }) => (
  <div className={cn("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all bg-background text-foreground", className)} {...props} />
)

export const ToastTitle = ({ className, ...props }) => <div className={cn("text-sm font-semibold", className)} {...props} />
export const ToastDescription = ({ className, ...props }) => <div className={cn("text-sm opacity-90", className)} {...props} />
export const ToastClose = () => <button className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100">✕</button>