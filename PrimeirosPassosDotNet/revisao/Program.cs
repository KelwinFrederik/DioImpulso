// See https://aka.ms/new-console-template for more information
string? opcaoSelecionada = string.Empty; 
bool repetir = true;
List<revisao.Aluno> alunos = new List<revisao.Aluno>();

do{
    Console.Clear();
    Console.WriteLine("Escolha a opção desejada:");
    Console.WriteLine("0 - Sair");
    Console.WriteLine("1 - Inserir Alunos");
    Console.WriteLine("2 - Listar Alunos");
    Console.WriteLine("3 - Média Geral");
    Console.WriteLine();

    opcaoSelecionada = Console.ReadLine();

    if(!int.TryParse(opcaoSelecionada, out int numeroOpcao))
    {
        Console.WriteLine("Insíra um número válido.");
        Console.ReadKey();
        continue;
    }

    switch(numeroOpcao){
        case 0:
            repetir = false;
        break;
        case 1:
            string? nomeAluno = string.Empty;
            string? notaAluno = string.Empty;
            double notaAlunoDouble = 0;
            
            do
            {
                Console.WriteLine("Insira o nome do aluno:");
                nomeAluno = Console.ReadLine();
            }while(string.IsNullOrEmpty(nomeAluno));

            do
            {
                Console.WriteLine("Insira a nota do aluno:");
                notaAluno = Console.ReadLine();
            }while(!double.TryParse(notaAluno, out notaAlunoDouble));

            alunos.Add(new revisao.Aluno(){Nome = nomeAluno, Nota = notaAlunoDouble});
        break;
        case 2:
            foreach(var aluno in alunos)
            {
                Console.WriteLine($"{aluno.Nome} - Nota: {aluno.Nota} | Conceito: {revisao.Aluno.GetConceitoEnum(aluno.Nota)}");
            }
        break;
        case 3:
            double soma = 0;

            foreach(var aluno in alunos)
                soma += aluno.Nota;

            Console.WriteLine($"A média Geral dos alunos é: {soma / alunos.Count}");
            Console.WriteLine($"Conceito Geral é: {revisao.Aluno.GetConceitoEnum(soma / alunos.Count)}");
        break;
        default:
            Console.WriteLine("Insíra um número entre 0 e 3.");
            Console.ReadKey();
        break;
    }

    Console.Write("Precione qualquer tecla para continuar.");
    Console.ReadKey();
}while(repetir);


