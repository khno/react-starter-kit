import axios from "axios";
import { AUTH_USER } from "./types";
export const signinUser = ({ userName, password }) => dispatch => {
  return new Promise((resolve, reject) => {
    // 提交用户账号密码到服务器
    axios({
      url: "https://www.easy-mock.com/mock/590766877a878d73716e4067/mock/login",
      params: { userName, password }
    })
      .then(response => {
        const { data } = response;
        if (data.success) {
          console.log(data, 71);
          // 保存请求成功返回数据
          localStorage.setItem("token", data.result.token);
          // 如果请求成功，需要刷新 store 中的值，用户有权限
          dispatch({ type: AUTH_USER });
          resolve(data || { success: "ok" });
        }
      })
      //  如果请求失败
      //  报错展示出来
      .catch(err => {
        reject(err);
      });
  });
};

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem("token");
  return {
    type: UNAUTH_USER
  };
}
