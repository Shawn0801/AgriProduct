import { Data, Park, RootObject } from './../../interfaces/parking';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PlanetDatas, SportData } from 'src/app/interfaces/product';
import { SportService } from '../sport.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sport-center-info',
  templateUrl: './sport-center-info.component.html',
  styleUrls: ['./sport-center-info.component.css']
})
export class SportCenterInfoComponent implements OnInit {

  @ViewChild('error404', { static: true }) error404!: TemplateRef<any>;
  @ViewChild('error500', { static: true }) error500!: TemplateRef<any>;
  @ViewChild('defaultError', { static: true }) defaultError!: TemplateRef<any>;

  get searchWord() {
    return this.parkSearchform.get('searchWord');
  }

  errorMessage: string = 'Page not found';
  errorCode: number = 400;

  getErrorTemplate() {
    switch (this.errorCode) {
      case 404:
        return this.error404;
      case 500:
        return this.error500;
      default:
        return this.defaultError;
    }
  }


  // readonly form = new FormGroup({
  //   myInput: new FormControl('', Validators.required),
  // });

  parkSearchform = this.fb.group({
    searchWord: ['', Validators.required],
  });

  constructor(
    private sportService: SportService,
    private fb: FormBuilder,
  ) { }


  data: SportData[] = [];
  parkingdata: Park[] = [];
  taipeiParkingData: RootObject | undefined;

  selectedGender: string = 'FeMale';

  ngOnInit(): void {

    this.sportService.getParkingDetailData().subscribe(
      (res: RootObject) => {
        this.taipeiParkingData = res;
        if (this.taipeiParkingData.data.park) {
          this.taipeiParkingData.data.park.forEach(e => console.log(e));
        }
      }
    );
  }

  selected(newValue: string) {
    console.log(newValue);
  }

  search() {
    console.log(this.searchWord?.value);
    if (this.searchWord?.value) {
      const searchData = this.taipeiParkingData?.data.park.filter(e => e.id === this.searchWord?.value) || [];

      console.log(searchData.forEach(e => console.log(e)));
      //     this.parkingdata = parkData.slice(0, 16);

      //   }
      // );


    }

  }

}
