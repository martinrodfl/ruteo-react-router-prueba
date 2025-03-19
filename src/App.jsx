import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Tasks } from "./pages/Tasks";
import { LoginPage } from "./pages/LoginPage";
import { NoPage } from "./pages/NoPage";
import { Settings } from "./pages/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
