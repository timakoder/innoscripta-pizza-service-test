export enum Environment {
  production = 'production',
  development = 'development'
}

export const getEnvironment = (): Environment =>
  process.env.NODE_ENV === 'production'
    ? Environment.production
    : Environment.development;
