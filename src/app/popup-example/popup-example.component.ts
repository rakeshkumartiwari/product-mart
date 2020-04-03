import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'pm-popup-example',
  templateUrl: './popup-example.component.html',
  styleUrls: ['./popup-example.component.scss']
})
export class PopupExampleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }

}
