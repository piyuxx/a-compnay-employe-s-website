import { useCreateContact } from "../../hooks";
import { Button } from "../commmon";
import ContactModal from "./ContactModal";

const CreateContact: React.FC = () => {
  const { onOpen, onClose, isOpen } = useCreateContact();

  return (
    <>
      <div className="bg-blue-500 py-4 text-white text-center">
        <h1 className="text-2xl font-semibold">Contact Page</h1>
      </div>
      <div className="grid place-items-center w-full my-16">
        <ContactModal isOpen={isOpen} onClose={onClose} />
        <Button content="Create Contact" onClick={onOpen} />
      </div>
    </>
  );
};

export default CreateContact;

