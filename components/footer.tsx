import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full flex justify-center py-6 bg-gradient-to-t from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
            © 2024 Ambition Forge. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400" href="/terms-of-service">
              Terms of Service
            </Link>
            <Link className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400" href="/privacy-policy">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

