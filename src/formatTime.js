export const formatTime = (time) => {
  const minutes = Math.floor(time/60); //"Your code here";
  const getHours = Math.floor(minutes/60);//"Your code here";
  const getMinutes = minutes - getHours*60;
  const getSeconds =  time - getHours*3600 - getMinutes*60; //"Your code here";

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
