/* ------------- Como funciona o algoritimo de ordenação por bolhas --------------------- 

Dado o seguinte array: [ 5, 2, 4, 1 ]

Teremos um laço de repetição para esse array. E iremos verificar:

1° O valor contido na posição x é maior do que o valor contido na posição x + 1?
2° Caso seja maior, então o valor da posição x + 1 passa a receber o valor da posição x e vice versa
3° Essa troca ocorrerá até não ter mais valores maiores na posições x

Com o array acima então teremos a seguinte verificação:

O número 5 é maior que o número 2 ?
Sim
Então na posição do valor 5 agora ele vai receber o valor 2 e na posição do valor 2, ele receberá o valor 5. Ficando
assim o array:

[ 2, 5, 4, 1 ]

Na próxima iteração faremos a mesma pergunta

O número 5 é maior que o número 4
Sim
.
.
.

E assim por diante até o array ser ordenado. Vamos lá!!!

*/

function bubbleSort() {
    const arrayNumbers = [ 5, 2, 4, 1 ]
    let isChange

    do {
        isChange = false

        for(let i = 0; i < arrayNumbers.length; i++){
            if(arrayNumbers[i] > arrayNumbers[i + 1]){

                const temp = arrayNumbers[i] // Guardamos o valor maior (ex 5)
                arrayNumbers[i] = arrayNumbers[i + 1] // Trocamos o valor de 5  pelo valor de 2
                arrayNumbers[i + 1] = temp // O valor que esta com 2 agora recebe 5

                isChange = true

            }
        }

        
    } while (isChange);

    return arrayNumbers


}

console.log(bubbleSort())

// Bubble Sort - Bubble Sort é o algoritmo de ordenação mais básico e funciona trocando repetidamente elementos adjacentes se estiverem fora de ordem.

// Merge Sort - Merge Sort é uma técnica de classificação que usa a estratégia de dividir e conquistar .

// Quicksort -  Quicksort é um algoritmo de classificação popular que executa n log n comparações em média ao classificar uma matriz de n elementos. É um algoritmo de ordenação mais eficiente e rápido.

// Heap Sort -  Heap sort funciona visualizando os elementos da matriz como um tipo especial de árvore binária completa conhecida como heap.