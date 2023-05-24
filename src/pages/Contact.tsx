import { ContactList, CreateContact } from "../components/Contact";

const Contact: React.FC = () => {
  return (
    <div className="w-[100%] mx-auto">
      <CreateContact />
      <ContactList />
    </div>
  );
};

export default Contact;
