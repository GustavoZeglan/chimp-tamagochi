export const calcularStatusAtual = (fome:number,sono:number,emocao:number) : string => {
    const resultado : number = fome+sono+emocao;
    let status : string = "";
    if(resultado == 0){
        status = "Morto";
    }else if(resultado <= 50){
        status = "Crítico";
    }else if(resultado <= 100){
        status = "Muito Triste";
    }else if(resultado <= 150){
        status = "Triste";
    }else if(resultado <= 200){
        status = "Ok";
    }else if(resultado <= 250){
        status = "Bem";
    }else{
        status = "Muito bem";
    }
    return status;

}