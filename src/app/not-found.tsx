import Link from 'next/link';
import MainLayout from '@/layouts/MainLayout';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white">404</h1>
        <h2 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Page Not Found
        </h2>
        <p className="mb-8 max-w-md text-gray-600 dark:text-gray-400">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>
        <Button href="/" size="lg">
          Return Home
        </Button>
      </div>
    </MainLayout>
  );
}