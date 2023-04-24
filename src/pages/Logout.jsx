import { useDispatch, useSelector } from "react-redux"
import { logoutAction } from "../reduxstore/slices/userSlice";
const Logout = () => {
  const dispatch=useDispatch();
  const handleLogout=async()=>{
    await dispatch(logoutAction({
      loggedIn:false
    }))
  }
      const {username}=useSelector(state=>state.user)
  return (
    <div className="flex flex-col justify-center ">
      <h1 className="text-3xl mb-4 text-center">Welcome <span className="text-red-900">{username}</span></h1>
      <button onClick={handleLogout}  className="border-[1px] border-zinc-700 bg-slate-700 p-1 rounded-xl text-white font-bold hover:bg-slate-500">Logout</button>
    </div>
  )
}

export default Logout