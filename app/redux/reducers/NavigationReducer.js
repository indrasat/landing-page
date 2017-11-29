import {QServedStack} from "../../config/router";

const initialState = QServedStack.router.getStateForAction(QServedStack.router.getActionForPathAndParams('MainActivity'));

export default (state = initialState, action) => {
    const nextState = QServedStack.router.getStateForAction(action, state);

    return nextState || state;
}
