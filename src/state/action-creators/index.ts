import { Action } from './../actions/index';
import { Dispatch } from "redux"
import { ActionType } from "../action-type"

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount,
        })
    }
}

export const withdrawtMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount,
        })
    }
}

export const bankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT,
        })
    }
}