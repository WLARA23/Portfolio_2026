import { ContactSection } from '../components/organisms/ContactSection';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <div
        className="relative py-28 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/headers/contact.png')" }}
      >
        <div className="absolute inset-0 bg-dark/60" />
        <div className="relative z-10">
          <p className="text-white/70 text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Let's Talk
          </p>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">Contact</h1>
          <p className="text-white/70 max-w-md mx-auto px-6 md:px-12">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
