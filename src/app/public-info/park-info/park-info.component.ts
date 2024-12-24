import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonDialogComponent } from 'src/app/dialogs/common-dialog/common-dialog.component';
import { Park, RootObject } from 'src/app/interfaces/parking';

@Component({
  selector: 'app-park-info',
  templateUrl: './park-info.component.html',
  styleUrls: ['./park-info.component.css']
})
export class ParkInfoComponent implements OnInit {


  constructor(private dialog: MatDialog) { }

  @Input() parkData: RootObject = {} as RootObject;
  @Output() parkDataChange = new EventEmitter<RootObject>();
  chooseParkData: RootObject = {} as RootObject;
  parkDataList: Park[] = [];
  displayedColumns: string[] = ['position', 'name', 'select'];

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('GO');
    console.log(changes);
    if (changes['parkData'].currentValue) {
      console.log('一');
      this.chooseParkData = changes['parkData'].currentValue;
    }
    if (changes['parkData']) {
      this.updateParkDataList();
    }
  }

  chooseItem() {
    this.parkDataChange.emit(this.chooseParkData);
  }


  updateParkDataList(): void {
    if (this.parkData && this.parkData.data && this.parkData.data.park) {
      this.parkDataList = [...this.parkData.data.park].slice(0, 16);
    } else {
      this.parkDataList = [];
    }
  }

  /**
   * openDialog()
   */
  openDialog(index: number): void {
    const ref = this.dialog.open(CommonDialogComponent, {
      width: '400px',
      data: { name: this.parkDataList[0].name, choosenIndex: index },
    });

    ref.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });

  }

  onRadioChange(arg0: any) {
    console.log(arg0);
  }


  cleaer() {

  }



}

