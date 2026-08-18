import { spawn } from 'node:child_process';
import { networkInterfaces } from 'node:os';

const args = process.argv.slice(2);

function getOptionValue(shortName, longName) {
  const shortIndex = args.indexOf(shortName);
  const longIndex = args.indexOf(longName);
  const index = shortIndex >= 0 ? shortIndex : longIndex;
  return index >= 0 ? args[index + 1] : undefined;
}

function getNetworkAddress() {
  const interfaces = networkInterfaces();
  const preferredNames = ['en0', 'en1'];
  const names = [...preferredNames, ...Object.keys(interfaces)];

  for (const name of names) {
    const address = interfaces[name]?.find(
      (entry) => entry.family === 'IPv4' && !entry.internal
    );
    if (address) return address.address;
  }

  return null;
}

const port = getOptionValue('-p', '--port') || process.env.PORT || '3000';
const hasHostname = args.includes('-H') || args.includes('--hostname');
const nextArgs = ['dev', ...(hasHostname ? [] : ['-H', '0.0.0.0']), ...args];
const networkAddress = getNetworkAddress();

if (networkAddress) {
  console.log(`\n  - Network:      http://${networkAddress}:${port}\n`);
} else {
  console.log('\n  - Network:      No active LAN address detected\n');
}

const child = spawn(process.execPath, ['node_modules/next/dist/bin/next', ...nextArgs], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NEXT_DIST_DIR: '.next-dev',
    NEXT_ALLOWED_DEV_ORIGIN: networkAddress || '',
  },
});

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 0);
});
