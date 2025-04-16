"use client";
import ContactFormulario from "@/components/contact-form";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";

const ContactComponent = () => {
  return (
    <div>
      <TransitionPage />

      <ContainerPage>
        <div className="min-h-screen pt-8 pb-32 px-4">
          <ContactFormulario />
        </div>
      </ContainerPage>
    </div>
  );
};

export default ContactComponent;
