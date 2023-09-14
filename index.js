arrayDoadores = [({nome: "Icaro", idade: "17", peso: "54", tipoSangue: "A-", dataDoacao: "17/09/2022"}),
({nome: "Akame", idade: "15", peso: "73", tipoSangue: "O-", dataDoacao: "09/04/2023"}),
({nome: "Bento", idade: "14", peso: "71", tipoSangue: "A+", dataDoacao: "23/12/2021"})]
function menu() {
  let opcao = Number(prompt(
      `===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
    1. Cadastrar doador
    2. Listar doadores
    3. Buscar doador por tipo sanguíneo
    4. Buscar doador por data da última doação
    5. Sair
    Escolha uma opção:`)
  )
  
  

  switch (opcao) {
    case 1:
      cadastrarDoador();
      break;
    case 2:
      listarDoadores();
      break;
    case 3:
      buscarTipoSangue();
      break;
    case 4:
      buscarPorData();
      break;
    case 5:
      
      break;

    default:
      alert("Opção inválida. Tente novamente.");
      menu();
  }
}


//CASE 1
function cadastrarDoador () {
  let nome = prompt("Digite seu nome:").toUpperCase()
  let idade = prompt("Digite sua idade:").toUpperCase()
  let peso = prompt("Insira seu peso:").toUpperCase()
  let tipoSangue = prompt("Digite seu tipo sanguíneo:").toUpperCase()
  let dataDoacao = prompt("Por fim, a data de sua última doação de sangue:").toUpperCase()

  arrayDoadores.push({nome: nome, idade: idade, peso: peso, tipoSangue: tipoSangue, dataDoacao: dataDoacao})
}

//CASE 2
function listarDoadores () {
  let lista = `
--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------

`
   for(doador of arrayDoadores){
     lista += `${doador.nome.padEnd(20)}|${doador.idade.padEnd(5)}|${doador.peso.padEnd(5)}|${doador.tipoSangue.padEnd(5)}|${doador.dataDoacao.padEnd(10)}
`

   }

lista += `-----------------------------------------------------------------`

prompt(lista) 
}

//CASE 3
function buscarTipoSangue (){

  let buscar = prompt(`Tipo sanguíneo a procurar:`)
  const listagem = []

  for(let doador of arrayDoadores){
    if(doador.tipoSangue.toUpperCase() === buscar.toUpperCase()){
      listagem.push(doador)
      }

  let lista = `
  --------------------
  LISTAGEM DE DOADORES COMPATÍVEIS:
  --------------------
  NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
  -----------------------------------------------------------------`


   for(let doador of listagem){
        lista += `${doador.nome}    |  ${doador.idade}   |  ${doador.peso}  |      ${doador.tipoSangue}       |   ${doador.dataDoacao} `
       }
     
  lista += `-----------------------------------------------------------------`
     
   prompt(lista) 
  
}
}

//CASE 4
function buscarPorData(){
let buscarData = prompt(`Data a procurar:`)
const listagem = []

for(let doador of arrayDoadores){
  if(doador.dataDoacao.toUpperCase() <= buscarData.toUpperCase()){
    listagem.push(doador)
    }
    
let listaData = `
--------------------
DOAÇÕES REALIZADAS EM ${buscarData} E ANTERIORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`


 for(let doador of listagem){
      listaData += `${doador.nome}|  ${doador.idade}   |  ${doador.peso}  |      ${doador.tipoSangue}       |   ${doador.dataDoacao} `
     }
   
listaData += `-----------------------------------------------------------------`
   
 prompt(listaData) 

}
}

//CASE 5
menu()
