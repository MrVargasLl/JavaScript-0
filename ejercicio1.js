
//Monto con descuento
const Monto=400
let Montocondescuento=Monto

if (Monto>1000) { Montocondescuento = Monto*0.85;
    }
    else if (Monto>500 && Monto<1000) { Montocondescuento = Monto*0.9;
    }
    console.log('El monto con descuento es = $'+ Montocondescuento);
    