// ATIVIDADE 6

document.write(`ATIVIDADE 6 <br><br><br> <strong>Caso não carregue todos os exerícios, atualize a página!</strong><br><br><br>`)

// 1. Crie uma variável para ler a idade de um motorista. Caso o motorista tenha idade maior ou igual a 18 anos imprime no console “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

const idade = Number(prompt(`1. Insira a sua idade: `))
if (idade >= 18) {
    document.write(`1. Pela sua idade, você já pode dirigir!<br><br>`)
} else {
    document.write(`1. Pela sua idade, você ainda não pode dirigir.<br><br>`)
}


// 2. Para o mesmo exercício acima insira mais uma variável a condicional, além de saber se o motorista tem 18 anos ou mais, temos que saber também se ele é habilitado para dirigir. Caso ele tenha idade maior ou igual a 18 anos e possua habilitação, insira no html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

const habilitado = confirm(`2. Você já possui habilitação de motorista?`)

if (idade >= 18 && habilitado === true) {
    document.write(`2. Pela sua idade e habilitação você pode dirigir!<br><br>`)
} else {
    document.write(`2. Pela sua idade ou por falta de habilitação, você não pode dirigir.<br><br>`)
}


// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um número de 1 a 7 e imprimir no console o dia da Semana. Para este exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim por diante. Caso o número recebido não esteja neste intervalo imprimir “Dia não reconhecido”.

document.write(`3. Está no console.<br><br>`)
const weekDay = Number(prompt(`3. Digite um número de 1 a 7: `))
if      (weekDay === 1) { console.log(`3. O dia respectivo é Domingo`) }
else if (weekDay === 2) { console.log(`3. O dia respectivo é Segunda`) }
else if (weekDay === 3) { console.log(`3. O dia respectivo é Terça  `) }
else if (weekDay === 4) { console.log(`3. O dia respectivo é Quarta `) }
else if (weekDay === 5) { console.log(`3. O dia respectivo é Quinta `) }
else if (weekDay === 6) { console.log(`3. O dia respectivo é Sexta  `) }
else if (weekDay === 7) { console.log(`3. O dia respectivo é Sábado `) }
else { console.log(`3. Dia não reconhecido`) }


// // 4. Reescreva o exercício 3, utilizando apenas o SWITCH.

document.write(`4. Está no console.<br><br>`)
switch (weekDay) {
    case  1: console.log(`4. O dia respectivo é Domingo`) ; break;
    case  2: console.log(`4. O dia respectivo é Segunda`) ; break;
    case  3: console.log(`4. O dia respectivo é Terça  `) ; break;
    case  4: console.log(`4. O dia respectivo é Quarta `) ; break;
    case  5: console.log(`4. O dia respectivo é Quinta `) ; break;
    case  6: console.log(`4. O dia respectivo é Sexta  `) ; break;
    case  7: console.log(`4. O dia respectivo é Sábado `) ; break;
    default: console.log(`4. Dia não reconhecido`) ; break;
}


// 5. Utilizando FOR, percorra os números de 1 a 10 e imprima no console os números pares.

document.write(`5. Está no console.<br><br>`)
console.log(`5. Números pares de 1 a 10:`)
for (let par = 1; par <= 10; par++) {
    if (par % 2 === 0) {
        console.log(par)
    }
}


// 6. Insira no html 30 ( trinta ) números ímpares.

document.write(`6.<br>`)
let odds = 0
for (let ni= 1; odds<30 ; ni++) {
    if (ni % 2 === 1) {
        document.write(`${ni}, `)
        odds+=1
    }
}
document.write(`<br><br>`)


// 7. Utilizando do...while, imprima na tela a soma de todos os números entre 10 e 100.


let inicialValue = 10
let sum = inicialValue

do {
    sum = sum + inicialValue + 1
    inicialValue++
} while (inicialValue <100)
document.write(`7. A soma de todos os números do 10 até o 100 é de: ${sum}. <br><br>`)


// 8. Crie uma variável para armazenar o salário do usuário e atribua um valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, insira no html
//     "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".

const salary = Number(prompt(`8. Digite o valor do seu salário:`))
document.write (salary < 1903.98 ? `8. ISENTO DE IR<br><br>` : `8. TRIBUTADO NO IR<br><br>`)


// 9. Informe um valor a uma variável e imprima no console se o número é primo.

const prime = Number(prompt("9. Insira um número para verificar se ele é primo: "))

let detect = 0
for (let k=1; k<=prime; k++) {
    if (prime % k == 0) {
        detect++
    }
}
document.write( detect!==2 ? `O número <strong>${prime}</strong> não é primo!<br><br>` : `O número <strong>${prime}</strong> é primo!<br><br>`)


// 10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1 para sexo feminino e 2 para sexo masculino) de uma pessoa, construa um programa que calcule e mostre seu peso ideal, utilizando as seguintes fórmulas:
// - para homens: (72.7 * Altura) – 58
// - para mulheres: (62.1 * Altura) – 44.7

const height = Number(prompt(`10. Digite a sua altura em centímetros: `))
const sex = Number(prompt(`10. Qual o seu sexo? \n Digite '1' se for feminino e '2' se for masculino:`))
document.write( 
    sex===2 ? `10. Sendo homem, o peso ideal para a sua altura é de ${(72.7 * (height/100)-58).toFixed(1)} kg.<br><br>` :
    sex===1 ? `10. Sendo mulher, o peso ideal para a sua altura é de ${(62.1 * (height/100)-44.7).toFixed(1)} kg.<br><br>`:
    `10. Você digitou um número inválido para o sexo.<br><br>`
)


// 11. Utilizando Switch, faça um programa que pergunte em que turno você estuda. Peça para digitar “M” para matutino ou “V” para vespertino ou “N” para noturno. Mostre um alerta com a mensagem “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”, conforme o caso.

const turno = prompt("11. Em qual turno você estuda?\n Digite 'M' para matutino, 'V' para vespertino ou 'N' para noturno").toUpperCase()

switch (turno) {
    case 'M': alert("11. Bom dia!  "); break;
    case 'V': alert("11. Boa tarde!"); break;
    case 'N': alert("11. Boa noite!"); break;
    default : alert("11. Você digitou um turno inválido!"); break;
}
document.write(`11. Foi dado em alerta.<br><br>`)


// 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um programa que armazene a idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&).

const bloodDonationAge = Number(prompt(`12. Digite a sua idade: `))
if (bloodDonationAge >= 18 && bloodDonationAge <= 67) {
    document.write(`12. Em sua idade de ${bloodDonationAge} anos, você pode doar sangue! <br><br>`)
} else {
    document.write(`12. Em sua idade de ${bloodDonationAge} anos, você não pode doar sangue. <br><br>`)
}


// 13. Faça um algoritmo que armazene um número e imprima os números ímpares entre 1 e o número armazenado.

const numerosImpares = Number(prompt('13. Insira um numero maior que 1: '))

document.write(`13. Os números ímpares de 1 à ${numerosImpares} são:<br> `)
for (let i = 1; i <= numerosImpares; i++) {
    if(i % 2 != 0){
        document.write(`${i} `)
    }
}
document.write(`<br><br>`)


// 14. Leia um número, utilizando WHILE multiplique este número por 3 enquanto a soma seja menor que 500 e no final mostre qual o último valor.

const selectedNumber = Number(prompt(`14. Digite um número: \n (De preferência de 1 a 10) `))
let multiplication = selectedNumber
let lastMultiplication = 0

while (multiplication < 500) {
    lastMultiplication = multiplication
    multiplication*= 3
}
document.write(`
    14. Multiplicando seu número "<strong>${selectedNumber}</strong>" por 3,
    e cada novo resultado por 3, até 500, o último valor multiplicado é <strong>${lastMultiplication}</strong>
    e sua multiplicação por 3 resulta em: <strong>${multiplication}</strong>.
<br><br>`)


// 15. Crie um algoritmo que armazene três valores, para cada um dos lados de um triângulo: A, B e C. Verifique se os lados fornecidos formam realmente um triângulo. Se formar, deve mostrar no console o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A < B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e B=C);

let A
let B
let C

while (!(A < B + C && B < A + C && C < A + B)) {
    A = Number(prompt("15. Insira o valor do primeiro lado do triângulo:"))
    B = Number(prompt("15. Insira o valor do segundo  lado do triângulo:"))
    C = Number(prompt("15. Insira o valor do terceiro lado do triângulo:"))
    if (!(A < B + C && B < A + C && C < A + B)) {
        alert(`15. As medidas fornecidas não equivalem a um trinângulo! \n Digite medidas válidas!`)
    }
}

if (A !== B && B !== C && A !== C) {
    document.write("15. As medidas fornecidas são de um triângulo escaleno.  <br><br>")
} else if (A === B && B === C) {
    document.write("15. As medidas fornecidas são de um triângulo equilátero.<br><br>")
} else if (A===B || A===C || B===C) {
    document.write("15. As medidas fornecidas são de um triângulo isósceles. <br><br>")
}

// 16. Escreva um algoritmo que armazene o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem no console que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

const anoNascimento = Number(prompt(`16. Insira o ano de seu nascimento: `))
const anoAtual = Number(prompt(`16. Insira o ano atual: `))

document.write(`16. Está no console.<br><br>`)
if (anoAtual - anoNascimento < 16) {
    console.log(`16. Você ainda não pode votar.`)
} else {
    console.log(`16. Você já pode votar!`)
}

// 17. Escreva um algoritmo que armazene o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. O algoritmo deve fazer uma validação para que as porcentagens dos votos armazenados (brancos, nulos e válidos) respeitem o limite do número total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e válidos não seja maior que o número total de eleitores.

let eleitores = 0
let brancos = 1
let nulos = 0

while (brancos + nulos > eleitores) {
    eleitores = Number(prompt(`17. Digite o número de eleitores do munícipio: `))
    brancos = Number(prompt(`17. Digite o total de votos brancos: `))
    nulos = Number(prompt(`17. Digite o total de votos nulos: `))
    if (brancos + nulos > eleitores) {
        alert(`17. Você digitou mais votos brancos e nulos do que o total de eleitores! \n Refaça o processo!`)
    }
}

const validos = eleitores - (brancos + nulos)

document.write(`
    17. O total de eleitores é de: ${eleitores}; <br>
    O total de votos válidos foi de: ${validos}, o que corresponde a ${((validos * 100) / eleitores).toFixed(1)} %; <br>
    O total de votos brancos foi de: ${brancos}, o que corresponde a ${((brancos * 100) / eleitores).toFixed(1)} %; <br>
    O total de votos nulos   foi de: ${nulos},   o que corresponde a ${((nulos   * 100) / eleitores).toFixed(1)} %. <br>
<br>`)


// 18. Uma loja de eletrodomésticos estabeleceu as seguintes modalidades de pagamento para a venda de suas mercadorias:
// À vista              desconto de 2,5% sobre o preço de tabela;
// De 2 até 5 vezes     preço de tabela, sem desconto ou acréscimo;
// De 6 até 10 vezes    juros de 6% sobre o preço de tabela;
// De 11 até 15 vezes   juros de 13% sobre o preço de tabela;
// Escreva um algoritmo que armazene o preço de tabela e o número de vezes em que o pagamento será feito. Calcule o valor de cada parcela e o preço total da compra e imprima no console.

const precoTabela = Number(prompt(`18. Insira o valor da mercadoria:`))
let parcelas = Number(prompt(`18. Em quantas parcelas você deseja pagar? \n (número máximo de prestações: 15)`))

if (parcelas === 1) {
    document.write(`18. O valor total da compra a vista fica em R$ ${(precoTabela * 0.975).toFixed(2)}.<br><br>`)
} else if (parcelas <=5) {
    document.write(`18. O valor de cada das ${parcelas} parcelas fica em R$ ${((precoTabela) / parcelas).toFixed(2)} e o total da compra em R$ ${(precoTabela).toFixed(2)}.<br><br>`)
} else if (parcelas <=10){
    document.write(`18. O valor de cada das ${parcelas} parcelas fica em R$ ${((precoTabela*1.06) / parcelas).toFixed(2)} e o total da compra em R$ ${(precoTabela).toFixed(2)}.<br><br>`)
} else {
    parcelas = 15
    document.write(`18. O valor de cada das ${parcelas} parcelas fica em R$ ${((precoTabela*1.13) / parcelas).toFixed(2)} e o total da compra em R$ ${(precoTabela).toFixed(2)}.<br><br>`)
}


