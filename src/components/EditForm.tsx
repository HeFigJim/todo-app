type editProps = {
  value: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNewItem: React.Dispatch<React.SetStateAction<string>>;
  handleEditForm: () => void;
};

const EditForm = ({
  value,
  setOpen,
  setNewItem,
  handleEditForm,
}: editProps) => {
  return (
    <div className=" bg-slate-800  absolute w-full h-full top-0 ">
      <button
        className="text-xl text-red-500 ml-4"
        onClick={() => setOpen(false)}
      >
        x
      </button>
      <div
        /*  onSubmit={(e) => e.preventDefault()} */
        className="bg-white w-full h-4/6 rounded-full text-black relative highlight"
      >
        <form className="w-4/5 absolute top-40 left-1/2 -translate-x-1/2 text-center ">
          <label htmlFor="Edit">Edit Note</label>
          <br />
          <textarea
            id="Edit"
            rows={5}
            value={value}
            onChange={(e) => setNewItem(e.target.value)}
            className="bg-slate-100 w-full mx-2 resize-none overflow-y-auto "
          ></textarea>
          <button
            type="submit"
            onClick={handleEditForm}
            className="border-b-4 hover:text-red-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
