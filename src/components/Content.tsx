import { Item } from "../model/Item";
import ItemList from "./ItemList";

type ListProps = {
  items: Item[];
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
  setId: React.Dispatch<React.SetStateAction<number>>;
  setEdit: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Content = ({
  items,
  handleCheck,
  handleDelete,
  setId,
  setEdit,
  setOpen,
}: ListProps) => {
  return (
    <main className=" mx-6">
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          setId={setId}
          setEdit={setEdit}
          setOpen={setOpen}
        />
      ) : (
        <p className="mt-8 text-red-300 text-xl">No Todos Found.</p>
      )}
    </main>
  );
};

export default Content;
