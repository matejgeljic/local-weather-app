import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule
  ],
  exports :[
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule
  ]
})
export class MaterialModule { }
