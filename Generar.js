const Generar = (n) => {
    if(n){
        
        const number = n;
        console.log(`Tabla del ${number}`);
    
        for(let i = 0;i < 10;i++){
            const m = i+1;
            const result = number * m;
            // 2x 1 = 3
            console.log(`${number} x ${m} = ${result}`);
        }
    }else {
        throw new error("El argumento n no es correcto");
    }

};
module.exports = {Generar};
