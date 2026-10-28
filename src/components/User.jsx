import React, { use } from "react";

const User = ({ usersPromise }) => {
  const users = use(usersPromise());
  return (
    <div>
      User Components
      <p>User length : {users.length}</p>
      <div className="m-5 ">
        {users.map((user) => (
          <div className="p-2 m-2 rounded-[10px] bg-gray-200" key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
