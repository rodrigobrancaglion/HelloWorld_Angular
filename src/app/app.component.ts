import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  // TypeScript
  title = 'progetto';
  eta : number = 10;
  esiste : boolean = false;
  qualsiasi : any;
  nomiArray : string[] = [];

  ngOnInit() {

    // TypeScript
    this.title = 'progetto';
    this.eta = 20;
    this.esiste = false
    this.qualsiasi = "test";
    this.nomiArray.push("test");

    this.corsoAngula(222, "test222");
  }

  corsoAngula(eta: number, nome: string) : boolean {
    console.log(eta);
    console.log(nome);
    return true;
  }
}
