import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import { FormEvent, useState } from "react";
import { Item } from "./model/Item";
import EditForm from "./components/EditForm";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist") as string) || ""
  );
  const [newItem, setNewItem] = useState("");
  const [edit, setEdit] = useState("");
  const [open, setOpen] = useState(false);
  const [_id, setId] = useState(0);

  const setAndSaveItems = (newItems: Item[]): void => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item: string) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id: number) => {
    const listItems = items.map((item: Item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((item: Item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const handleEditForm = () => {
    const id = _id;
    const listItem: Item = items.filter((item: Item) => item.id === id);
    const UpdatedItem = {
      id: id,
      checked: listItem.checked,
      item: edit,
    };
    const updatedList = items.filter((item: Item) => item.id !== id);
    setAndSaveItems([...updatedList, UpdatedItem]);
  };

  return (
    <div className="w-full lg:w-2/3 mx-auto min-h-screen bg-slate-500 py-4 lg:rounded-md relative ">
      <Header title="Todo List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        setId={setId}
        setEdit={setEdit}
        setOpen={setOpen}
      />

      {open && (
        <EditForm
          value={edit}
          setNewItem={setEdit}
          setOpen={setOpen}
          handleEditForm={handleEditForm}
        />
      )}
    </div>
  );
}

export default App;
