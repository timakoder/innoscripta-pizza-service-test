import axios from 'axios';
import Config from '../config';
import { parse, stringify } from 'qs';

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

export const setQueryParams = (params: Object): void => {
  const stringified = stringify(params);
  const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${stringified}`;
  window.history.pushState({ path: newUrl }, '', newUrl);
}

export const getQueryParams = <T>() => {
  return parse(window.location.search.slice(1)) as T;
}

export const buildPathToIcon = (icon: string): string => `/img/icons/${icon.trim().replace(/ /g, '_')}.svg`;