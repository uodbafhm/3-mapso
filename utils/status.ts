
import { WORKING_HOURS } from '../constants';

export const getCurrentStatus = () => {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  const schedule = WORKING_HOURS[day];

  if (schedule.isClosed) return false;

  const [openH, openM] = schedule.open.split(':').map(Number);
  const [closeH, closeM] = schedule.close.split(':').map(Number);

  const openTime = openH * 60 + openM;
  const closeTime = closeH * 60 + closeM;

  return currentTime >= openTime && currentTime <= closeTime;
};

export const getStatusLabel = (isOpen: boolean) => isOpen ? "مفتوح الآن" : "مغلق الآن";
