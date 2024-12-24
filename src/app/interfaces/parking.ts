export interface Park {
  id: string;
  area: string;
  name: string;
  type: string;
  type2: string;
  summary: string;
  address: string;
  tel: string;
  payex: string;
  serviceTime: string;
  tw97x: string;
  tw97y: string;
  totalcar: number;
  totalmotor: number;
  totalbike: number;
  totalbus: number;
  Pregnancy_First: string;
  Handicap_First: string;
  totallargemotor: string;
  ChargingStation: string;
  Taxi_OneHR_Free: string;
  AED_Equipment: string;
  CellSignal_Enhancement: string;
  Accessibility_Elevator: string;
  Phone_Charge: string;
  Child_Pickup_Area: string;
  FareInfo: any;
  EntranceCoord: any;
}

export interface ChargeStation {
  scoketStatusList: SocketStatus[];
}

export interface SocketStatus {
  spot_abrv: string;
  spot_status: string;
}

export interface Data {
  UPDATETIME: string;
  park: Park[];
}

export interface RootObject {
  data: Data;
}
