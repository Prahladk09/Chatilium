import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore"
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import config from "../config";

const Navbar = () => {
  const { logOut, authUser } = useAuthStore();
  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opecity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex justify-center items-center">
                <MessageSquare className="size-5 text-primary" />
              </div>
              <div className="text-lg font-bold">{config.appName}</div>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link to={"/settings"} className={`btn btn-sm gap-2 transition-colors`}>
              <Settings className="w-4 h-4" />
              <span className="hidded sm:inline">Settings</span>
            </Link>
            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidded sm:inline">Profile</span>
                </Link>
                <button onClick={logOut} style={{cursor: "pointer"}} className="flex gap-2 items-center">
                  <LogOut className="size-5" />
                  <span className="hidded sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
