import { ReactElement, ReactNode } from "react";

/**
 * 
 */
export default interface ISbxRouter { 
  ico?: ReactElement | null;
  description: String;
  path: string;
  element: ReactNode;
  hidden: boolean;
  internal: boolean;
}