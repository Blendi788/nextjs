import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../assets/images/Logo.src.png";
import classNames from "classnames";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const items = [
    { name: "Home", pathName: "/" },
    { name: "About", pathName: "/about" },
    { name: "Contact Us", pathName: "/contact" },
    { name: "Blogs", pathName: "/blogs" },
    { name: "News", pathName: "/news" },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src={Logo.src} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {items.map((item, index) => (
              <Link key={index} href={item.pathName}>
                <span
                  className={classNames(
                    "inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors",
                    router.pathname === item.pathName
                      ? "text-purple-600 border-b-2 border-purple-600"
                      : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {status === "authenticated" ? (
              <button
                onClick={() => signOut({ callbackUrl: "/sign-in" })}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              >
                Dil
              </button>
            ) : (
              <>
                <button
                  onClick={() => router.push("/sign-up")}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                >
                  Regjistrohu
                </button>
                <button
                  onClick={() => router.push("/sign-in")}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-purple-600 bg-white hover:bg-gray-50 border-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                >
                  Kyçu
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
