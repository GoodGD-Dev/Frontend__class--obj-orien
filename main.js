// Abstrações
function Veiculo(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.acelera = function() {
        console.log(this.modelo + " VRUUUUM");
    }
}

// Herença
function Moto(marca, modelo, ano, cilindrada) {
    this.cilindrada = cilindrada;

    Veiculo.call();
}

function Carro(marca, modelo, ano, portas) {
    this.portas = portas;

    Veiculo.call();
}

// Instâncias
const veiculo1 = new Veiculo("Fiat", "Uno", "2021");
const moto1 = new Moto("Honda", "Sahara 300", "2024", "162 cc");
const carro1 = new Carro("Fiat", "Uno", "2021", "4 Portas");
veiculo1.acelera();

console.log(veiculo1);
console.log(moto1);