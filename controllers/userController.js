const Home = require('../models/don');
const fs = require('fs');

exports.gethost = (req, res) => {
  res.render('add-home'); // Show form to add home
};

exports.posthost = (req, res) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.render('plus'); // Confirmation page
};

exports.gethomeid = (req, res) => {
  const id = req.params.homeid;

  Home.findid(id, (home) => {
    if (!home) {
      // If no home found, redirect to list page
      return res.redirect('/home');
    }

//    console.log("Found home:", home);

    // Pass single object 'home' to the view
    res.render('home-details', { data: home });
  });
};



exports.getuser = (req, res) => {
    res.render('workers');
};
exports.getbooking= (req,res) =>{
res.render('booking');

};
exports.getworkers=(req,res)=>{
Home.fetchAll((data) => {
    res.render('home', { data: data });
  });
};
exports.hosthome=(req,res)=>{
Home.fetchAll((data) => {
    res.render('host-home', { data: data });
  });
};

exports.status = (req, res) => {
  res.status(404).render('status');
};
