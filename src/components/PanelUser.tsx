import AddUsers from "./AddUsers";
import { PropsDbUser } from "./Interfaces/Interfaces";

const PanelUser = ({ propsDbUser }: PropsDbUser) => {
  return (
    <>
      <div className="bg-white basis-[50rem]  min-h-[50rem] ">
        <div className="flex justify-end">
          <AddUsers />
        </div>
        <div className="flex justify-center flex-col">
          <div className="text-center">
            <h2 className="font-extrabold text-3xl">Worker list</h2>
          </div>
          <div className="flex flex-col flex-auto ">
            <div>
              {propsDbUser?.map((data) => (
                <div key={data.id}>
                  <h2>{data.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelUser;
