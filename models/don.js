const fs = require('fs');
const path = require('path');

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
this.id=   Math.floor((Math.random() * 100) + 1).toString();
   let inform = [];

Home.fetchAll(inform => {

    const filePath = path.join(__dirname, '..', 'data', 'home.json');
    
   // fs.readFile(filePath, (err, fileContent) => {
     // let data1 = [];

     // if (!err && fileContent.length > 0) {
       // try {
         // data1 = JSON.parse(fileContent);
      // } catch (e) {
        // console.log('Parse error:', e);
      //  }
     // }

      inform.push(this);

      fs.writeFile(filePath, JSON.stringify(inform), err => {
        if (err) {
          console.log(err);
        }
      });
// });
});
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(__dirname, '..', 'data', 'home.json');

    fs.readFile(homeDataPath, (err, data) => {
     // console.log("File read: ", err, data);

      if (!err && data.length > 0) {
        try {
          return callback(JSON.parse(data));
        } catch (e) {
          console.log("JSON parse error:", e);
        }
      }

      callback([]);
    });
  }
static findid(newhomeId,callback){
this.fetchAll(oldhomes=>{
const found=oldhomes.find(oldhome=> oldhome.id==newhomeId);
callback(found);
});
}


};

