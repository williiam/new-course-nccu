import { Box, Grid, Container, CircularProgress, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import NavBar from "../components/NavBar/Main";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../store/actions/course"
import Card from "../components/Card/Main"

const SearchBox = styled(Box)(({ theme }) => ({}));

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.course.loading)
  const courses = useSelector(state => state.course.result);

  useEffect(() => {
    const search = searchParams.get("search");
    const type = searchParams.get("type");
    const semester = searchParams.get("semester");
    dispatch(getCourse(search, type, semester));
  }, [searchParams]);

  const genCards = courses.map((course, index) => {
    return (
      <Grid item xs={12} md={4} key={index}>
        <Card
          name={course.courseNameZH_TW}
          teacher={course.instructorZH_TW}
          unit={course.departmentZH_TW}
          rate={course.point}
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
          loading ?
            <Box sx={{position: "absolute", top: "50%", left: "50%"}}>
              <CircularProgress />
            </Box>
            :
            ""
        }
        {
          genCards.length == 0 && !loading ?
            <Box sx={{display: "flex", justifyContent: "center"}}>
              <Typography>查無資料</Typography>
            </Box>
            :
            <Grid container spacing={3}>
              {genCards}
            </Grid>
        }
      </Container>
    </SearchBox>

  )
}

export default Search;