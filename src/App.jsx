import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import PropertyPage from "./properties/PropertyPage";
import StarredPage from "./starred/StarredPage";
import NotFound from "./elements/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/properties" element={<PropertyPage/>}/>
      <Route path="/starred" element={<StarredPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};

export default App;
