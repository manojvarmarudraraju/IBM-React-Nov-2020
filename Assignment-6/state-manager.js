const StateManager = (function(){ 
    let _currentState = undefined,
        _callbacks = [],
        _reducer = undefined,
        _init_action = { type : '@@INIT-ACTION' };

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        _callbacks.push(callback);
    }

    function notifySubscribers(){
        _callbacks.forEach(callback => callback());
    }

    function dispatch(action){
        const newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        //if newState !== _currentState
        _currentState = newState;
        notifySubscribers();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('reducer is manadatory to create the store');
        _reducer = reducer;
        _currentState = _reducer(undefined, _init_action); //=> to initialise the current state with a valid default state before any action is dispatched
        const store = { getState, subscribe, dispatch };
        return store;
    }

    function bindActionCreators(actionCreators, dispatch) {
        const actionDispatchers = {};
        for (let key in actionCreators) {
            actionDispatchers[key] = function () {
                const action = actionCreators[key].apply(undefined, arguments);
                dispatch(action)
            };
        }
        return actionDispatchers;
    }

    return { createStore, bindActionCreators };
})();