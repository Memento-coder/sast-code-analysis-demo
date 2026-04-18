# Análise SAST

## Vulnerabilidade identificada

O código apresenta falha de validação de entrada do usuário.

O parâmetro "name" é recebido diretamente da requisição HTTP e retornado na resposta sem qualquer sanitização.

## Risco

- Cross-Site Scripting (XSS)
- Injeção de dados maliciosos

## Evidência

Entrada manipulada pode alterar a resposta da aplicação.

## Classificação

Alta severidade
