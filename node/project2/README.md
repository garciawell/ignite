# Cadastro de Carro

**RF**
- Deve ser possível cadastrar um novo carro


**RN**
- Não deve ser possivel cadastrar um carro com uma placa existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- O carro deve ser cadastrado disponível por padrão.
- Somente o admin pode cadastrar um novo carro.


# Listagem de carros

**RF**
- Deve ser possível listar somente os carros disponíveis.
- Deve ser possível listar todos os carros pela categoria.
- Deve ser possível listar todos os carros pela marca.
- Deve ser possível listar todos os carros pelo modelo.

**RN**
- O usuário não precisar estar logado no sistema.

# Cadastro de Especificação do carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificação.
- Deve ser possível listar todos os carros.

**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possivel cadastrar uma mesma especificação para o mesmo carro.
- Não deve ser possível cadastrar especificação repetida.
- Somente usuário administrador pode cadastrar 


# Cadastro de imagens do carro


**RF**
- Deve ser possível cadastrar a imagem do carro.
- Deve ser possível lsita todos os carros.

**RNF**
- Utilizar o multer para upload de arquivos.

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- Usuário administrador.



# Agendamento de carro


**RF**
- Deve ser possível cadastrar um agendamento

**RN**
- O agendamento deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo agendamento já existente para o mesmo usuário
- Não deve ser possível cadastrar um novo agendamento para um carro já agendado.