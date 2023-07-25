import PanelUser from "./components/PanelUser";
function App() {
  // const [dbUser, setDbUser] = useState<UserData[]>([]);
  // const addUser = (data: StateApp["addUser"]) => {
  //   setDbUser([...dbUser, data]);
  //   console.log("agrgado");
  // };
  // const deleteUser = (id: string) => {
  //   const foundUser = dbUser.filter((d) => d.id !== id);
  //   setDbUser([...foundUser]);
  // };

  // const updateUser = (data: StateApp["updateUser"]) => {
  //   const { id, name, username } = data;
  //   //La mejro forma es usando map
  //   const updatedUsers = dbUser.map((user) => {
  //     if (user.id === id) {
  //       return { ...user, name, username };
  //     }
  //     return user;
  //   });

  //   setDbUser(updatedUsers);
  // };

  return (
    <>
      {/* <button
        onClick={() =>
          updateUser({
            id: "1",
            name: "Rodrigo",
            username: "Rumpler",
          })
        }
      >
        actualizar
      </button>
      <button
        onClick={() =>
          addUser({
            id: "2",
            name: "2",
            username: "d",
          })
        }
      >
        Prueba
      </button>
      <button onClick={() => deleteUser("1")}>eliminado</button> */}
      <h1 className="font-extrabold text-red-600 ">Hola Aracely</h1>
      <div className="flex justify-center items-center min-h-screen ">
        <PanelUser/>
      </div>
    </>
  );
}

export default App;
