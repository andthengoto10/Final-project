import moment from 'moment';

export const getDayName = (date) => {
  return moment(date).format('dddd');
}

export const getTime = (date) => {
  let h =  moment(date).get('hour'), m = '00';
  let time = h + ':' + m;

  return time;
}
