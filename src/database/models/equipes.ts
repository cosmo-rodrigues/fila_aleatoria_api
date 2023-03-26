import { v4 as uuidv4 } from 'uuid';

import { IJogador, Jogador } from './jogadores';

interface IEquipe {
  id: string;
  nome: string;
  jogadores: IJogador[];
}

export class Equipe implements IEquipe {
  public id: string;
  public nome: string;
  public jogadores: IJogador[] = [];

  constructor(data: IEquipe) {
    this.id = data.id || uuidv4();
    this.nome = data.nome;
    this.jogadores = data.jogadores || [];
  }

  public listarJogadores(): IJogador[] | null {
    return this.jogadores;
  }

  public listarJogadorPeloId(id: string): IJogador | null {
    return this.jogadores.find((jogador) => jogador.id === id) || null;
  }

  public adicionarJogador(jogador: IJogador): void {
    if (this.listarJogadorPeloId(jogador.id)) {
      throw new Error(`Jogador com ID ${jogador.id} já existe no time`);
    }

    this.jogadores.push(jogador);
  }

  public removerJogador(id: string): void {
    const index = this.jogadores.findIndex((jogador) => jogador.id === id);

    if (index === -1) {
      throw new Error(`Jogador com ID ${id} não existe no time`);
    }

    this.jogadores.splice(index, 1);
  }
}

export function gerarNumerosAleatorios(): number[] {
  const numeros: number[] = [];
  while (numeros.length < 11) {
    const numeroAleatorio = Math.floor(Math.random() * 11) + 1;
    if (!numeros.includes(numeroAleatorio)) {
      numeros.push(numeroAleatorio);
    }
  }
  return numeros;
}

export function gerarTime(): IJogador[] {
  const numeros = gerarNumerosAleatorios();
  const time = numeros.map((numero) => {
    const fakeJogador = {
      id: `${numero}`,
      nome: `Jogador ${numero}`,
      nascimento: `${
        new Date().getFullYear() - new Date(1990 + numero).getFullYear()
      }`,
      altura: `1.8${numero}`,
      peso: `8${numero}Kg`,
      equipe: 'Esse Time',
      melhor_habilidade: 'jogar',
    };
    const jogador = new Jogador(fakeJogador);
  
    return jogador;
  });

  return time;
}
