const digital = value =>{
  if(value < 1000) {
    return value;
  } else if(value >=1000 && value < 10000){
    return Math.round(value/100)/10+'k';
  } else if (value >= 10000) {
    return Math.round(value/1000)/10+'w';
  }
}


export default{
  digital,
}