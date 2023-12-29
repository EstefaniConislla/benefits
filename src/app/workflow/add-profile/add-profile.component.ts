import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSuccessfulComponent } from './modal-successful/modal-successful.component';
@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss'],
})
export class AddProfileComponent {
  perfilActivo = false;
  tipoPerfil = 'Administrador';
  funciona = true;
  panelOpenState = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalSuccessfulComponent, {});
    dialogRef.afterClosed().subscribe({});
  }
}
