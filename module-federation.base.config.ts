export function shared(pkg: string) {
  // Don't share this package; each app can load its own version.
  if (pkg === '@mf-store-apps/ui') return false;
}
