import { SistemaAluguelBikes } from './sistemaaluguelbikes'

const sistema = new SistemaAluguelBikes();
sistema.cadastrarBicicleta(1, "Bike A");
sistema.cadastrarBicicleta(2, "Bike B");
sistema.cadastrarCliente(1, "João");
sistema.cadastrarCliente(2, "Maria");

sistema.exibirBicicletasDisponiveis();
sistema.alugarBicicleta(1, 1);
sistema.exibirBicicletasDisponiveis();
