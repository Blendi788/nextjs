import { motion } from "framer-motion";
import Image from "next/image";
import CustomImage from "@/assets/images/image.jpg";
import Button from "@/components/shared/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-purple-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Rreth Nesh
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ne jemi një ekip pasionant që ndërtojmë aplikacione moderne dhe të fuqishme me teknologji të avancuar.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-8">
              Misioni Ynë
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Misioni ynë është të ofrojmë zgjidhje inovative dhe të qëndrueshme për zhvillimin e aplikacioneve që përmbusin nevojat e klientëve tanë në mënyrë të plotë.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-12">
              Vizioni Ynë
            </h2>
            <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={CustomImage}
                alt="Vision illustration"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-16">
              Vlerat Tona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-purple-600 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-600">
                  Integriteti & Transparenca
                </h3>
              </div>

              <div className="border border-purple-600 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-600">
                  Pasioni për Teknologjinë
                </h3>
              </div>

              <div className="border border-purple-600 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-600">
                  Kujdesi për Përdoruesin
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-8">
              Na Kontaktoni
            </h2>
            <div className="space-y-4">
              <p className="text-lg">Email: contact@mycompany.com</p>
              <p className="text-lg">Tel: +383 123 456 789</p>
              <p className="text-lg">Adresa: Prishtinë, Kosovë</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

AboutPage.displayName = "About | My Application";
