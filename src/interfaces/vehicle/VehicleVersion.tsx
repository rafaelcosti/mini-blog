import VehicleModel from "./VehicleModel";

/**
 * 
 */
export default interface VehicleVersion {
  idVersion: number | null;
  version: string | null;
  model: VehicleModel | null;
}