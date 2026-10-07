import { Component, OnInit } from '@angular/core';
import { TarefaService } from './services/tarefa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tarefas: any[] = [];
  novaTarefa: string = '';
  tarefaEditandoId: number | null = null;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefaService.listarTarefas().subscribe((dados: any) => {
      this.tarefas = dados;
    });
  }

 adicionarTarefa() {
  this.tarefaService.adicionarTarefa(this.novaTarefa)
    .subscribe(() => {

      this.novaTarefa = '';

      this.tarefaService.listarTarefas().subscribe((dados: any) => {
        this.tarefas = dados;
      });
    });
}

  editarTarefa(id: number) {
    this.tarefaEditandoId = id;
  }

  salvarEdicao(tarefa: any) {
    this.tarefaService.editarTarefa(tarefa.id, tarefa.titulo)
      .subscribe(() => {
        this.tarefaEditandoId = null;
      });
  }

  excluirTarefa(id: number) {
    this.tarefaService.excluirTarefa(id)
      .subscribe(() => {
        this.tarefaService.listarTarefas().subscribe((dados: any) => {
          this.tarefas = dados;
        });
      });
  }

}
