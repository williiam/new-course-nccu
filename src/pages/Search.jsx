import { Box, Grid, Container, CircularProgress, Typography, Pagination, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import NavBar from "../components/NavBar/Main";
import { useEffect, useState } from "react";
import { Navigate, useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { coursesPagination, coursesLength } from "../store/selectors/course"
import { getCourse } from "../store/actions/course"
import Card from "../components/Card/Main"

const SearchBox = styled(Box)(({ theme }) => ({}));
const PaginationBox = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default
}));

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState(searchParams.get("search"));
  const [type, setType] = useState(searchParams.get("type"));
  const [semester, setSemester] = useState(searchParams.get("semester"));
  const [page, setPage] = useState(searchParams.get("page") ? searchParams.get("page") : 1);
  const loading = useSelector(state => state.course.loading);
  const courses = useSelector(state => coursesPagination(state, page));
  const length = useSelector(state => coursesLength(state));

  useEffect(() => {
    setSearch(searchParams.get("search"));
    setType(searchParams.get("type"));
    setSemester(searchParams.get("semester"));
    setPage(searchParams.get("page") ? searchParams.get("page") : 1);
  }, [searchParams]);

  useEffect(() => {
    dispatch({ type: "course.search.set", search: search });
    dispatch({ type: "course.type.set", searchType: type });
    dispatch({ type: "course.semester.set", semester: semester });
    dispatch(getCourse(search, type, semester));
  }, [search, type, semester]);

  const genCards = courses.map((course, index) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
          course={course.course}
          name={course.courseNameZH_TW}
          teacher={course.instructorZH_TW}
          unit={course.departmentZH_TW}
          rate={course.avg_rate == -1 ? "無" : course.avg_rate.toFixed(1)}
          ratePopulation={course.num_of_feedback}
        />
      </Grid>
    )
  })

  return (
    <SearchBox>
      <NavBar />
      <Container maxWidth="lg" sx={{ padding: "15px" }}>
        {
          genCards.length == 0 && !loading ?
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography>查無資料</Typography>
            </Box>
            :
            <Grid container spacing={3} sx={{paddingBottom: "70px"}}>
              {genCards}
            </Grid>
        }
        {
          loading ?
            <Box sx={{ position: "absolute", top: "50%", left: "50%" }}>
              <CircularProgress />
            </Box>
            :
            ""
        }
        {
          genCards.length != 0 ?
            <PaginationBox sx={{ position: "fixed", bottom: 0, right: 0, left: 0, padding: "10px 0px", display: "flex", justifyContent: "flex-end" }} elevation={0}>
              <Pagination
                page={Number(page)}
                count={length}
                onChange={(e, p) => navigate({
                  pathname: '/search',
                  search: '?search=' + search + '&type=' + type + '&semester=' + semester + '&page=' + p,
                })}
              />
            </PaginationBox>
            :
            ""
        }
      </Container>
    </SearchBox>

  )
}

export default Search;