import 'server-only';

import { existsSync } from 'node:fs';
import { join } from 'node:path';

export function hasProjectImage(imagePath: string) {
  const relativePath = imagePath.replace(/^\//, '');
  return existsSync(join(process.cwd(), 'public', relativePath));
}
