import { configureStore } from "@reduxjs/toolkit";

import frasesReducer from './frasesSlice'
import answersReducer from './answerSlice'

const store = configureStore({
    reducer: {
        frases: frasesReducer,
        answers: answersReducer
    }
})

export default store