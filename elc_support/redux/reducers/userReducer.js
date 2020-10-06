module.exports = (
  state = {
  user:'null'
  },
  action
) => {
  switch (action.type) {
      case 'updateUser':
      console.log('inside reducer: ',action);
        return{
          user:action.user
        }
  }
  return state;
};
