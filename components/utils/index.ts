import axios from 'axios';
import Config from '../config';

export const isMobile = () => {
  return window.innerWidth < Config.mobileBreakpoint;
}

export const debounce = (timeout: number) => (func: (...params: any[]) => void) => {
  let timer: NodeJS.Timeout;

  return (...params: any[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => func(...params), timeout);
  }
}

export const axiosInstance = axios.create({
  baseURL: Config.api.baseUrl
})