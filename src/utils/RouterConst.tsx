import ISbxRouter from "../components/sbx-router/ISbxRouter";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

/**
 * 
 */
export class RouterConst {
  /**
   * 
   */
  static navigation(apiKey: string) : Array<ISbxRouter> {
    return [
      { description: "Home"     , path: ""         , element: <Home/>    , hidden: false, internal: false, ico: null },
      { description: "Cadastrar", path: "/register", element: <Register/>, hidden: false, internal: false, ico: null },
      { description: "Login"    , path: "/login"   , element: <Login/>   , hidden: false, internal: false, ico: null },
      { description: "Sobre"    , path: "/about"   , element: <About/>   , hidden: false, internal: false, ico: null },
      { description: "Contato"  , path: "/contact" , element: <Contact/> , hidden: false, internal: false, ico: null }
    ];
  }
}