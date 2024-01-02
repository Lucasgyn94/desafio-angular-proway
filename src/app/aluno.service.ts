import { Injectable } from '@angular/core';
import { Aluno } from './Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  alunos: Aluno[] = [];

  cadastrarAluno(aluno: Aluno) {
    this.alunos.push(aluno);
  }
  
  obterAlunos(): Aluno[] {
    return this.alunos;
  }

  atualizarAluno(index: number, novoAluno: Aluno) {
    if (index >= 0 && index < this.alunos.length) {
      this.alunos[index] = novoAluno;
    }
  }

  excluirAluno(index: number) {
    this.alunos.splice(index, 1);
  }
}

