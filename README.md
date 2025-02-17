Consultor IA - Frontend

🚀 Interface web para interagir com modelos de IA e obter respostas inteligentes!
📌 Descrição do Projeto

O Consultor IA é uma aplicação frontend desenvolvida com Next.js, permitindo que os usuários façam perguntas e obtenham respostas de múltiplos modelos de IA.
A aplicação consome uma API backend que processa as perguntas e retorna as respostas, incluindo a melhor resposta baseada em uma avaliação automatizada.

Repositório do back-end: https://github.com/Filipi0/Desafio_llms.git

A interface foi construída para ser intuitiva, e testada no notebook/desktop.
🛠 Tecnologias Utilizadas

    Next.js (React Framework)
    TypeScript (Tipagem estática para melhor manutenção)
    CSS Modules (Estilização isolada por componente)
    Fetch API (Consumo da API backend)
    Next/Image (Otimização de imagens)
    Git/GitHub (Controle de versão)

💻 Como Rodar o Projeto Localmente
🔹 1. Clonar o repositório

git clone https://github.com/Filipi0/Desafio_llms_front.git
cd Desafio_llms_front

🔹 2. Instalar as dependências

npm install

🔹 3. Criar o arquivo de variáveis de ambiente

No diretório do projeto, crie um arquivo .env.local e adicione:

NEXT_PUBLIC_API_URL=https://desafio-llms.onrender.com

Isso garante que o frontend saiba para onde enviar as requisições.
🔹 4. Rodar o projeto

npm run dev

A aplicação estará disponível em http://localhost:3000.
📌 Como Testar a Aplicação

    Acesse http://localhost:3000
    Digite uma pergunta no campo de texto
    Clique em "Consultar"
    Aguarde as respostas dos modelos de IA
    Veja qual modelo deu a melhor resposta
