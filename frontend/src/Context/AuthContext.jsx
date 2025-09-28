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
        user: action.payload.user,
        token: action.payload.token,
      };
      break;
    case actions.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
      break;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    token: null,
  });

  console.log("Authcontext", AuthContext);

  useEffect(() => {
    const currUser = localStorage.getItem("user");
    const currToken = localStorage.getItem("token");

    if (currUser && currToken) {
      dispatch({
        type: actions.LOGIN,
        payload: { user: currUser, token: currToken },
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
