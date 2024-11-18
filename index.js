const readline = require('readline-sync');

// Array para armazenar os funcionários
let funcionarios = [];

// Função para adicionar um funcionário ao array
function adicionarFuncionario(id, nome, cargo, taxaHoraria) {
    const funcionario = {
        id: id,
        nome: nome,
        cargo: cargo,
        taxaHoraria: taxaHoraria,
        horasTrabalhadas: [] // Array vazio para registrar horas trabalhadas
    };
    funcionarios.push(funcionario);
}

// Função para registrar horas trabalhadas
function registrarHoras(id, horas) {
    const funcionario = funcionarios.find(func => func.id === id);
    if (funcionario) {
        funcionario.horasTrabalhadas.push(horas);
    } else {
        console.log(`Funcionário com ID ${id} não encontrado.`);
    }
}

// Função para calcular o valor do INSS
function calcularInss(salarioBruto) {
    let inss = 0;
    if (salarioBruto <= 1412.00) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2666.68) {
        inss = (1412.00 * 0.075) + ((salarioBruto - 1412.00) * 0.09);
    } else if (salarioBruto <= 4000.03) {
        inss = (1412.00 * 0.075) + ((2666.68 - 1412.00) * 0.09) + ((salarioBruto - 2666.68) * 0.12);
    } else if (salarioBruto <= 7786.02) {
        inss = (1412.00 * 0.075) + ((2666.68 - 1412.00) * 0.09) + ((4000.03 - 2666.68) * 0.12) + ((salarioBruto - 4000.03) * 0.14);
    } else {
        inss = 908.85; // Teto do INSS
    }
    return inss.toFixed(2);
}

// Função para gerar o relatório de pagamento
function gerarRelatorioPagamento() {
    console.log("===== RELATÓRIO DE PAGAMENTO =====");
    funcionarios.forEach(funcionario => {
        const totalHoras = funcionario.horasTrabalhadas.reduce((total, horas) => total + horas, 0);
        const salarioBruto = totalHoras * funcionario.taxaHoraria;
        const valorInss = calcularInss(salarioBruto);
        const salarioLiquido = salarioBruto - valorInss;
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Cargo: ${funcionario.cargo}`);
        console.log(`Total de Horas: ${totalHoras}`);
        console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
        console.log(`Valor do INSS: R$ ${valorInss}`);
        console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
        console.log("-----------------------------");
    });
}

// Função principal para gerenciar o sistema de folha de pagamento
function gerenciarFolhaPagamento() {
    let continuar = true;

    while (continuar) {
        console.log("\n===== SISTEMA DE FOLHA DE PAGAMENTO =====");
        console.log("1. Adicionar Funcionário");
        console.log("2. Registrar Horas Trabalhadas");
        console.log("3. Exibir Relatório de Pagamento");
        console.log("4. Sair");
        const escolha = readline.question("Escolha uma opcao (1-4): ");

        switch (escolha) {
            case "1":
                console.log("=== Adicionar Funcionário ===");
                const id = parseInt(readline.question("Digite o ID do funcionário: "));
                const nome = readline.question("Digite o nome do funcionário: ");
                const cargo = readline.question("Digite o cargo do funcionário: ");
                const taxaHoraria = parseFloat(readline.question("Digite a taxa horária do funcionário: "));
                adicionarFuncionario(id, nome, cargo, taxaHoraria);
                console.log(`Funcionário ${nome} adicionado com sucesso.`);
                break;

            case "2":
                console.log("=== Registrar Horas Trabalhadas ===");
                const idHoras = parseInt(readline.question("Digite o ID do funcionário: "));
                const horas = parseFloat(readline.question("Digite o número de horas trabalhadas: "));
                registrarHoras(idHoras, horas);
                console.log(`Horas registradas com sucesso para o funcionário com ID ${idHoras}.`);
                break;

            case "3":
                console.log("=== Relatório de Pagamento ===");
                gerarRelatorioPagamento();
                break;

            case "4":
                console.log("Saindo do sistema de folha de pagamento...");
                continuar = false;
                break;

            default:
                console.log("Opção inválida. Por favor, escolha uma opção entre 1 e 4.");
        }
    }
}

// Inicia o sistema de folha de pagamento
gerenciarFolhaPagamento();
