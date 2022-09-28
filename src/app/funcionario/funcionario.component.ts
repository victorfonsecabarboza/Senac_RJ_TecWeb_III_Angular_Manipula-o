import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  @Input() nome !: String;
  @Input() isMasculino !: boolean;
  @Input() idade !: number;
  isLogado: boolean = true;

  @Input() tipoFuncionario: String = "Administrador";

  @Input() sobreNome !: String;

  estados = ['Rio de Janeiro', 'São Paulo', 'Minas Gerais']

  tiposPessoa = [
    { id: 1, descricao: 'Carioca' },
    { id: 2, descricao: 'Paulista' },
    { id: 3, descricao: 'Mineiro' }
  ]

  @Input() comboBox !: String;

  constructor() { }

  ngOnInit(): void {
  }

}
