import ajax from "../../api"

const set_course_result = (result) => {
  return {
    type: "course.result.set",
    result: result
  }
}

const clear_course_result = () => {
  return {
    type: "course.result.clear"
  }
}

export const getCourse = (searchParam, searchType, semester) => {
  return function (dispatch) {
    dispatch(clear_course_result())
    const param = {
      semester: semester
    }
    switch (searchType) {
      case "name":
        param.course_name = searchParam;
        break;
      case "teacher":
        param.instructor_name = searchParam;
        break;
      case "unit":
        param.department_name = searchParam;
        break;
      default:
        break;
    }
    dispatch({type: "course.loading"})
    return ajax("/course/search", "post", { data: param }).then(res => {
      dispatch({type: "course.done"})
      dispatch(set_course_result(res.data.data));

      return res.data;
    })
  }
}