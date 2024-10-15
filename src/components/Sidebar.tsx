import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function Sidebar() {
  const { isAuthenticated, user, isLoading, login, register } = useKindeAuth();

  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p className="text-sm">
              Logged in as <strong>{user?.email}</strong>
            </p>
            <Button buttonType="secondary" type="button">
              Log out
            </Button>
          </>
        ) : (
          <>
            <Button buttonType="secondary" type="button" handleAuth={login}>
              Log in
            </Button>
            <Button buttonType="secondary" type="button" handleAuth={register}>
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
}

export default Sidebar;

// onClick={login} onClick={register}
// onClick={() => {
//   handleLogout();
//   logout();
// }}
