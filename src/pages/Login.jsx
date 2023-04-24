import { useDispatch } from "react-redux";
import { onChangeValue } from "../reduxstore/slices/userSlice";
import { loginAction } from "../reduxstore/slices/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    // You can add conditions to not submit empty value into it by using useSelector to access states
    // I am using required keyword in input elements 
    dispatch(
      loginAction({
        loggedIn: true,
      })
    );
  };
  const handleChange = (event) => {
    dispatch(
      onChangeValue({
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <section className="flex flex-col justify-center">
      <h1 className="text-2xl text-center mb-3 font-bold">Login Redux</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center text-1xl"
      >
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          onChange={handleChange}
          className="p-2 mb-2 outline-none border-black border-[1px] rounded-lg"
          required
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          className="p-2 mb-2 outline-none border-black border-[1px] rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handleChange}
          className="p-2 mb-2 outline-none border-black border-[1px] rounded-lg"
          required
        />
        <button
          type="submit"
          className="border-[1px] border-zinc-700 bg-slate-700 p-1 rounded-xl text-white font-bold hover:bg-slate-500"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
