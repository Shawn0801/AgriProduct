export interface Park {
  id: string;
  availablecar: number;
  availablemotor: number;
  availablebus: number;
  ChargeStation?: ChargeStation;
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
