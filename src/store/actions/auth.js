import jwt_decode from "jwt-decode";
import ajax from "../../api";
import { iNCCUlogin } from "../../util/iNCCU/iNCCU";

const set_token = (token) => {
  return {
    type: "auth.token.set",
    token: token
  }
}

const clear_token = () => {
  return {
    type: "auth.token.clear",
  }
}

const get_token = () => {
  return {
    type: "auth.token.get",
  }
}

const set_profile = (profile) => {
  return {
    type: "auth.profile.set",
    profile: profile
  }
}

const clear_profile = () => {
  return {
    type: "auth.profile.clear",
  }
}

const set_google_profile = (profile) => {
  return {
    type: "auth.googleProfile.set",
    googleProfile: profile
  }
}

const clear_google_profile = () => {
  return {
    type: "auth.googleProfile.clear",
  }
}

export const login = (googleAuthToken) => {
  return function (dispatch) {
    return ajax("/user/login", "post", {
      data: {
        token: googleAuthToken
      }
    }).then(res => {
      dispatch(set_token(res.data.token));
      dispatch(set_profile(res.data.userData));
      dispatch(set_google_profile(jwt_decode(googleAuthToken)));

      return res.data;
    })
  }
}

export const incculogin = (id, password) => {
  return function (dispatch) {
    return iNCCUlogin(id, password).then(res => {
      if(res.encstu == "ERROR") throw Error("Login failed");
      dispatch(set_token(res.encstu));
      const testProfile = {
        "user_id": "inccu" + res.encstu,
        "major_1": res.stuNum.substring(3, 6),
        "major_1_semester": res.stuNum.substring(0, 2),
        "major_2": "",
        "major_2_semester": "",
        "minor_1": "",
        "minor_1_semester": "",
        "minor_2": "",
        "minor_2_semester": "",
        "major_1_detail": {
          "department_id": res.stuNum.substring(3, 6),
          "department_name": "測試中",
          "college": "",
          "dept_short": "",
          "college_short": "",
          "identity": "學"
        },
        "major_2_detail": {},
        "minor_1_detail": {},
        "minor_2_detail": {},
        "googleData": {
          "googleId": "",
          "imageUrl": "",
          "email": "",
          "name": res.stuNam_C,
          "givenName": "",
          "familyName": ""
        }
      }
      dispatch(set_profile(testProfile));
      dispatch(set_google_profile({}));
      dispatch({type: "auth.type.inccu"})
      return res;
    })
  }
}

export const logout = () => {
  return function (dispatch) {
    dispatch(clear_token());
    dispatch(clear_profile());
    dispatch(clear_google_profile());
    localStorage.removeItem("authToken");
  }
}

export const setProfile = (profile) => {
  return function (dispatch) {
    dispatch(set_profile(profile));
  }
}
