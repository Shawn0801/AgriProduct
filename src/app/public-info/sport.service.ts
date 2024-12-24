import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PlanetDatas, SportData } from '../interfaces/product';
import { Park, RootObject } from '../interfaces/parking';


@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * @returns
   * 運動中心資料
   */
  getData(): Observable<SportData[]> {
    const apiUrl = '/api/opendata/sports_tms2.json';

    return this.http.get<SportData[]>(apiUrl);

  }


  /**
   * 停車位剩餘數量
   * @returns
   */
  getParkingData(): Observable<RootObject> {
    const apiUrl = '/parkingApi/blobtcmsv/TCMSV_allavailable.json';

    return this.http.get<RootObject>(apiUrl);

  }

  /**
   * 停車位資訊
   * @returns
   */
  getParkingDetailData(): Observable<RootObject> {
    const apiUrl = '/parkingApi/blobtcmsv/TCMSV_alldesc.json';
    return this.http.get<RootObject>(apiUrl);

  }


  /**
   * 圖鑑資料
   * @returns
   * https://data.moa.gov.tw/open_detail.aspx?id=047
   */
  getPlanetData(): Observable<any> {
    const apiUrl = '/planetApi/Service/OpenData/FromM/PestNoticeData.aspx';
    return this.http.get<any>(apiUrl);
  }

  /**
   * 空氣品質資料 error
   * @returns
   * https://data.gov.tw/dataset/145702
   */
  getAirData(): Observable<any> {

    const apiUrl = '/airApi/techdep/tldep_AQI_DAYHour.json';
    return this.http.get<any>(apiUrl);
  }



}
