import ajax from "../../api"
import axios from "axios"

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

const set_course_detail = (detail) => {
  return {
    type: "course.detail.set",
    detail: detail
  }
}

const clear_course_detail = () => {
  return {
    type: "course.detail.clear"
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
    dispatch({ type: "course.loading" })
    return ajax("/course/search", "post", { data: param }).then(res => {
      dispatch({ type: "course.done" })
      dispatch(set_course_result(res.data.data));

      return res.data;
    })
  }
}

export const getCourseDetail = (courseId) => {
  return function (dispatch) {
    dispatch(clear_course_detail())
    return ajax("/course/detail", "post", {
      data: {
        course_id: courseId
      }
    }).then(res => {
      res.data.course.information = res.data.course.information.split("＠異動資訊Information of alteration:")[1];
      res.data.course.note = res.data.course.note.split("＠備註Note:")[1];
      dispatch(set_course_detail(res.data));

      return res.data
    }).then(res => {
      const courseTeacher = res.course.instructorZH_TW;
      const courseName = res.course.courseNameZH_TW;
      var course_rate = [];
      axios.get("https://raw.githubusercontent.com/andyjjrt/NCCUCourseRate/main/result/" + courseTeacher + "/" + courseName + "/index.json").then(res => {
        let promises = [];
        for (let i in res.data) {
          let course = res.data[i];
          promises.push(
            axios.get("https://raw.githubusercontent.com/andyjjrt/NCCUCourseRate/main/result/" + courseTeacher  + "/" + courseName + "/" + course.year_sem + "_" + course.course_id + ".json").then(res => {
              for (let j in res.data)
                course_rate.push({ description: res.data[j], year_sem: course.year_sem, num_of_thumbsup: 0 });
            })
          )
        }
        return Promise.all(promises);
      }).then(() => {
        console.log(res);
        res.officialFeedback = course_rate;
        dispatch(set_course_detail(res));
      }).catch(err => {
        throw err;
      })
    })
  }
}