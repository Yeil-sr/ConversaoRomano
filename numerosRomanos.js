class NumerosRomanos {
    constructor() {
        this.unidades = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        this.dezenas = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
        this.centenas = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
        this.milhares = ["", "M", "MM", "MMM"];

        this.valoresRomanos = new Map([
            ['I', 1],
            ['V', 5],
            ['X', 10],
            ['L', 50],
            ['C', 100],
            ['D', 500],
            ['M', 1000]
        ]);
    }

    converterParaRomano(numero) {
        if (isNaN(numero) || numero < 1 || numero > 3999) {
            throw new Error("O número deve estar entre 1 e 3999 e ser um inteiro válido.");
        }

        let resultado = "";
        let milharesDigit = Math.floor(numero / 1000);
        let centenasDigit = Math.floor((numero % 1000) / 100);
        let dezenasDigit = Math.floor((numero % 100) / 10);
        let unidadesDigit = numero % 10;

        resultado += this.milhares[milharesDigit];
        resultado += this.centenas[centenasDigit];
        resultado += this.dezenas[dezenasDigit];
        resultado += this.unidades[unidadesDigit];

        return resultado;
    }

    converterParaInteiro(romano) {
        let resultado = 0;
        for (let i = 0; i < romano.length; i++) {
            if (i + 1 < romano.length && this.valoresRomanos.get(romano[i]) < this.valoresRomanos.get(romano[i + 1])) {
                resultado -= this.valoresRomanos.get(romano[i]);
            } else {
                resultado += this.valoresRomanos.get(romano[i]);
            }
        }

        return resultado;
    }

    isRoman(input) {
        return /^[IVXLCDM]+$/.test(input);
    }

    processarEntrada(input) {
        return this.isRoman(input) ? this.converterParaInteiro(input) : parseInt(input);
    }

    adicionar(input1, input2) {
        const numero1 = this.processarEntrada(input1);
        const numero2 = this.processarEntrada(input2);
        const soma = numero1 + numero2;
        return soma;
    }

    subtrair(input1, input2) {
        const numero1 = this.processarEntrada(input1);
        const numero2 = this.processarEntrada(input2);
        const diferenca = numero1 - numero2;
        if (diferenca < 1) {
            throw new Error("A diferença não pode ser menor que 1 em números romanos.");
        }
        return diferenca;
    }

    multiplicar(input1, input2) {
        const numero1 = this.processarEntrada(input1);
        const numero2 = this.processarEntrada(input2);
        const produto = numero1 * numero2;
        return produto;
    }

    dividir(input1, input2) {
        const numero1 = this.processarEntrada(input1);
        const numero2 = this.processarEntrada(input2);
        if (numero2 === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        const quociente = Math.floor(numero1 / numero2);
        if (quociente < 1) {
            throw new Error("O quociente não pode ser menor que 1 em números romanos.");
        }
        return quociente;
    }

    converterResultado(resultado, operation) {
        switch (operation) {
            case 'convertToRoman':
                return this.converterParaRomano(resultado);
            case 'convertToInteger':
                return resultado.toString();
            default:
                return resultado;
        }
    }
}

module.exports = NumerosRomanos;
