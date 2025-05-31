import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-black text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-4">
        {/* Teksti */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} MyCompanyName. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
