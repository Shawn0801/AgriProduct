import { Data, Park, RootObject } from '../../interfaces/parking';
import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PlanetDatas, SportData } from 'src/app/interfaces/product';
import { SportService } from '../sport.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { concatMap, delay, from, of, switchMap, tap } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-sport-center-info',
  templateUrl: './sport-center-info.component.html',
  styleUrls: ['./sport-center-info.component.css']
})
export class SportCenterInfoComponent implements OnInit {



  constructor(
    private sportService: SportService,
    private fb: FormBuilder,
    private rf: ChangeDetectorRef,
  ) { }

  @ViewChild('error404', { static: true }) error404!: TemplateRef<any>;
  @ViewChild('error500', { static: true }) error500!: TemplateRef<any>;
  @ViewChild('defaultError', { static: true }) defaultError!: TemplateRef<any>;

  get searchWord() {
    return this.parkSearchform.get('searchWord');
  }


  errorMessage: string = 'Page not found';
  errorCode: number = 400;
  isDisabled: boolean = true;
  parkSearchform: FormGroup = this.fb.group({
    searchWord: [{ value: '', disabled: false }, [Validators.required, this.noWhitespaceValidator()]],
    gender: ['', Validators.required],
  });


  data: SportData[] = [];
  parkingdata: Park[] = [];
  taipeiParkingData: RootObject = {} as RootObject;

  selectedGender: string = 'FeMale';

  ngOnInit(): void {
    this.sportService.getParkingDetailData().subscribe(
      (res: RootObject) => {
        this.taipeiParkingData = res;
        console.log(this.taipeiParkingData);
        if (this.taipeiParkingData.data.park) {
          this.parkingdata = this.taipeiParkingData.data.park.slice(0, 16);
        }
      }
    );


    // 定義兩個 Observable，分別延遲 2000 毫秒和 1000 毫秒
    const a = of(1).pipe(delay(2000));
    const a1 = of(3).pipe(delay(1000));

    a1.pipe(
      // 使用 switchMap 來切換到內部的 Observable
      // 這個例子分開訂閱跟 concatMap 效果差不多
      switchMap(() => a),
    ).subscribe(a => console.log(a));



  }


  check() {
    console.log(this.parkSearchform.get('gender')?.value);
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

    this.parkSearchform.addValidators(this.noWhitespaceValidator2());
    this.parkSearchform.updateValueAndValidity();


  }

  handlePageEvent(e: PageEvent) {
    console.log(e);
  }



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
  onParkDataChange($event: RootObject) {
    console.log('接收到的更新停車場資料:', $event.data.park[0].id);
    this.searchWord?.patchValue($event.data.park[0].id);
  }

  noWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { whitespace: true };
    };
  }

  noWhitespaceValidator2(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const actionType = formGroup.get('searchWord') as FormControl;
      if (actionType.value === '1') {
        actionType.setErrors({ noGood: true });
      } else {
        actionType.setErrors(null);
      }
      return null;
    };
  }

}


