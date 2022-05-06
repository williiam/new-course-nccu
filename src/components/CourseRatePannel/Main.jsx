import { Card, CardHeader, CardContent, CardActions, Grid, Typography, Box, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FaceIcon from '@mui/icons-material/Face';
import { styled } from '@mui/material/styles';
import { borderRadius } from '@mui/system';
import { useState } from "react";
import { useSelector } from "react-redux";
import CourseRateMessageCard from './components/CourseRateMessageCard';

const CourseRatePannelBox = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  boxShadow: "-10px -11px 16px 1px rgba(252, 252, 252, 0.7), 9px 14px 24px -10px rgba(0, 0, 0, 0.25)",
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

const CourseRateCardHeaderBox = styled(Box)(({ theme }) => ({
  borderBottom: "3px solid " + theme.palette.grey[400],
  paddingBottom: theme.spacing(0.5),
  paddingLeft: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}));

const SearchBarBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  margin: "0px 10px",
  height: "100%",
  borderRadius: "50px",
  border: "2px solid " + theme.palette.grey[400],
  display: "flex",
  alignItems: "center"
}));

const SearchBarInput = styled("input")(({ theme }) => ({
  height: "100%",
  width: "95%",
  margin: "0px 2.5%",
  border: "none",
  backgroundColor: "transparent",
  outlineWidth: 0,
}));

function CourseRatePannel({ loading, leftPannelHeight }) {
  const courseDetail = useSelector(state => state.course.detail);
  const [comment, setComment] = useState("");

  var officialFeedbacks;
  if (!courseDetail.officialFeedback) {
    return ("");
  } else {
    officialFeedbacks = courseDetail.officialFeedback.map((comment, index) => {
      return (
        <CourseRateMessageCard key={index} source={"政大官方"} content={comment.description} thumb={comment.num_of_thumbsup} />
      )
    })
  }

  return (
    <Box sx={{ height: leftPannelHeight, }}>
      <CourseRatePannelBox>
        <CardHeader
          title={
            <CourseRateCardHeaderBox>
              <TitleTypography variant="h6">課程評價</TitleTypography>
              <Typography>依讚數排序</Typography>
            </CourseRateCardHeaderBox>
          }
        />
        <CardContent sx={{ overflowY: "auto", height: "100%", lexGrow: 1, position: 'relative', }}>
          {officialFeedbacks}
        </CardContent>
        <CardActions sx={{ display: "flex", alignItems: "stretch" }}>
          <Box sx={{ flexGrow: 1 }}>
            <SearchBarBox>
              <SearchBarInput value={comment} onChange={(e) => setComment(e.target.value)} placeholder="填入你的評價吧！" />
            </SearchBarBox>
          </Box>
          <IconButton disabled>
            <FaceIcon />
          </IconButton>
          <IconButton>
            <SendIcon />
          </IconButton>
        </CardActions>
      </CourseRatePannelBox >
    </Box>
  );
}

export default CourseRatePannel;