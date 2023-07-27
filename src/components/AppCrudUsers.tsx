import { useEffect, useState } from "react";
import PanelUser from "./PanelUser";
import { getFetchUsersDb } from "./Hooks";

import { AppDbUsers } from "./Interfaces/Interfaces";

const AppCrudUsers = () => {
  const [dbUsers, setDbUsers] = useState<AppDbUsers[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const getUsers = await getFetchUsersDb();
        setDbUsers(getUsers);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, [dbUsers]);
  return (
    <>
      <PanelUser propsDbUser={dbUsers} />
    </>
  );
};

export default AppCrudUsers;
