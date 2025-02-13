
const Footer =()=> {
  return (
    <footer className="bg-gray-100 text-black p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div>
          <h3 className="font-semibold">Product</h3>
          <ul className="space-y-2">
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions <span className="bg-gray-300 text-xs px-2 py-1 rounded-full">New</span></li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Company</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Resources</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Use cases</h3>
          <ul className="space-y-2">
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Social</h3>
          <ul className="space-y-2">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Legal</h3>
          <ul className="space-y-2">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-600">
        <p>&copy; 2077 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;