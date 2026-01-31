import ContactHero from "../components/common/ContactHero";
import ContactForm from "../components/common/ContactForm";
import ContactSocials from "../components/common/ContactSocials";

export default function Contact() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ContactHero />

        <div className="grid gap-16 md:grid-cols-2">
          <ContactForm />
          <ContactSocials />
        </div>
      </div>
    </section>
  );
}
