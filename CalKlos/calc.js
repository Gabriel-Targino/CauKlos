
function calculadora (prim,seg,ope){
    if (ope === "multiplicacao"){
        return(prim*seg)
    }
    else if (ope === "soma"){
        return(prim+seg)
    }
    else if (ope === "divisao"){
        return(prim/seg)
    }
    else if (ope === "subtracao"){
        return(prim-seg)
    }
    else{
        return("operaçao inexistente")
    }
}

module.exports = calculadora;