import dayjs from 'dayjs';

export function formatTime(time: any, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!time) {
    return '-';
  }
  return dayjs(time).format(format);
}