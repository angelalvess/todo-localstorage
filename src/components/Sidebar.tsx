import AddTodoForm from "./AddTodoForm";

import Button from "./Button";

import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useTodoContext } from "../lib/hooks/useTodoContext";

function Sidebar() {
  const { handleLogout } = useTodoContext();
  const { login, register, isAuthenticated, logout, user, isLoading } =
    useKindeAuth();

  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p className="text-sm">
              Logged in as <strong>{user?.email}</strong>
            </p>
            <Button
              buttonType="secondary"
              type="button"
              onClick={() => {
                handleLogout();
                logout();
              }}
            >
              Log out
            </Button>
          </>
        ) : (
          <>
            <Button buttonType="secondary" type="button" onClick={login}>
              Log in
            </Button>
            <Button buttonType="secondary" type="button" onClick={register}>
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
}

export default Sidebar;
