import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "Success to login!!", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "Can not find a user.", status: "error" });
          }
        })
        .catch(() => showMessage({ title: "Can not login.", status: "error" }))
        .finally(() => setLoading(false));
    },
    [history, showMessage]
  );
  return { login, loading };
};
