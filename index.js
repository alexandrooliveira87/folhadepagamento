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




// [M2S01] Ex 3 - Registro de Horas Trabalhadas

// Função para registrar horas trabalhadas
function registrarHoras(id, horas) {
    // Localiza o funcionário pelo id
    const funcionario = funcionarios.find(func => func.id === id);
    
    // Verifica se o funcionário existe
    if (funcionario) {
        funcionario.horasTrabalhadas.push(horas); // Adiciona as horas ao array
    } else {
        console.log(`Funcionário com ID ${id} não encontrado.`);
    }
}

// Teste: Registrando horas trabalhadas para alguns funcionários
registrarHoras(1, 8);  // id 1 trabalhou 8 horas
registrarHoras(2, 6);  // id 2 trabalhou 6 horas
registrarHoras(1, 5);  // id 1 trabalhou mais 5 horas
registrarHoras(3, 7);  // id 3  trabalhou 7 horas
registrarHoras(4, 7);  // id 4  trabalhou 7 horas
registrarHoras(5, 3);  // id 5 trabalhou 6 horas
registrarHoras(1, 3);  // id 1 trabalhou 6 horas
registrarHoras(2, 6);  // id 2 trabalhou 6 horas

// Exibindo o array de funcionários no console
console.log(funcionarios);


// Função para calcular o salário mensal de um funcionário
function calcularSalarioMensal(id) {
    // Localiza o funcionário pelo id
    const funcionario = funcionarios.find(func => func.id === id);
    
    // Verifica se o funcionário existe
    if (funcionario) {
        // Soma as horas trabalhadas
        const totalHoras = funcionario.horasTrabalhadas.reduce((total, horas) => total + horas, 0);
        // Calcula o salário mensal
        const salario = totalHoras * funcionario.taxaHoraria;
        return salario;
    } else {
        console.log(`Funcionário com ID ${id} não encontrado.`);
        return null; // Retorna null caso o funcionário não seja encontrado
    }
}

// Teste: Calculando o salário mensal de alguns funcionários
console.log(`Salário de Alice: R$ ${calcularSalarioMensal(1)}`); // Funcionário com id 1
console.log(`Salário de Bruno: R$ ${calcularSalarioMensal(2)}`); // Funcionário com id 2
console.log(`Salário de Carla: R$ ${calcularSalarioMensal(3)}`); // Funcionário com id 3
console.log(`Salário de Alexandro: R$ ${calcularSalarioMensal(4)}`); // Funcionário com id 4
console.log(`Salário de Myla: R$ ${calcularSalarioMensal(5)}`); // Funcionário com id 5
