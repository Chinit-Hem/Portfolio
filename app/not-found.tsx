import Link from 'next/link';
import { LocalizedText } from '@/components/LocalizedText';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="container-custom max-w-2xl text-center">
        <div className="mb-4 text-6xl font-bold text-emerald-800 dark:text-emerald-300">
          404
        </div>
        <h1 className="mb-4 heading-lg text-slate-950 dark:text-white"><LocalizedText text="Page Not Found" /></h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          <LocalizedText text="The page you're looking for doesn't exist or has been moved." />
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-800 px-8 py-3 font-medium text-white smooth-transition hover:bg-emerald-900 dark:bg-emerald-400 dark:text-[#101714]"
        >
          <LocalizedText text="Back to Home" />
        </Link>
      </div>
    </div>
  );
}
