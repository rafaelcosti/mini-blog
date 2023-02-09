import Vehicle from "../vehicle/Vehicle";

/**
 * 
 */
export default interface User {
  id?: number | null;
  name?: string | null;
  email?: string | null;
  emailVerified: boolean;
  profile?: number | null;
  vehicles?: Array<Vehicle> | null;
  logged: boolean;
}