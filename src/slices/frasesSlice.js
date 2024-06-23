import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 'fr1',
        sentence: 'Mi mamá es tonta, pero ella es buena persona',
        note: 0,
        words: [
            {
                word: 'Mi',
                morf: 'determinante',
                morfType1: 'posesivo',
                persona: '1',
                genre: '',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'mamá',
                morf: 'sustantivo',
                morfType1: 'común',
                persona: '',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'es',
                morf: 'verbo',
                morfType1: '',
                persona: '3',
                genre: '',
                numero: 'singular',
                tiempo: 'presente'
            },
            {
                word: 'tonta',
                morf: 'adjetivo',
                morfType1: '',
                persona: '',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'pero',
                morf: 'conjunción',
                morfType1: 'adversativa',
                persona: '',
                genre: '',
                numero: '',
                tiempo: ''
            },
            {
                word: 'ella',
                morf: 'pronombre',
                morfType1: 'tónico',
                persona: '3',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'es',
                morf: 'verbo',
                morfType1: '',
                persona: '3',
                genre: '',
                numero: 'singular',
                tiempo: 'presente'
            },
            {
                word: 'buena',
                morf: 'adjetivo',
                morfType1: '',
                persona: '',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'persona',
                morf: 'sustantivo',
                morfType1: 'común',
                persona: '',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            }
        ],
    },
    {
        id: 'fr2',
        sentence: 'Federico me come el pico',
        note: 0,
        words: [
            {
                word: 'Federico',
                morf: 'sustantivo',
                morfType1: 'propio',
                persona: '',
                genre: 'masculino',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'me',
                morf: 'pronombre',
                morfType1: 'átono',
                persona: '1',
                genre: 'neutro',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'come',
                morf: 'verbo',
                morfType1: '',
                persona: '3',
                genre: '',
                numero: 'singular',
                tiempo: 'presente'
            },
            {
                word: 'el',
                morf: 'artículo',
                morfType1: 'determinado',
                persona: '3',
                genre: 'masculino',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'pico',
                morf: 'sustantivo',
                morfType1: 'común',
                persona: '',
                genre: 'masculino',
                numero: 'singular',
                tiempo: ''
            }
        ],
    },
    { 
        id: 'fr3',
        sentence: 'Isa siempre querrá salchipapas, no falla',
        note: 0,
        words: [
            {
                word: 'Isa',
                morf: 'sustantivo',
                morfType1: 'propio',
                persona: '',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'siempre',
                morf: 'adverbio',
                morfType1: 'tiempo',
                persona: '',
                genre: '',
                numero: '',
                tiempo: ''
            },
            {
                word: 'querrá',
                morf: 'verbo',
                morfType1: '',
                persona: '3',
                genre: '',
                numero: 'singular',
                tiempo: 'futuro'
            },
            {
                word: 'salchipapas',
                morf: 'sustantivo',
                morfType1: 'común',
                persona: '',
                genre: 'femenino',
                numero: 'plural',
                tiempo: ''
            },
            {
                word: 'no',
                morf: 'adverbio',
                morfType1: 'negación',
                persona: '',
                genre: '',
                numero: '',
                tiempo: ''
            },
            {
                word: 'falla',
                morf: 'verbo',
                morfType1: '',
                persona: '3',
                genre: '',
                numero: 'singular',
                tiempo: 'presente'
            }
        ],
    },
    { 
        id: 'fr4',
        sentence: 'La policía cogió a Valentaina con las manos en la masa',
        note: 0,
        words: [
            {
                word: 'La',
                morf: 'artículo',
                morfType1: 'determinado',
                persona: '3',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'policía',
                morf: 'sustantivo',
                morfType1: 'común',
                persona: '',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'cogió',
                morf: 'verbo',
                morfType1: '',
                persona: '3',
                genre: '',
                numero: 'singular',
                tiempo: 'pasado'
            },
            {
                word: 'a',
                morf: 'preposición',
                morfType1: '',
                persona: '',
                genre: '',
                numero: '',
                tiempo: ''
            },
            {
                word: 'Valentaina',
                morf: 'sustantivo',
                morfType1: 'propio',
                persona: '',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'con',
                morf: 'preposición',
                morfType1: '',
                persona: '',
                genre: '',
                numero: '',
                tiempo: ''
            },
            {
                word: 'las',
                morf: 'artículo',
                morfType1: 'determinado',
                persona: '3',
                genre: 'femenino',
                numero: 'plural',
                tiempo: ''
            },
            {
                word: 'manos',
                morf: 'sustantivo',
                morfType1: 'común',
                persona: '',
                genre: 'femenino',
                numero: 'plural',
                tiempo: ''
            },
            {
                word: 'en',
                morf: 'preposición',
                morfType1: '',
                persona: '',
                genre: '',
                numero: '',
                tiempo: ''
            },
            {
                word: 'la',
                morf: 'artículo',
                morfType1: 'determinado',
                persona: '3',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'masa',
                morf: 'sustantivo',
                morfType1: 'común',
                persona: '',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            }
        ],
    },
    {
        id: 'fr5',
        sentence: 'Es fea como ella sola',
        note: 0,
        words: [
            {
                word: 'Es',
                morf: 'verbo',
                morfType1: '',
                persona: '3',
                genre: '',
                numero: 'singular',
                tiempo: 'presente'
            },
            {
                word: 'fea',
                morf: 'adjetivo',
                morfType1: '',
                persona: '',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'como',
                morf: 'adverbio',
                morfType1: 'modo',
                persona: '',
                genre: '',
                numero: '',
                tiempo: ''
            },
            {
                word: 'ella',
                morf: 'pronombre',
                morfType1: 'tónico',
                persona: '3',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            },
            {
                word: 'sola',
                morf: 'adjetivo',
                morfType1: '',
                persona: '',
                genre: 'femenino',
                numero: 'singular',
                tiempo: ''
            }
        ],
    }
]


const frasesSlice = createSlice({
    name: 'frases',
    initialState,
    reducers: {
        examineExercise: (state, action) => {
            const {id, answer} = action.payload

        }
    }

})

export const {examineExercise} = frasesSlice.actions
export default frasesSlice.reducer