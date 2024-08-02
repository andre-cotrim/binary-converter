function binary(value){
    var num = parseInt(value,2)
    /* if(num==10){
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
    } */
    return num.toString()
}

function converter(){
    var value = document.getElementById('resposta').value
    var res = document.getElementById('resultado')
    var option1 = document.getElementById('option1').value 
    var option2 = document.getElementById('option2').value 
    if(isNaN(value) || value == ''){
        res.innerHTML ='Escreva um número válido!'
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
    }else if(option2=="octa"){

    }else if(option2=="hexa"){

    }
    }else if (option1=="binary"){
        if (option2=="decimal"){
            if (isNaN(parseInt(value,2))){   
                res.innerHTML ='Escreva um número válido!' 
            }else{
                res.innerHTML = binary(value)
            }
        }else if (option2=="hexadecimal"){
            var temp_hexa = ""
        for(var i =value.length-1;i>=0;i-=4){
            if (i-3<0){
                temp_hexa += binary(value.substring(0,i+1)).split('').reverse().join('') 
            }else{
                temp_hexa += binary(value.substring(i-3,i+1)).split('').reverse().join('')
            }
        }
            res.innerHTML = temp_hexa.split('').reverse().join('')
        }else if(option2=="octal"){
            var temp_octal
            for(var i =value.length-1;i>=0;i-=3){
                if (i-3<0){
                    temp_octal += binary(value.substring(0,i+1)).split('').reverse().join('') 
                }else{
                    temp_octal += binary(value.substring(i-2,i+1)).split('').reverse().join('')
                }
            }
                res.innerHTML = temp_octal.split('').reverse().join('')
        }
    }else if (option1==option2){
        res.innerHTML = value
    }else if(option1=="octal"){

    }else if(option2=="hexa"){

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