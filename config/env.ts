export type AppEnv = 'development' | 'staging' | 'production';

export function getAppEnv(): AppEnv {
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV?.toLowerCase();

  if (appEnv === 'production') return 'production';
  if (appEnv === 'staging') return 'staging';

  return 'development';
}

export function getLrrUrl(): string {
  return getAppEnv() === 'production'
    ? 'https://lrr.ninelm.com'
    : 'https://staging.lrr.ninelm.com';
}
