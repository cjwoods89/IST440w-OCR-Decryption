import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import {
  ButtonsModule,
  InputsModule,
  CardsModule,
  InputUtilitiesModule,
  IconsModule
} from 'angular-bootstrap-md';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { EncryptionModalComponent } from './components/encryption-modal/encryption-modal.component';

@NgModule({
  declarations: [
    ConfirmModalComponent,
    ProjectModalComponent,
    ProjectsListComponent,
    ProjectComponent,
    EncryptionModalComponent,
  ],
  imports: [
    CommonModule,
    InputsModule,
    InputUtilitiesModule,
    IconsModule,
    FormsModule,
    ButtonsModule,
    CardsModule
  ],
  exports: [ProjectsListComponent, ProjectComponent],
  providers: [],
  entryComponents: [
    ConfirmModalComponent,
      ProjectModalComponent,
      EncryptionModalComponent
  ]
})
export class SharedModule {}
