import { useAppDispatch , useAppSelector} from "./store";
import { setAnswer } from "../slices/answerSlice";

export const useFrase = () => {
    const dispatch = useAppDispatch()

    const setAnswerApp = (answer, index) => dispatch(setAnswer({answer, index}))


    return {setAnswerApp}
}

const checkWord = (correctWord, tryWord) => {
    if (
        correctWord.morf === tryWord.morf &&
        correctWord.morfType1 === tryWord.morfType1 &&
        correctWord.persona === tryWord.persona &&
        correctWord.genre === tryWord.genre &&
        correctWord.numero === tryWord.numero &&
        correctWord.tiempo === tryWord.tiempo 
    ) {
        return true
    } else {
        return false
    }
}

export const useCheckAnswer = () => {

    const checkAnswer = (correctAnswer, tryAnswer) => {
        console.log(correctAnswer)
        console.log(tryAnswer)

        const correccionArray = []
        for (let i=0; i<correctAnswer.length; i++) {
            let correctWord = correctAnswer[i]
            let tryWord = tryAnswer[i]

            if(checkWord(correctWord, tryWord)){
                correccionArray.push(true)
            } else {
                correccionArray.push(false)
            }
        }
        console.log(correccionArray)
        return correccionArray
    }
    
    return {checkAnswer}
}