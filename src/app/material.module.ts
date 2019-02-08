import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule
  ],
  exports :[
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule
  ]
})
export class MaterialModule { }
