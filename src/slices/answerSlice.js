import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            const {answer, index} = action.payload
            state[index] =answer
        }
    }
})

export const {setAnswer} = answersSlice.actions

export default answersSlice.reducer