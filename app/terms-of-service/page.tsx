import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 lg:py-16 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Terms & Conditions</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300 text-center">Last updated on Nov 28th 2024</p>
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">For the purpose of these Terms and Conditions, The term &quot;we&quot;, &quot;us&quot;, &quot;our&quot; used anywhere on this page shall mean AMBITION FORGE PRIVATE LIMITED, whose registered/operational office is 235 Binnamangala, 13th Cross Road, 2nd Stage, Indiranagar Bengaluru KARNATAKA 560038 . &quot;you&quot;, &quot;your&quot;, &quot;user&quot;, &quot;visitor&quot; shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.</p>
          
          <p className="mb-4">Your use of the website and/or purchase from us are governed by following Terms and Conditions:</p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>The content of the pages of this website is subject to change without notice.</li>
            <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</li>
            <li>Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable.</li>
            <li>Our website contains material which is owned by or licensed to us. Reproduction is prohibited other than in accordance with the copyright notice.</li>
            <li>All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
            <li>Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.</li>
            <li>From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.</li>
            <li>You may not create a link to our website from another website or document without AMBITION FORGE PRIVATE LIMITED&apos;s prior written consent.</li>
            <li>Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.</li>
            <li>We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time</li>
          </ul>
          
          <p className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg"><strong>Disclaimer:</strong> The above content is created at AMBITION FORGE PRIVATE LIMITED&apos;s sole discretion. Razorpay shall not be liable for any content provided here and shall not be responsible for any claims and liability that may arise due to merchant&apos;s non-adherence to it.</p>
        </div>
      </main>
    </div>
  )
}

