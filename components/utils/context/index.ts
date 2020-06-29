import React from 'react';

export type GlobalContextType = {
  isMobile: boolean
}

export const GlobalContext = React.createContext<GlobalContextType>({
  isMobile: false
})