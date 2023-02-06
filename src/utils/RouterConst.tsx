import ISbxRouter from "../components/sbx-router/ISbxRouter";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";

/**
 * 
 */
export class RouterConst {
  /**
   * 
   */
  static navigation(apiKey: string) : Array<ISbxRouter> {
    return [
      { description: "Home"   , path: ""        , element: <Home/>   , hidden: false, internal: false, ico: null },
      { description: "Sobre"  , path: "/about"  , element: <About/>  , hidden: false, internal: false, ico: null },
      { description: "Contato", path: "/contact", element: <Contact/>, hidden: false, internal: false, ico: null }
    ];
  }
}