import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import { VerifyUserByEmailLink } from "./pages/VerifyUserByEmailLink";
import { ChangeUserPassword } from "./pages/ChangeUserPassword";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { CreateWorkSpaceFlow } from "./pages/CreateWorkSpaceFlow"
import Workspace from "./pages/WorkSpace";
import AddSocialMediaAccounts from "./pages/AddSocialMediaAccounts";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="verify/verify-email/:tokenId"
          element={<VerifyUserByEmailLink />}
        ></Route>
        <Route
          path="verify/forgot-password/:token"
          element={<ChangeUserPassword />}
        ></Route>
        <Route path="create-workspace-name" element={<CreateWorkSpaceFlow />} >
        <Route path="" element={<Workspace />} />
        <Route path="add-socialmedia-accounts" element={<AddSocialMediaAccounts />} />
        </Route>
        <Route></Route>
        <Route path="*" element={<ProtectedRoute />}>
          <Route path="" element={<Dashboard />}></Route>
        </Route>
      </Routes>

      <Toaster />
    </Router>
  );
}

export default App;
