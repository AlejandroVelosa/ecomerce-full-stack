import axios from "axios"

const useAuth = () => {

  const CreateUser = (url, data) => {
    axios
      .post(url, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  const loginUser = (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Realiza cualquier otra limpieza o redireccionamiento necesario
  };

  return { CreateUser, loginUser, logout };
}

export default useAuth;
