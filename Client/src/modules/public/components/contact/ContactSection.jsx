import Header from "../../../../shared/components/Header";
import ContactCard from "./ContactCard";
import ContactInfoCard from "./ContactInfoCard";

const ContactSection = () => {
  return (
    <>
      <Header>Kontakt</Header>
      <div className="grid grid-cols-2 gap-20">
        <ContactCard />
        <ContactInfoCard />
      </div>
    </>
  );
};

export default ContactSection;
