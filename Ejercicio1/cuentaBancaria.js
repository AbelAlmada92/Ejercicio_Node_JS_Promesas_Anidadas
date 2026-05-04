const colors = require ('colors')


function saldoDisponible (monto) {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            if (saldo >= monto){
                resolve ("Tiene saldo en su cuenta");
            }else{
                reject("No tiene saldo en su cuenta!")
            }
        }, 5000 )
    })
}


function realizarTransferencia (monto) {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            saldo -=monto;
            resolve((colors.green)`Trasferencia realizada. Su saldo actual es ${saldo}`);
        }, 10000 );
    })
}


function trasferencia(monto){
    validarSaldo(monto
        .then((mensaje) =>{
            console.log(mensaje);
            return realizarTransferencia(monto);          
        })
        .then((resultado) =>{
            console.log(resultado);
        })
        .catch((error) =>{
            console.log(colors.red ("Error",error));
        })
        .finally(() =>{
            console.log(colors.yellow ("Operacion finalizada."))
        })
    )
}
