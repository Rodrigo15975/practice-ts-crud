import AddUsers from "./AddUsers";

const PanelUser = () => {
  return (
    <>
      <div className="bg-white basis-[50rem]  min-h-[50rem] ">
        <div className="flex justify-end">
          <AddUsers />
        </div>
        <div className="flex justify-center">
          <h2>Worker list</h2>
        </div>
      </div>
    </>
  );
};

export default PanelUser;
