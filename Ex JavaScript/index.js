const lampada = document.querySelector('#lampada');
const inputNome = document.querySelector('#input-nome');
const inputListaNome = document.querySelector('#input-lista-nome');
const inputNumero = document.querySelector('#input-numero');
const inputName = document.querySelector('#input-name');
const inputSobrenome = document.querySelector('#input-sobrenome');


//função criada externamente que mostra uma mensagem
function chamaAia(){
    alert('AIA')
}
function acendeLampada(){
    lampada.src='lampada-on.jpg';
    setTimeout(()=> lampada.src='lampada.jpg',1000);
}
inputNome.addEventListener('keyup',function(event){
    if(event.keyCode == 13){
        let nomeSeparado = inputNome.value.split(' ');
        alert(nomeSeparado);
    }
});
function saudacao(){
    alert(`Olá ${inputName.value} ${inputSobrenome.value} `)
}
function calculaMedia(){
    numeros= inputNumero.value.split(',')
    let total = numeros.reduce((total, numero) => total + parseInt(numero,10), 0)
    media = (total/numeros.length);
    alert(`a media é ${media}`)
}
function calculaQuad(){
    numeros= inputNumero.value.split(',')
    let quad = [];
    for(let i=0; i<numeros.length; i++){
        quad.push(Math.pow(numeros[i],2));
    }
    alert(`os quadrados são ${quad}`);
}
function achaMaior(){
    numeros= inputNumero.value.split(',')
    maior=  Math.max.apply(Math, numeros);
    alert(`o maior numero é ${maior}`)
}
function achaIdade(){
    numeros= inputNumero.value.split(',')
    let maior= 0; 
    let menor= 0; 
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]>=18){
            maior ++
        }else{
            menor++
        }
    }
    alert(` ${maior} são maiores e ${menor} são menores`);
}
inputListaNome.addEventListener('keyup',function(event){
    if(event.keyCode == 13){
        nomes = inputListaNome.value.split(',');
        names = [];
        for(let i=nomes.length; i >=-1; i--){
            names.push(nomes[i]);
        }
        alert(names)
    }
});