//[M2S01] Ex 2 - Cadastro de Funcionários
// Definindo o array para armazenar a lista de funcionários
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
    
    funcionarios.push(funcionario); // Adiciona o funcionário ao array de funcionários
}

// Teste: Adicionando alguns funcionários ao array
adicionarFuncionario(1, "Alice", "Desenvolvedora", 50);
adicionarFuncionario(2, "Bruno", "Designer", 40);
adicionarFuncionario(3, "Carla", "Gerente de Projeto", 60);
adicionarFuncionario(4, "Alexandro", "UX", 20);
adicionarFuncionario(5, "Myla", "Teste", 30);

// Exibindo o array de funcionários no console
console.log(funcionarios);
