'use client';
import React from 'react';

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <section className=" border-red-500 bg-red-100 text-red-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          {/* <h2 className="dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">500</h2> */}
          <p className="mb-4 text-3xl font-bold">Something went wrong!</p>
          <p className="mb-4 text-lg font-light">{error.message}</p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
          >
            Try again
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorBoundary;
