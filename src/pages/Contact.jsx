import ContactHero from "../components/common/ContactHero";
import ContactForm from "../components/common/ContactForm";
import ContactSocials from "../components/common/ContactSocials";

export default function Contact() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-blue-950/20 dark:via-neutral-900 dark:to-purple-950/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <ContactHero />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
         
          <div className="order-1 lg:order-2">
            <ContactSocials />
          </div>
           <div className="order-2 lg:order-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
