class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque genérico';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
const mago = new Heroi('Merlin', 100, 'mago');
const guerreiro = new Heroi('Conan', 35, 'guerreiro');
const monge = new Heroi('Li', 40, 'monge');
const ninja = new Heroi('Hanzo', 30, 'ninja');

mago.atacar(); // Saída: O mago atacou usando magia
guerreiro.atacar(); // Saída: O guerreiro atacou usando espada
monge.atacar(); // Saída: O monge atacou usando artes marciais
ninja.atacar(); // Saída: O ninja atacou usando shuriken
