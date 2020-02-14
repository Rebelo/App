#language: pt-br

Funcionalidade: Fazer Login

	Eu como cliente quero fazer login no sistema

Contexto: 
	Dado que já me cadastrei no sistema
		E estou na tela de login do sistema


	Esquema do Cenário: Fazer login com sucesso
		Dado que digitei meu <usuario> e minha <senha>
		Quando eu clicar em entrar
		Então estarei logado


		Exemplos:
		| usuario | senha | 
		| "user1"        | "abc"  | 
		| "user2"        | "abc"  | 


	Esquema do Cenario: Tentar fazer login com dados incorretos
		Dado que digitei meu <usuario> e minha <senha>
		Quando eu clicar em entrar
		Então estarei não estarei logado
			E o sistema exibirá uma mensagem de erro

		Exemplos:
		| usuario | senha | 
		| "user1z"        | "abc"  | 
		| "user2x"        | "abc"  | 

	Esquema do Cenario: Tentar fazer login com dados faltantes
		Dado que digitei meu <usuario> e minha <senha>
		Quando eu clicar em entrar
		Então estarei não estarei logado
			E o sistema exibirá uma mensagem de que é necessário preencher ambos os campos

		Exemplos:
		| usuario | senha | 
		| "user1z"        | ""  | 
		| ""        | "abc"  | 