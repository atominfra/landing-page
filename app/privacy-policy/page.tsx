import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 lg:py-16 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Privacy Policy</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300 text-center">Last updated on Nov 28th 2024</p>
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">This privacy policy sets out how AMBITION FORGE PRIVATE LIMITED uses and protects any information that you give AMBITION FORGE PRIVATE LIMITED when you visit their website and/or agree to purchase from them.</p>
          
          <p className="mb-4">AMBITION FORGE PRIVATE LIMITED is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.</p>
          
          <p className="mb-6">AMBITION FORGE PRIVATE LIMITED may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes.</p>
          
          <h2 className="text-2xl font-semibold mb-4">We may collect the following information:</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Name</li>
            <li>Contact information including email address</li>
            <li>Demographic information such as postcode, preferences and interests, if required</li>
            <li>Other information relevant to customer surveys and/or offers</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">What we do with the information we gather</h2>
          <p className="mb-4">We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Internal record keeping.</li>
            <li>We may use the information to improve our products and services.</li>
            <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
            <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.</li>
          </ul>
          
          <p className="mb-6">We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.</p>
          
          <h2 className="text-2xl font-semibold mb-4">How we use cookies</h2>
          <p className="mb-4">A cookie is a small file which asks permission to be placed on your computer&apos;s hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>

          
          <p className="mb-4">We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.</p>
          
          <p className="mb-6">Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.</p>
          
          <h2 className="text-2xl font-semibold mb-4">Controlling your personal information</h2>
          <p className="mb-4">You may choose to restrict the collection or use of your personal information in the following ways:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
            <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us</li>
          </ul>
          
          <p className="mb-4">We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.</p>
          
          <p className="mb-6">If you believe that any information we are holding on you is incorrect or incomplete, please write to 235 Binnamangala, 13th Cross Road, 2nd Stage, Indiranagar Bengaluru KARNATAKA 560038 or contact us as soon as possible. We will promptly correct any information found to be incorrect.</p>
          
          <p className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg"><strong>Disclaimer:</strong> The above content is created at AMBITION FORGE PRIVATE LIMITED&apos;s sole discretion. Razorpay shall not be liable for any content provided here and shall not be responsible for any claims and liability that may arise due to merchant&apos;s non-adherence to it.</p>

        </div>
      </main>
    </div>
  )
}

