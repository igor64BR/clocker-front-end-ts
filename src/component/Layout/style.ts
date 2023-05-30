import { makeStyles } from '@mui/styles';
import bgImg from '../../assets/img/background.jpg';

export const useStyles = makeStyles({
  stack: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${bgImg})`,
      filter: 'blur(5px) grayscale(50%)',
      zIndex: -1,
    },
  },
});
