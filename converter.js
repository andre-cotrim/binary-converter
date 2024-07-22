function converter(){
    var value = document.getElementById('resposta')
var res = document.getElementById('resultado')
    if(isNaN(value.value)){
        res.innerHTML ='Escreva um número'
    }else{
        //tostring
        var tamanho = value.length
        res.innerHTML =tamanho
        /* for(i=0;i<value.lengthl;i++)
        res.innerHTML =  */
    }
}