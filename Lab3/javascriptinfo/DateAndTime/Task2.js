function getSecondsToday() {
    let now = new Date();
  
    // create an object using the current day/month/year
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today; // ms difference
    return Math.round(diff / 1000); // make seconds
  }
  
  alert( getSecondsToday() );


  function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }
  
  alert( getSecondsToday() );


  function getSecondsToTomorrow() {
    let now = new Date();
  
    // tomorrow date
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; // difference in ms
    return Math.round(diff / 1000); // convert to seconds
  }


  function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
  }