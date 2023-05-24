
import { useAppSelector } from "../../redux/store/hooks";
import ContactCard from "./ContactCard";

const ContactList: React.FC = () => {
  const contacts = useAppSelector((state) => state.contacts.contacts);

  return (
    <>
       
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {contacts.map(({ id, firstName, lastName, status }) => (
            <ContactCard
              key={id}
              id={id}
              firstName={firstName}
              lastName={lastName}
              status={status}
            />
          ))}
        </div>
      
    </>
  );
};

export default ContactList;
