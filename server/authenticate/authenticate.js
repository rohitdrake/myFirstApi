function authenticate(req, res, next) {
  req.timeObject = {};
  let data = req.params.id;
  let result = Number(data);

  if(isNaN(result)){
    let dateArray = data.replace(/\,/g,"").replace(/[a-zA-Z]{1,}/g, function createDate(str){
      switch(str){
        case "Jan":
        return 0;
        break;
        case "Feb":
        return 1;
        break;
        case "March":
        return 2;
        break;
        case "April":
        return 3;
        break;
        case "May":
        return 4;
        break;
        case "June":
        return 5;
        break;
        case "July":
        return 6;
        break;
        case "Aug":
        return 7;
        break;
        case "Sep":
        return 8;
        break;
        case "Oct":
        return 9;
        break;
        case "Nov":
        return 10;
        break;
        default:
        return 11;
      }
    }).split(/\s{1,}/);
    req.timeObject.natural = data;
    req.timeObject.unix = new Date(Number(dateArray[2]), Number(dateArray[0])+1, Number(dateArray[1])).getTime();
  } else {
    let date = new Date(result);
    req.timeObject.unix = data;
    req.timeObject.natural = date.toString();
  }
  next();
}



module.exports = {authenticate};
