import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [NavBarComponent],
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule],
  exports: [NavBarComponent],
})
export class NavBarModule {}
