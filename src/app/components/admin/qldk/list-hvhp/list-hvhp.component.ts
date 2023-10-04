import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-hvhp',
  templateUrl: './list-hvhp.component.html',
  styleUrls: ['./list-hvhp.component.css'],
})
export class ListHVHPComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      dshvhp: any;
    },
    private dialogRef: MatDialogRef<ListHVHPComponent>
  ) {}

  closePopup() {
    this.dialogRef.close();
  }
}
