export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-10">
      <div className="container mx-auto px-6 lg:px-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            Your one-stop platform for real-time cricket scores, match updates,
            and player statistics. Stay updated with every ball!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Live Scores
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Match Highlights
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook-f">🔵</i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter">🔷</i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram">🟠</i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-linkedin-in">🔗</i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Live Cricket Score. All Rights Reserved.
      </div>
    </footer>
  );
}
