const course_state = {
  result: [],
  detail: {},
  search: "",
  type: "",
  semester: "1102",
  loading: false,
}

const result = (state = [], action) => {
  switch (action.type) {
    case "course.result.set":
      return [...action.result];
    case "course.result.clear":
      return [];
    default:
      return state;
  }
}

const detail = (state = {}, action) => {
  switch (action.type) {
    case "course.detail.set":
      return Object.assign({}, action.detail);
    case "course.detail.clear":
      return Object.assign({}, {});
    default:
      return state;
  }
}

const search = (state = "", action) => {
  switch (action.type) {
    case "course.search.set":
      return action.search;
    case "course.search.clear":
      return "";
    default:
      return state;
  }
}

const type = (state = "", action) => {
  switch (action.type) {
    case "course.type.set":
      return action.searchType;
    case "course.type.clear":
      return "";
    default:
      return state;
  }
}

const semester = (state = "", action) => {
  switch (action.type) {
    case "course.semester.set":
      return action.semester;
    case "course.semester.clear":
      return "";
    default:
      return state;
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case "course.loading":
      return true;
    case "course.done":
      return false;
    default:
      return state;
  }
}

const course = (state = course_state, action) => {
  switch (action.type) {
    case "course.result.set":
    case "course.result.clear":
      return Object.assign({}, state, {
        result: result(state.result, action)
      });
    case "course.detail.set":
    case "course.detail.clear":
      return Object.assign({}, state, {
        detail: detail(state.detail, action)
      });
    case "course.search.set":
    case "course.search.clear":
      return Object.assign({}, state, {
        search: search(state.search, action)
      });
    case "course.type.set":
    case "course.type.clear":
      return Object.assign({}, state, {
        type: type(state.type, action)
      });
    case "course.semester.set":
    case "course.semester.clear":
      return Object.assign({}, state, {
        semester: semester(state.semester, action)
      });
    case "course.loading":
    case "course.done":
      return Object.assign({}, state, {
        loading: loading(state.loading, action)
      });
    default:
      return state;
  }
}

export default course;