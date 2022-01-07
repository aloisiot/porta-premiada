import PortaModel from "../model/porta";

export function criarPortas(qtde: number, comPresente: number): PortaModel[] {
    return Array.from({length: qtde}, (_, i) => {
        const num = i + 1;
        const temPresente = num === comPresente;
        return new PortaModel(num, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaCorrente => {
        if(portaCorrente.numero === portaModificada.numero){
            return portaModificada
        } else {
            return portaModificada.aberta ? portaCorrente : portaCorrente.removerSelecao()
        }
    })
}