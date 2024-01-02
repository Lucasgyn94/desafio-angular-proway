import { Component, OnInit } from '@angular/core';
import { Aluno } from '../Aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  alunos: Aluno[] = [];
  alunoIndexEdicao: number = -1;
  alunoEmEdicao: Aluno = {nome: '', nota1: 0, nota2: 0}

  constructor(private alunoService: AlunoService) {
    this.alunos = alunoService.obterAlunos();
  }

  iniciarEdicao(index: number) {
    console.log('Iniciando edição para o índice:', index);
    this.alunoIndexEdicao = index;
    this.alunoEmEdicao = {...this.alunos[index]};
  }

  salvarEdicao() {
    if (this.alunoIndexEdicao !== -1) {
      this.alunoService.atualizarAluno(this.alunoIndexEdicao, this.alunoEmEdicao);
      this.alunoIndexEdicao = -1; // edição concluida
    }
  }

  cancelarEdicao() {
    this.alunoIndexEdicao = -1;
  }
  excluirAluno(index: number) {
    this.alunoService.excluirAluno(index);
  }

  calcularMedia(aluno: Aluno): number {
    const nota1 = aluno.nota1;
    const nota2 = aluno.nota2;
    const media = (nota1 + nota2) / 2;
    return media;
  }

  verificarCondicao(aluno: Aluno) {
    const media = this.calcularMedia(aluno);
    return media >= 6 ? "Aprovado" : "Reprovado";
   }

  
   ngOnInit(): void {
     
   }
}
