import { Component, OnInit } from '@angular/core';
import { Aluno } from '../Aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-formulario',
  templateUrl: './aluno-formulario.component.html',
  styleUrls: ['./aluno-formulario.component.css']
})
export class AlunoFormularioComponent implements OnInit {

  novoAluno: Aluno = {nome: '', nota1: 0, nota2: 0};

  constructor(
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
  }

  cadastrarAluno(){
    this.alunoService.cadastrarAluno(this.novoAluno);
    this.novoAluno = {nome: '', nota1: 0, nota2: 0};
  }

}


