import React from "react";

const UserContext = React.createContext({
  name: "John Doe",
});

const Profile = () => {
  const context = React.useContext(UserContext);
  return <div>{context.name}</div>;
};

const UseContext = () => {
  return (
    <UserContext.Provider value={{ name: "Jane Doe" }}>
      <Profile />
    </UserContext.Provider>
  );
};

export default UseContext;
