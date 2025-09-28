import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const actions = {
  LOGIN: "login",
  LOGOUT: "lougout",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return { user: action.payload };
      break;
    case actions.LOGOUT:
      return { user: null };
    default:
      return state;
      break;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  console.log("Authcontext", AuthContext);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
