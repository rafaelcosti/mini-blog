import VehicleVersion from "./VehicleVersion";

/**
 * 
 */
export default interface Vehicle {
  licensePlate: string | null;
  version: VehicleVersion | null; 
}