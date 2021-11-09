import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBaseComponent } from './layout-base/layout-base.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const EXPORTED = [LayoutBaseComponent];

@NgModule({
  declarations: [...EXPORTED],
  exports: [...EXPORTED],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
}) 
export class SharedModule {}
