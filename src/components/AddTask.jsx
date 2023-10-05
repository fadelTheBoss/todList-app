const AddTask = () => {
  
  return (
    <div className="">
      <form action="" className="p-2 flex gap-2 ">
        <input type="text" placeholder="ajouer une tache" className="p-2 border border-[#e6e7f3] flex-1  rounded-lg text-center outline-none " />
        <button type="submit" className="hover:scale-90" >
          Ajouter 
        </button>
      </form>
    </div>
  );
};

export default AddTask;
