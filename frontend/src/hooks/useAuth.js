import { AuthContext } from "@/Context/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("AuthContext can be used only inside a provider");

    }

    return context;

}