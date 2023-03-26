import { v4 as uuidv4 } from 'uuid';

export interface IJogador {
  id: string;
  nome: string;
  nascimento: string;
  altura: string;
  peso: string;
  equipe: string;
  melhor_habilidade: string;
}

export class Jogador implements IJogador {
  public id: string;
  public nome: string;
  public nascimento: string;
  public altura: string;
  public peso: string;
  public equipe: string;
  public melhor_habilidade: string;

  constructor(data: Jogador) {
    this.id = data.id || uuidv4();
    this.nome = data.nome;
    this.nascimento = data.nascimento;
    this.altura = data.altura;
    this.peso = data.peso;
    this.equipe = data.equipe;
    this.melhor_habilidade = data.melhor_habilidade;
  }

  private calcularIdade(): string {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const anoNascimento = new Date(this.nascimento).getFullYear();
    return `${anoAtual - anoNascimento}`;
  }

  idade(): string {
    return this.calcularIdade();
  }
}
