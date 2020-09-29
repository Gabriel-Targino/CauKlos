
function calculadora (prim,seg,ope){
    if (ope === "*"){
        return(prim*seg)
    }
    else if (ope === "+"){
        return(prim+seg)
    }
    else if (ope === "/"){
        return(prim/seg)
    }
    else if (ope === "-"){
        return(prim-seg)
    }
    else{
        return("Operação Inexistente")
    }
}

module.exports = calculadora;