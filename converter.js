function to_binary(value){
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
    return resultado
}
function converter(){
    var value = document.getElementById('resposta').value
    var res = document.getElementById('resultado')
    var option1 = document.getElementById('option1').value 
    var option2 = document.getElementById('option2').value 
    for (var i=0;i<value.length;i++){
        if(isNaN(value[i])){
            res.innerHTML ='Escreva um número válido!'
            return
        }
    }
    if (option1==option2){
        res.innerHTML = 'Escolha opções válidas!'
        return
    }else if (option1=="decimal"){
        if (option2=="binary"){
        res.innerHTML=to_binary(value).split('').reverse().join('')
        }
    }else if (option1=="binary"){
        for (var i=0;i<value.length;i++){
            resultado+=to_binary(value[i])   
            if(parseInt(value[i])>2){
                res.innerHTML ='Escreva um número válido!'
                return
            }
        }
        if (option2=="decimal"){
            res.innerHTML = parseInt(value,2).toString()
        }
    }else if(option1=="octal"){
        for (var i=0;i<value.length;i++){ 
            if(parseInt(value[i])>7){
                res.innerHTML ='Escreva um número válido!'
                return
            }
        }
        if (option2=="binary"){
            var resultado =""
        for (var i=0;i<value.length;i++){
            resultado+=to_binary(value[i]).padStart(3,'0')    
        }
        res.innerHTML = resultado
        return resultado
        }if (option2=="decimal"){
            var resultado = ""
            for (var i=0;i<value.length;i++){
                resultado+=to_binary(value[i]).padStart(3,'0')    
            }
            res.innerHTML = res.innerHTML = parseInt(resultado,2).toString()
        }
    }
}

function trocar(){
    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');
    var tempValue1 = option1.value;
    var tempValue2 = option2.value;
    option1.value = tempValue2;
    option2.value = tempValue1;
}

/* function binary(value){
    var option2 = document.getElementById('option2').value 
    var num = parseInt(value,2)
    if (option2=="hexa"){
        if(num==10){
            num='A'
        }else if(num==11){
            num='B'
        }else if(num==12){
            num='C'
        }else if(num==13){
            num='D'
        }else if(num==14){
            num='E'
        }else if(num==15){
            num='F'
        }
    }
    return num.toString()
}
function binaryto_(type,value){
    var temp = ""
            for(var i =value.length-1;i>=0;i-=type){
                if (i-type<0){
                    temp += binary(value.substring(0,i+1)).split('').reverse().join('') 
                }else{
                    temp += binary(value.substring(i-type+1,i+1)).split('').reverse().join('')
                }
            }
            return temp
}
function converter(){
    var value = document.getElementById('resposta').value
    var res = document.getElementById('resultado')
    var option1 = document.getElementById('option1').value 
    var option2 = document.getElementById('option2').value 
    if(isNaN(value) || value == ''){
        res.innerHTML ='Escreva um número válido!'
        return
    }else if (option1=="decimal"){
        if (option2=="binary"){
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
        return resultado.split('').reverse().join('')
    }else if(option2=="octa"){
        option2="binary"
        var temp_octa = converter()
        temp_octa = binaryto_(3,temp_octa)
    }else if(option2=="hexa"){
        option2="binary"
        var temp_hexa = converter()
        temp_octa = binaryto_(4,temp_hexa)
    }
    }else if (option1=="binary"){
        if (option2=="decimal"){
            if (isNaN(parseInt(value,2))){  //Aceita 133 
                res.innerHTML ='Escreva um número válido!' 
            }else{
                res.innerHTML = binary(value)
                return binary(value)
            }
        }else if (option2=="hexa"){
            var hexa_ = binaryto_(4,value)
            if (isNaN(parseInt(hexa_,2))){
                res.innerHTML ='Escreva um número válido!' 
            }else{
                res.innerHTML = hexa_.split('').reverse().join('')
                return hexa_.split('').reverse().join('')
           }
        }else if(option2=="octa"){
            var octa_ = binaryto_(3,value)
            if (isNaN(parseInt(hexa_,2))){
                res.innerHTML ='Escreva um número válido!' 
            }else{
            res.innerHTML = octa_.split('').reverse().join('')
            return  octa_.split('').reverse().join('')
            }
        }
    }else if (option1==option2){
        res.innerHTML = value
        return value
    }else if (option1 == "octa") {
            if (option2 == "binary") {
                var resultado = parseInt(value, 8).toString(2);
                res.innerHTML = resultado;
                return resultado;
            } else if (option2 == "decimal") {
                var resultado = parseInt(value, 8).toString(10);
                res.innerHTML = resultado;
                return resultado;
            } else if (option2 == "hexa") {
                var resultado = parseInt(value, 8).toString(16).toUpperCase();
                res.innerHTML = resultado;
                return resultado;
            }
        } else if (option1 == "hexa") {
            if (option2 == "binary") {
                var resultado = parseInt(value, 16).toString(2);
                res.innerHTML = resultado;
                return resultado;
            } else if (option2 == "decimal") {
                var resultado = parseInt(value, 16).toString(10);
                res.innerHTML = resultado;
                return resultado;
            } else if (option2 == "octa") {
                var resultado = parseInt(value, 16).toString(8);
                res.innerHTML = resultado;
                return resultado;
            }
        }
    }
function trocar(){
    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');
    var tempValue1 = option1.value;
    var tempValue2 = option2.value;
    option1.value = tempValue2;
    option2.value = tempValue1;
} */