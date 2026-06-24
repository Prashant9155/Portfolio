export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center">
          <h3 className="text-lg font-medium capitalize text-neutral-100 mb-4">
            Available for opportunities
          </h3>

          <p className="text-sm text-neutral-400 leading-relaxed max-w-md mx-auto mb-8">
            Frontend Engineer focused on building scalable web applications,
            delightful user experiences, and AI-powered products.
          </p>

          <p className="text-xs text-neutral-500">
            © {year} Prashant Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
