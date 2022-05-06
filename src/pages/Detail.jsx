import { Container, Grid, Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourseDetail } from "../store/actions/course";
import NavBar from "../components/NavBar/Main";
import CourseDetailPannel from "../components/CourseDetailPannel/Main";
import CourseRatePannel from "../components/CourseRatePannel/Main";

const DetailBox = styled("div")(({ theme }) => ({}));

function Detail() {
  const params = useParams();
  const dispatch = useDispatch();
  const courseId = params.courseId;
  const courseDetail = useSelector(state => state.course.detail);
  const [loading, setLoading] = useState(false);
  const [leftPannelHeight, setLeftPannelHeight] = useState(0);

  useEffect(() => {
    setLoading(true);
    dispatch(getCourseDetail(courseId)).then(() => {
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, [params]);

  useEffect(() => {
    console.log(leftPannelHeight);
  }, [leftPannelHeight])

  return (
    <DetailBox>
      <NavBar />
      <Container maxWidth="xl" sx={{ padding: "15px" }}>
        {
          loading ?
            <Box sx={{ position: "absolute", top: "50%", left: "50%" }}>
              <CircularProgress />
            </Box>
            :
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <CourseDetailPannel loading={loading} setLeftPannelHeight={setLeftPannelHeight} />
              </Grid>
              <Grid item xs={12} md={4}>
                <CourseRatePannel loading={loading} leftPannelHeight={leftPannelHeight} />
              </Grid>
            </Grid>
        }
      </Container>
    </DetailBox>
  );
}

export default Detail;