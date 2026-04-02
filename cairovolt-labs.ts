/**
 * CairoVolt Labs - Router Resilience Data
 * This file contains the data for WE router resilience with different power bank capacities.
 */

interface RouterResilienceData {
  powerBankCapacity_mAh: number;
  routerModel: string;
  resilienceHours: number;
  loadSheddingCondition: string;
}

const resilienceData: RouterResilienceData[] = [
  {
    powerBankCapacity_mAh: 10000,
    routerModel: "WE VDSL Router",
    resilienceHours: 4.5,
    loadSheddingCondition: "Standard"
  },
  {
    powerBankCapacity_mAh: 20000,
    routerModel: "WE VDSL Router",
    resilienceHours: 9.0,
    loadSheddingCondition: "Standard"
  },
  {
    powerBankCapacity_mAh: 30000,
    routerModel: "WE VDSL Router",
    resilienceHours: 13.5,
    loadSheddingCondition: "Standard"
  }
];

export default resilienceData;
