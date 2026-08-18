function withProtocol(value: string) {
  return value.startsWith('http://') || value.startsWith('https://')
    ? value
    : `https://${value}`;
}

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

  return withProtocol(configuredUrl || vercelUrl || 'http://localhost:3000').replace(/\/$/, '');
}
