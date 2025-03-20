import { createContext, useContext } from "react";

// Crear contexto
export const DashboardContext = createContext();

export function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider"
    );
  }
  return context;
}
