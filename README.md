# APP

GymPass Style App.


## RFS - Requisitos Funcionais

- [x] Deve ser possível se cadastrar.
- [x] Deve ser possível se autenticar.
- [x] Deve ser possível obter o perfil de um usuário logado.
- [x] Deve ser possível obter o número de check-ins realizados pelo o usuário logado.
- [x] Deve ser possível o usuário obter seu histórico de check-ins.
- [x] Deve ser possível o usuário buscar academias próximas.
- [x] Deve ser possível o usuário buscar academias pelo nome.
- [x] Deve ser possível o usuário realizar check-in em uma academia.
- [x] Deve ser possível validar o check-in de um usuário.
- [x] Deve ser possível cadastrar uma academia.

## RNS - Regras de Negócio

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado.
- [x] O usuário não poder fazer 2 check-ins no mesmo dia.
- [x] O usuário não poder fazer check-in se não tiver perto (100m) da academia.
- [ ] O check-in só pode ser validada até 20 minutos após criado.
- [ ] O check-in só pode ser validado por administradores.
- [ ] A academia só pode ser cadastrado por administradores.

## RNFS - Requisitos Não Funcionais

- [x] A senha do usuário precisa estar criptografada.
- [x] Os dados da aplicação precisam esta persistidos em um banco PostgreSQL.
- [x] Todas as listas de dados precisam esta listadas com 20 itens por página.
- [ ] O usuário deve ser identificado com JWT(Json Web Token)