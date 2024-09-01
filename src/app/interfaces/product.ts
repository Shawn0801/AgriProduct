export interface SportData {
  Area: string;
  Name: string;
  NameEng: string;
  SportType: string;
  Address: string;
  AddressEng: string;
  startTime: string;
  endTime: string;
  LocalCallService: string;
}


export interface IRootInterface {
  traceCode: string;
  producer: string;
  address: string;
  mark: string;
  url: string;
  description: string;
  status: string;
  modifyDate: string;
}


export interface PlanetDatas {
  電編編號: string;
  收件日期: string;
  拉丁目別: string;
  中文目別: string;
  拉丁科別: string;
  中文科別: string;
  害蟲中文名: string;
  害蟲英文名: string;
  害蟲學名: string;
  口器: string;
  縣市中文名: string;
  縣市英文名: string;
  鄉鎮中文名: string;
  鄉鎮英文名: string;
  鑑定者中文名: string;
  鑑定者英文名: string;
  危害_根: string;
  危害_莖: string;
  危害_葉: string;
  危害_花: string;
  危害_果: string;
  危害_整株: string;
  其他: string;
  作物代碼: string;
  作物名稱: string;
  作物學名: string;
  作物別名: string;
  作物拉丁科名: string;
  作物中文科名: string;
  圖檔: string;
}


