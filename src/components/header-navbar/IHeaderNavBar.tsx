import { ReactElement } from "react";
import ISbxRouter from "../sbx-router/ISbxRouter";

/**
 * 
 */
export default interface IHeaderNavBar {
  logo: ReactElement;
  items: Array<ISbxRouter> | null;
}