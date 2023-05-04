import { createContext, useMemo, useState } from "react";

const UserContext = createContext();

export const ContextProvider = (props) => {
  const [user, setUser] = useState();
  const value = useMemo(() => ({ user, setUser }), [user]);
  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
};

export default UserContext;
