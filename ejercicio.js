const numeroInput = document.getElementById("numeroInput");
const calcular = document.getElementById("calcular");
const resultadoNum = document.getElementById("resultado");
const expresionNum=document.getElementById("expresion");
function fibonacci() {
    const numero = numeroInput.value;
    console.log(numero);
    if (isNaN(numero) || numero%1 !=0 || numero=="") {
        mostrarAlertaRechazo();
        numeroInput.value="";
    } else {
        let expresion=`Los ${numero} primeros numeros de la secuencia son: `;
        let resultado =calcularfibonacci(numero);
        expresionNum.innerHTML=expresion;
        resultadoNum.innerHTML=resultado;
        numeroInput.value="";
    }
};

numeroInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        fibonacci();
    }
});

function calcularfibonacci(numero){
    let num1=0;
    let num2=1;
    let Secfibonacci=`${num1}, ${num2}`;
    let fibonacci;
    if(numero==1){
        return num1;
    }else if(numero==2){
        return Secfibonacci;
    }else{
        for (let i= 1; i <= numero-2; i++) {
            fibonacci=num1+num2;
            Secfibonacci+=`, ${fibonacci}`
            num1= num2;
            num2=fibonacci;      
        }
        return Secfibonacci;
    }
    
}

// funcion que muestra una alerta de error
function mostrarAlertaRechazo() {
    Swal.fire({
        title: 'Error',
        text: `Ingrese un numero valido`,
        icon: 'error',
        confirmButtonText: 'Cerrar',
        customClass: {
            container: 'mi-alerta-error',
            title: 'mi-titulo-error',
            content: 'mi-contenido-error',
            confirmButton: 'mi-boton-error'
        }
    });
}