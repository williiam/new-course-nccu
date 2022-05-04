const auth_state = {
  token: localStorage.getItem("AuthToken") ? localStorage.getItem("AuthToken") : "",
  profile: null,
  googleProfile: null
}

const token = (state = "", action) => {
  switch (action.type) {
    case "auth.token.set":
      return action.token;
    case "auth.token.clear":
      return "";
    case "auth.token.get":
    default:
      return state;
  }
}

const profile = (state = {}, action) => {
  switch (action.type) {
    case "auth.profile.set":
      return Object.assign({}, action.profile);
    case "auth.profile.clear":
      return Object.create(null);
    case "auth.profile.get":
    default:
      return state;
  }
}

const googleProfile = (state = {}, action) => {
  switch (action.type) {
    case "auth.googleProfile.set":
      return Object.assign({}, action.googleProfile);
    case "auth.googleProfile.clear":
      return Object.create(null);
    case "auth.googleProfile.get":
    default:
      return state;
  }
}

const auth = (state = auth_state, action) => {
  switch (action.type) {
    case "auth.token.set":
    case "auth.token.clear":
    case "auth.token.get":
      return Object.assign({}, state, {
        token: token(state.token, action)
      });
    case "auth.profile.set":
    case "auth.profile.clear":
    case "auth.profile.get":
      return Object.assign({}, state, {
        profile: profile(state.profile, action)
      });
    case "auth.googleProfile.set":
    case "auth.googleProfile.clear":
    case "auth.googleProfile.get":
      return Object.assign({}, state, {
        googleProfile: googleProfile(state.googleProfile, action)
      });
    default:
      return state;
  }
}

export default auth;