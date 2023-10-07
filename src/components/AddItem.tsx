import { FormEvent } from "react";
import { FaPlus } from "react-icons/fa";

type AddProps = {
  newItem: string;
  setNewItem: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const AddItem = ({ newItem, setNewItem, handleSubmit }: AddProps) => {
  return (
    <form className="w-full mb-2 px-2" onSubmit={handleSubmit}>
      <div className="relative  mx-auto">
        <input
          autoFocus
          id="addItem"
          type="text"
          placeholder="Add Item"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className=" w-full rounded "
        />
        <button
          type="submit"
          aria-label="Add Item"
          className="text-black absolute right-0 top-1"
        >
          <FaPlus />
        </button>
      </div>
    </form>
  );
};

export default AddItem;
