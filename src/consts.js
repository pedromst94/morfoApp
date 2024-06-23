const sustantivo = {
    morf: 'sustantivo',
    morfType1: ['común', 'propio'],
    persona: [],
    genre: ['masculino', 'femenino', 'neutro'],
    numero: ['singular', 'plural'],
    tiempo: []
}

const verbo = {
    morf: 'verbo',
    morfType1: [],
    persona: ['1', '2', '3'],
    genre: [],
    numero: ['singular', 'plural'],
    tiempo: ['presente', 'pasado', 'futuro']
}

const adjetivo = {
    morf: 'adjetivo',
    morfType1: [],
    persona: [],
    genre: ['masculino', 'femenino', 'neutro'],
    numero: ['singular', 'plural'],
    tiempo: []
}

const adverbio = {
    morf: 'adverbio',
    morfType1: ['lugar', 'tiempo', 'modo', 'cantidad', 'afirmación', 'negación', 'duda', 'deseo'],
    persona: [],
    genre: [],
    numero: [],
    tiempo: []
}

const pronombre = {
    morf: 'pronombre',
    morfType1: ['tónico', 'átono'],
    persona: ['1', '2', '3'],
    genre: ['masculino', 'femenino', 'neutro'],
    numero: ['singular', 'plural'],
    tiempo: []
}

const preposicion = {
    morf: 'preposición',
    morfType1: [],
    persona: [],
    genre: [],
    numero: [],
    tiempo: []
}

const conjuncion = {
    morf: 'conjunción',
    morfType1: ['copulativa', 'disyuntiva', 'adversativa', 'causal'],
    persona: [],
    genre: [],
    numero: [],
    tiempo: []
}

const articulo = {
    morf: 'artículo',
    morfType1: ['determinado', 'indeterminado'],
    persona: ['1', '2', '3'],
    genre: ['masculino', 'femenino', 'neutro'],
    numero: ['singular', 'plural'],
    tiempo: []
}

const determinante = {
    morf: 'determinante',
    morfType1: ['demostrativo', 'posesivo', 'numerales', 'indefinido'],
    persona: ['1', '2', '3'],
    genre: [],
    numero: ['singular', 'plural'],
    tiempo: []
}

export const tipos = [
    verbo,
    sustantivo,
    adjetivo,
    adverbio,
    pronombre,
    preposicion,
    conjuncion,
    articulo,
    determinante
]