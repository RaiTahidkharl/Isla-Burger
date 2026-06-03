"use client";

import React, { createContext, useContext, useMemo, useState } from 'react';

export const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description, duration = 3000 }) => {
    const id = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, title, description }]);

    window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const value = useMemo(
    () => ({ toast, toasts, removeToast }),
    [toasts]
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function Toaster() {
  const context = useContext(ToastContext);
  if (!context) return null;

  const { toasts, removeToast } = context;
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed right-4 top-4 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="max-w-sm rounded-3xl border border-black/10 bg-white p-4 shadow-xl shadow-black/5"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold text-slate-950">{toast.title}</p>
              {toast.description && (
                <p className="mt-1 text-sm text-slate-600">{toast.description}</p>
              )}
            </div>
            <button
              className="text-sm font-semibold text-slate-500 hover:text-slate-900"
              onClick={() => removeToast(toast.id)}
            >
              Close
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
