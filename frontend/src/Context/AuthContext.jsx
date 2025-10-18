import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

const actions = {
  LOGIN: "login",
  LOGOUT: "logout",
  SIGN: "signup",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN:
    case actions.SIGN:
      return {
        ...state,
        token: action.payload.token,
      };
      break;
    case actions.LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
      break;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    token: null,
  });

  useEffect(() => {
    const currToken = localStorage.getItem("token");

    if (currToken) {
      dispatch({
        type: actions.LOGIN,
        payload: { token: currToken },
      });
    }
    return () => {
      dispatch;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
