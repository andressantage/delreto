/* 
Dada la información sobre un usuario del servicio de agua:
- Nombre
- Estrato(1,2,3,4,5)
- consumo del mes (cm3)
Se pide calcular el valor a pagar por servicio de agua, conociendo que el servicio es
la suma de la tarifa básica más valor del consumo.
La tarifa básica depende del estrato, así:
Estrato   Tarifa Básica
   1       $10000
   2       $15000
   3       $30000
   4       $60000
   5       $80000
   El valor del consumo es la multipliacción entre el consumo del mes por $100 (valor de 1 cm3)
*/
function calcularValorServicio(){
    var nombre=document.getElementById("nombre").value 
    var estrato=parseInt(document.getElementById("estrato").value) 
    var consumo=parseInt(document.getElementById("consumo").value) 
    var tarifa=0,valorConsumo=0,valorServicio=0
    switch(estrato){
        case 1:tarifa=10000;break
        case 2:tarifa=15000;break
        case 3:tarifa=30000;break
        case 4:tarifa=60000;break
        case 5:tarifa=80000;break
    }
    valorConsumo=consumo*100
    valorServicio=tarifa+valorConsumo
    valorPagar=new Intl.NumberFormat().format(valorServicio)
    document.getElementById("titulo").innerHTML="Valor a pagar: "
    document.getElementById("valorP").innerHTML=valorPagar
    
}

