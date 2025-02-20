const form = document.getElementById('formATV');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima"));

let linhas = '';
form.addEventListener('submit', function (e) {
    e.preventDefault();

    adcionaLinha();
    atualizarLinha();
    atualizaMediaFinal();

})

function adcionaLinha() {

    const inputNomeAtividade = document.getElementById('nomeATV');
    const inputNotaAtividade = document.getElementById('notaATV');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`Atividade: ${inputNomeAtividade.value} repetida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));



        let linha = `<tr>`;
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }





    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarLinha() {
    const corpoTabela = document.querySelector('tbody');

    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-Final-Valor').innerHTML = mediaFinal;
    document.getElementById('media-Final-Resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;



}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;

}