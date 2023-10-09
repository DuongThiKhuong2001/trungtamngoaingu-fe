import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-class',
  templateUrl: './detail-class.component.html',
  styleUrls: ['./detail-class.component.css'],
})
export class DetailClassComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      lopHoc: any;
    },
    private dialogRef: MatDialogRef<DetailClassComponent>
  ) {}

  closePopup() {
    this.dialogRef.close();
  }
}
