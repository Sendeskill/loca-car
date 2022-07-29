import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-rounting.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxMaskModule } from 'ngx-mask';
import { MAT_DATE_LOCALE } from '@angular/material/core';



@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioCadastroComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'},
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    UsuarioRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MaterialFileInputModule,
    MatMenuModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSortModule,
    MatStepperModule,
    MatToolbarModule,
    MatTooltipModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxMaskModule,
    ColorPickerModule,
    MaterialFileInputModule,
  
  ]
})
export class UsuarioModule { }
