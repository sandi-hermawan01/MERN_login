import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const DashboardPage = () => {
  const { user } = useContext(UserContext);
  return (
    <section>
      <div className="flex flex-col justify-center items-center w-full h-56">
        <h1>Dashboard</h1>
        {!!user && <h2>Hi {user.name}!</h2>}
      </div>
    </section>
  );
};

export default DashboardPage;
