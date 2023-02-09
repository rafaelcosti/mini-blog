import ISbxRouter from "../components/sbx-router/ISbxRouter";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Dashboard from "../pages/dashboard/Model";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import CreatePost from "../pages/post/create-post/CreatePost";
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
      { description: "Home"     , path: ""            , element: <Home/>      , hiddenLogged: false, hiddenLogout: false, internal: false, ico: null },
      { description: "Dashboard", path: "/dashboard"  , element: <Dashboard/> , hiddenLogged: false, hiddenLogout: true , internal: false, ico: null },
      { description: "Cadastrar", path: "/register"   , element: <Register/>  , hiddenLogged: true , hiddenLogout: false, internal: false, ico: null },
      { description: "Login"    , path: "/login"      , element: <Login/>     , hiddenLogged: true , hiddenLogout: false, internal: false, ico: null },
      { description: "Novo Post", path: "/post/create", element: <CreatePost/>, hiddenLogged: false, hiddenLogout: true , internal: false, ico: null },
      { description: "Sobre"    , path: "/about"      , element: <About/>     , hiddenLogged: false, hiddenLogout: false, internal: false, ico: null },
      { description: "Contato"  , path: "/contact"    , element: <Contact/>   , hiddenLogged: false, hiddenLogout: false, internal: false, ico: null }
    ];
  }
}