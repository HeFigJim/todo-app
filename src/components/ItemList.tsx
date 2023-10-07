import { AiTwotoneEdit } from "react-icons/ai";
import { Item } from "../model/Item";
import { FaTrashAlt } from "react-icons/fa";

type ListProps = {
  items: Item[];
  handleCheck: (item: number) => void;
  handleDelete: (item: number) => void;
  setId: React.Dispatch<React.SetStateAction<number>>;
  setEdit: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ItemList = ({
  items,
  handleCheck,
  handleDelete,
  setId,
  setEdit,
  setOpen,
}: ListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="text-white flex justify-between my-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label className="ml-1" onDoubleClick={() => handleCheck(item.id)}>
              {item.item}
            </label>
          </div>
          <div className="flex items-center">
            <button
              aria-label="Edit Item"
              className="text-white hover: hover:text-yellow-300"
              onClick={() => {
                setId(item.id);
                setEdit(item.item);
                setOpen(true);
              }}
            >
              <AiTwotoneEdit />
            </button>
            <div className=" hover:text-red-600">
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
