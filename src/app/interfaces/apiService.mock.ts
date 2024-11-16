import { Observable, of } from "rxjs"
import { mockRickAndMorty } from "../mocks/rickandmorty.mock"
import { IRickAndMorty } from "./rickAndMorty.interface"

export const ApiServiceMock:{
    obtienePersonajes: () => Observable<IRickAndMorty>
} = {
    obtienePersonajes: () => of(mockRickAndMorty),
}