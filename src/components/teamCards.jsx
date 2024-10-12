// components/TestimonialCard.js
import Image from 'next/image';

export default function TeamCards() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg max-w-sm mx-auto shadow-md">
      <div className="flex items-center">
        <Image
          src="/path/to/image.jpg" // Replace with the correct path
          alt="Ryan Florence"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold">Ryan Florence</h4>
          <p className="text-sm text-gray-400">Remix & React Training</p>
        </div>
      </div>
      <p className="mt-4 text-gray-300">
        I feel like an idiot for not using Tailwind CSS until now.
      </p>
    </div>
  );
}
