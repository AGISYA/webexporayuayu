import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Description */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            Our Company is made up of a group of highly skilled and
            professionals who pays a lot of attention to small details. We’re
            working to build a future of shared success.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            Jl. Indonesia Raya, Sudirman, Jakarta Selatan, DKI Jakarta,
            Indonesia, 10150
          </p>
          <p className="text-gray-400">mail@example.com</p>
          <p className="text-gray-400">+991-0123456789</p>
        </div>

        {/* Working Hours & Social Media */}
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-lg font-bold mb-4">Working Hours</h3>
            <p className="text-gray-400">Mon - Fri: 9am - 5pm</p>
            <p className="text-gray-400">Sat & Sun: We are closed!</p>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6">
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="TikTok"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6">
        {/* Footer Note */}
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} Our Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
