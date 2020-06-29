import { useContext } from 'react';
import { GlobalContext } from '../context'

export const useGlobalContext = () => {
  const globalContext = useContext(GlobalContext);

  return globalContext
}