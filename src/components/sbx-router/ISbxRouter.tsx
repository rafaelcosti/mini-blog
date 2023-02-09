import { ReactElement, ReactNode } from "react";

/**
 * 
 */
export default interface ISbxRouter { 
  ico?: ReactElement | null;
  description: String;
  path: string;
  element: ReactNode;
  hiddenLogged: boolean;
  hiddenLogout: boolean;
  internal: boolean;
  profiles?: Array<number>;
}