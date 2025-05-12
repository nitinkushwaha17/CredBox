export function isDevEnv() {
  return process.env.EXPO_PUBLIC_APP_VARIANT == "Development";
}
