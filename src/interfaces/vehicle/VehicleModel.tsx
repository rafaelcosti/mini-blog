import VehicleBrand from "./VehicleBrand";

/**
 * 
 */
export default interface VehicleModel {
  modelId: number | null;
  description: string | null; 
  brand: VehicleBrand | null;
}