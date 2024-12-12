import Link from "next/link"
import { Github, Linkedin } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-center border-b bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 backdrop-blur-sm dark:border-gray-800 ">
      <div className="container flex h-16 items-center justify-between max-w-7xl">
        <Link className="flex items-center space-x-2" href="/">
          <span className="font-bold text-xl text-blue-600 dark:text-blue-400">AtomInfra</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#ai-cloud-lab">
            AI Cloud Lab
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#team">
            Team
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#contact">
            Contact
          </Link>
          <Link href="https://github.com/atominfra" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/company/atominfra" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

