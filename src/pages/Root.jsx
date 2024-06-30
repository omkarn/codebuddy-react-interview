import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#633BBC]">
      <Outlet />
    </div>
  );
};

export default Root;
