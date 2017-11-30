export default function (store) {
  return function (next) {
    return function(action) {
      if (action.type === 'NOT_AUTHENTICATED') {
        console.log('***Action Type : ', action.type);
        console.log('***Action Payload : ', action.payload.err);
        console.log('***', next);
        console.log('***State', store.getState());
      }
      next(action);
    }
  }
}
