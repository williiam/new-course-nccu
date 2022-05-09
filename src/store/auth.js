const auth_state = {
  profile: null,
  googleProfile: null
}

const profile = (state = {}, action) => {
  switch (action.type) {
    case "auth.profile.set":
      return Object.assign({}, action.profile);
    case "auth.profile.clear":
      return null;
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
      return null;
    case "auth.googleProfile.get":
    default:
      return state;
  }
}

const auth = (state = auth_state, action) => {
  switch (action.type) {
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