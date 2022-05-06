import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CourseRateMessageCardBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: "2px solid " + theme.palette.grey[400],
  backgroundColor: theme.palette.background.default,
  margin: theme.spacing(1) + " " + theme.spacing(0),
  padding: theme.spacing(1.5)
}));

function CourseRateMessageCard({ source, content, thumb }) {

  return (
    <CourseRateMessageCardBox>
      {content}
    </CourseRateMessageCardBox>
  );
}

export default CourseRateMessageCard;