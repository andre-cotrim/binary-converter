function converter(){
    var value = document.getElementById('resposta').value
    var res = document.getElementById('resultado')
    var opcao = document.getElementById('opcoes').value 
    if(isNaN(value) || value == ''){
        res.innerHTML ='Escreva um número válido!'
    }else if (opcao=="decimal->binary"){
        var resultado = ""
        var num = parseInt(value,10)
        while (num>0){
            if (num%2==0){
                resultado+='0'
            }else{
                resultado+='1'
            }
            num = Math.floor(num/2)
        }  
        res.innerHTML=resultado.split('').reverse().join('')
    }else if (opcao=="binary->decimal"){
        if (isNaN(parseInt(value,2))){   
            res.innerHTML ='Escreva um número válido!' 
        }else{
            var num = parseInt(value,2)
        res.innerHTML = num.toString()
        }
    }
}
function trocar(){
    var opcao = document.getElementById('opcoes').value 
    if (opcao=="binary->decimal"){
        opcoes.value = "decimal->binary"
        opcao = "decimal->binary"
    }else if (opcao== "decimal->binary"){
        opcoes.value = "binary->decimal"
        opcao = "binary->decimal"
    }
}