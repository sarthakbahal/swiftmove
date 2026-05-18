import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div id="home" className="bg-[#0f0f0f] text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
