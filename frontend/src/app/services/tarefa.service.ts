import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  listarTarefas() {
  return this.http.get(`${this.apiUrl}/tarefas`);
}

adicionarTarefa(titulo: string) {
  return this.http.post(`${this.apiUrl}/tarefas`, {
    titulo: titulo
  });
}

editarTarefa(id: number, titulo: string) {
  return this.http.put(`${this.apiUrl}/tarefas/${id}`, {
    titulo: titulo
  });
}

excluirTarefa(id: number) {
  return this.http.delete(`${this.apiUrl}/tarefas/${id}`);
}

}
