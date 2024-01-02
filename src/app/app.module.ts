import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { FormsModule } from '@angular/forms';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoFormularioComponent,
    ListaAlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
