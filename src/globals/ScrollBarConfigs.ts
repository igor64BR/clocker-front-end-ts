import colors from './colors';

export const scrollBarConfigs = (color: string = colors.gold) => ({
  scrollbarColor: `${color} transparent`,
  '&::-webkit-scrollbar': {
    width: 8,
    borderRadius: 10,
    marginLeft: 10,
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    background: color,
    borderRadius: 10,
  },
});
