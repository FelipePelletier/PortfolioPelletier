"use client";
import ContactFormulario from "@/components/contact-form";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";

const ContactComponent = () => {
  return (
    <div>
      <TransitionPage />

      <ContainerPage>
        <span className="text-bold text-secondary">Contacto</span>
        <ContactFormulario />
      </ContainerPage>
    </div>
  );
};

export default ContactComponent;
