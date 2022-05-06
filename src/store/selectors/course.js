import { createSelector } from "reselect"

const PAGE_COUNT = 18

export const coursesPagination = createSelector(
  [
    state => state.course.result,
    (state, page) => page
  ],
  (result, page) => result.filter((course, index) => {
    return index > (page - 1) * PAGE_COUNT && index <= page * PAGE_COUNT;
  })
)

export const coursesLength = createSelector(
  (state) => state.course.result,
  (result) => Math.floor(result.length / PAGE_COUNT) + 1
)