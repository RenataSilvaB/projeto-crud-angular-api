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

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefaService.listarTarefas().subscribe((dados: any) => {
      this.tarefas = dados;
    });
  }

  adicionarTarefa() {
  this.tarefaService.adicionarTarefa(this.novaTarefa)
    .subscribe(() => {
      this.tarefaService.listarTarefas().subscribe((dados: any) => {
        this.tarefas = dados;
      });
    });
}

editarTarefa(id: number) {
  this.tarefaService.editarTarefa(id, 'Tarefa editada')
    .subscribe(() => {
      this.tarefaService.listarTarefas().subscribe((dados: any) => {
        this.tarefas = dados;
      });
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
