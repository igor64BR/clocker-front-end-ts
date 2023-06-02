import { Box } from '@mui/material';
import bgImg from '../../../../assets/img/background.jpg';

export default function BgImg() {
  return (
    <>
      <Box
        component='div'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box
        component='div'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundColor: 'black',
          opacity: 0.6, // Adjust the opacity as desired
        }}
      />
    </>
  );
}
