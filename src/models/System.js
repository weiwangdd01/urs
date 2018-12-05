import Immutable from "immutable";
const immutableState = Immutable.fromJS({
  aa : 'asasa'
});

const Login = {
  namespace: "system",
  state: immutableState,
  reducers: {
    save(state, action) {
      return state.merge(action.payload);
    }
  },
  effects: {
    test({ payload }, { call, put }) {
      console.log(11111111);
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === "/login") {
          // dispatch({ type: "test" });
        }
      });
    }
  }
};

export default Login;
