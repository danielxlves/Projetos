//propiedade length --> tamanho string    
nome = ' daniel alves '
console.log(nome.length)

//charAt --> indice qualquer de uma string
console.log(nome.charAt(7))

//indexOf -- > o primeira ocorrencia do caracterer na string (case sensitive) 
console.log(nome.indexOf('d'))

//replace --> substituir texto dentro de uma string (alves por nascimento)
console.log(nome.replace('alves', 'nascimento'))

//substr --> permite extrair parte de uma string, especificando a posicao de um caracterer inicial e depois a partir deste caractere quantos ira ser recortado.
console.log(nome.substr(6,6))

//to.lowercase minusculo -- to.uppercase maisculo

//trim remove o espaço em branco nas extremidades em uma string
console.log('-' + nome.trim()+ '-')