import { Bicicleta } from './bicicleta'
import { Cliente } from './cliente'
import { Aluguel } from './aluguel'

export class SistemaAluguelBikes {
    private bicicletas: Bicicleta[] = [];
    private clientes: Cliente[] = [];
    private alugueis: Aluguel[] = [];

    cadastrarBicicleta(num: number, modelo: string) {
        const bicicleta = new Bicicleta(num, modelo);
        this.bicicletas.push(bicicleta);
    }

    cadastrarCliente(num: number, nome: string) {
        const cliente = new Cliente(num, nome);
        this.clientes.push(cliente);
    }

    alugarBicicleta(clientenum: number, bicicletanum: number) {
        const cliente = this.clientes.find(c => c.num === clientenum);
        const bicicleta = this.bicicletas.find(b => b.num === bicicletanum);

        if (cliente && bicicleta && bicicleta.disponivel) {
            bicicleta.disponivel = false;
            const aluguel = new Aluguel(this.alugueis.length + 1, cliente, bicicleta, new Date());
            this.alugueis.push(aluguel);
            console.log(`Bicicleta alugada para ${cliente.nome}.`);
        } else {
            console.log("Não foi possível alugar a bicicleta.");
        }
    }

    exibirBicicletasDisponiveis() {
        const bicicletasDisponiveis = this.bicicletas.filter(b => b.disponivel);
        if (bicicletasDisponiveis.length > 0) {
            console.log("Bicicletas disponíveis:");
            bicicletasDisponiveis.forEach(b => console.log(`${b.num} - ${b.modelo}`));
        } else {
            console.log("Nenhuma bicicleta disponível no momento.");
        }
    }
}
