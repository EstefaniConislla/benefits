import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddProfileComponent } from '../add-profile.component';

@Component({
  selector: 'app-modal-successful',
  templateUrl: './modal-successful.component.html',
  styleUrls: ['./modal-successful.component.scss'],
})
export class ModalSuccessfulComponent {
  constructor(private dialogRef: MatDialogRef<AddProfileComponent>) {}

  closeModal() {
    this.dialogRef.close();
  }
}
