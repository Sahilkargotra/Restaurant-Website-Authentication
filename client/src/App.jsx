import './App.css'
import {Route,Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import Layout from './pages/Layout.jsx';
import RegisterPage from './pages/Register.jsx';
import  axios  from "axios";
import { UserContextProvider } from './UserContext.jsx';
import AccountPage from './pages/AccountPage.jsx';

axios.defaults.baseURL = 'http://localhost:4000' 
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
    
    <Routes>
      <Route path = "/" element = {<Layout />}>
      <Route index element ={<IndexPage />} />
      <Route path = "/login" element = {<LoginPage />} />
      <Route path = "/register" element = {<RegisterPage />} />
      <Route path = "/account/:subpage?" element = {<AccountPage />} />
      </Route>
    </Routes>
    </UserContextProvider>
  )
}

export default App
