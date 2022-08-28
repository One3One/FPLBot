//RTB
const express = require("express")
const app = express();

require('dotenv').config();

var twitter = require('twit')
var fs = require('fs')
var request = require('request');
const { Console } = require("console");

var Twitter = new twitter({
    consumer_key:         `${process.env.CONSUMERKEY}`,//consumer_key
    consumer_secret:     `${process.env.CONSUMERSECRET}`,//consumer_secret
    access_token:        `${process.env.ACCESSTOKEN}`,//access_token
    access_token_secret:  `${process.env.ACCESSTOKENSECRET}`,//access_token secret
})

    //Time
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
  //FPL 1-5
  function FPL(){
    request("https://fantasy.premierleague.com/api/leagues-classic/[yourleague]/standings/",{json : true}, async(err,res,body)=>{

    console.log(body.standings.results[0].player_name + " " +  body.standings.results[0].rank + " " +  body.standings.results[0].total + " " +  body.standings.results[0].entry_name)

    console.log(body.standings.results[1].player_name + " " +  body.standings.results[1].rank + " " +  body.standings.results[1].total + " " +  body.standings.results[1].entry_name)
 
    console.log(body.standings.results[2].player_name + " " +  body.standings.results[2].rank + " " +  body.standings.results[2].total + " " +  body.standings.results[2].entry_name)
 
    console.log(body.standings.results[3].player_name + " " +  body.standings.results[3].rank + " " +  body.standings.results[3].total + " " +  body.standings.results[3].entry_name)
 
    console.log(body.standings.results[4].player_name + " " +  body.standings.results[4].rank + " " +  body.standings.results[4].total + " " +  body.standings.results[4].entry_name)
 
    console.log(body.standings.results[5].player_name + " " +  body.standings.results[5].rank + " " +  body.standings.results[5].total + " " +  body.standings.results[5].entry_name)
 
    console.log(body.standings.results[6].player_name + " " +  body.standings.results[6].rank + " " +  body.standings.results[6].total + " " +  body.standings.results[6].entry_name)
 
    console.log(body.standings.results[7].player_name + " " +  body.standings.results[7].rank + " " +  body.standings.results[7].total + " " +  body.standings.results[7].entry_name)
 
    console.log(body.standings.results[8].player_name + " " +  body.standings.results[8].rank + " " +  body.standings.results[8].total + " " +  body.standings.results[8].entry_name)
 
    console.log(body.standings.results[9].player_name + " " +  body.standings.results[9].rank + " " +  body.standings.results[9].total + " " +  body.standings.results[9].entry_name)
 
    console.log(body.standings.results[10].player_name + " " +  body.standings.results[10].rank + " " +  body.standings.results[10].total + " " +  body.standings.results[10].entry_name)
 
    //Rank 1
    let rank1name = body.standings.results[0].player_name;
    let rank1rank = body.standings.results[0].rank;
    let rank1point = body.standings.results[0].total;
    let rank1teamname = body.standings.results[0].entry_name;

    //Rank 2
    let rank2name = body.standings.results[1].player_name;
    let rank2rank = body.standings.results[1].rank;
    let rank2point = body.standings.results[1].total;
    let rank2teamname = body.standings.results[1].entry_name;

    //Rank 3
    let rank3name = body.standings.results[2].player_name;
    let rank3rank = body.standings.results[2].rank;
    let rank3point = body.standings.results[2].total;
    let rank3teamname = body.standings.results[2].entry_name;

    //Rank 4
    let rank4name = body.standings.results[3].player_name;
    let rank4rank = body.standings.results[3].rank;
    let rank4point = body.standings.results[3].total;
    let rank4teamname = body.standings.results[3].entry_name;

    //Rank 5
    let rank5name = body.standings.results[4].player_name;
    let rank5rank = body.standings.results[4].rank;
    let rank5point = body.standings.results[4].total;
    let rank5teamname = body.standings.results[4].entry_name;

    //Rank 6
    let rank6name = body.standings.results[5].player_name;
    let rank6rank = body.standings.results[5].rank;
    let rank6point = body.standings.results[5].total;
    let rank6teamname = body.standings.results[5].entry_name;

    //Rank 7
    let rank7name = body.standings.results[6].player_name;
    let rank7rank = body.standings.results[6].rank;
    let rank7point = body.standings.results[6].total;
    let rank7teamname = body.standings.results[6].entry_name;

    //Rank 8
    let rank8name = body.standings.results[7].player_name;
    let rank8rank = body.standings.results[7].rank;
    let rank8point = body.standings.results[7].total;
    let rank8teamname = body.standings.results[7].entry_name;

    //Rank 9
    let rank9name = body.standings.results[8].player_name;
    let rank9rank = body.standings.results[8].rank;
    let rank9point = body.standings.results[8].total;
    let rank9teamname = body.standings.results[8].entry_name;

    //Rank 10
    let rank10name = body.standings.results[9].player_name;
    let rank10rank = body.standings.results[9].rank;
    let rank10point = body.standings.results[9].total;
    let rank10teamname = body.standings.results[9].entry_name;

    console.log(rank1name);


    //For Twitter Tweet
    Twitter.post('statuses/update', { status: "Standing of LIGA : CHAPTER IV 🏆\n" + 
    "Rank🥇 " + rank1teamname + " " + rank1point + " by " + rank1name + "\n" +
    "Rank🥈 " + rank2teamname + " " + rank2point + " by " + rank2name + "\n" +
    "Rank🥉 " + rank3teamname + " " + rank3point + " by " + rank3name + "\n" +
    "Rank " + rank4rank + " " + rank4teamname + " " + rank4point + " by " + rank4name + "\n" +
    "Rank " + rank5rank + " " + rank5teamname + " " + rank5point + " by " + rank5name + "\n" +
    "https://lunechain.com/Bot/FPLBot.html" }).then(result => {
      console.log("Standing of LIGA : CHAPTER IV Tweeted");

    }).catch(console.error);

    })
  }

 
   //FPL 6-10
   function FPL1(){
    request("https://fantasy.premierleague.com/api/leagues-classic/[yourleague]/standings/",{json : true}, async(err,res,body)=>{
 

    //Rank 6
    let rank6name = body.standings.results[5].player_name;
    let rank6rank = body.standings.results[5].rank;
    let rank6point = body.standings.results[5].total;
    let rank6teamname = body.standings.results[5].entry_name;

    //Rank 7
    let rank7name = body.standings.results[6].player_name;
    let rank7rank = body.standings.results[6].rank;
    let rank7point = body.standings.results[6].total;
    let rank7teamname = body.standings.results[6].entry_name;

    //Rank 8
    let rank8name = body.standings.results[7].player_name;
    let rank8rank = body.standings.results[7].rank;
    let rank8point = body.standings.results[7].total;
    let rank8teamname = body.standings.results[7].entry_name;

    //Rank 9
    let rank9name = body.standings.results[8].player_name;
    let rank9rank = body.standings.results[8].rank;
    let rank9point = body.standings.results[8].total;
    let rank9teamname = body.standings.results[8].entry_name;

    //Rank 10
    let rank10name = body.standings.results[9].player_name;
    let rank10rank = body.standings.results[9].rank;
    let rank10point = body.standings.results[9].total;
    let rank10teamname = body.standings.results[9].entry_name;


    //For Twitter Tweet
    Twitter.post('statuses/update', { status: "Standing of LIGA : CHAPTER IV 🏆\n" + 
    "Rank " + rank6rank + " " + rank6teamname + " " + rank6point + " by " + rank6name + "\n" +
    "Rank " + rank7rank + " " + rank7teamname + " " + rank7point + " by " + rank7name + "\n" +
    "Rank " + rank8rank + " " + rank8teamname + " " + rank8point + " by " + rank8name + "\n" +
    "Rank " + rank9rank + " " + rank9teamname + " " + rank9point + " by " + rank9name + "\n" +
    "Rank " + rank10rank + " " + rank10teamname + " " + rank10point + " by " + rank10name + "\n" +
    "https://lunechain.com/Bot/FPLBot.html" }).then(result => {
      console.log("Standing of LIGA : CHAPTER IV Tweeted");

    }).catch(console.error);

    })
  }


  //FPL 11-15
  function FPL2(){
    request("https://fantasy.premierleague.com/api/leagues-classic/[yourleague]/standings/",{json : true}, async(err,res,body)=>{


    //Rank 11
    let rank11name = body.standings.results[10].player_name;
    let rank11rank = body.standings.results[10].rank;
    let rank11point = body.standings.results[10].total;
    let rank11teamname = body.standings.results[10].entry_name;

    //Rank 12
    let rank12name = body.standings.results[11].player_name;
    let rank12rank = body.standings.results[11].rank;
    let rank12point = body.standings.results[11].total;
    let rank12teamname = body.standings.results[11].entry_name;

    //Rank 13
    let rank13name = body.standings.results[12].player_name;
    let rank13rank = body.standings.results[12].rank;
    let rank13point = body.standings.results[12].total;
    let rank13teamname = body.standings.results[12].entry_name;

    //Rank 14
    let rank14name = body.standings.results[13].player_name;
    let rank14rank = body.standings.results[13].rank;
    let rank14point = body.standings.results[13].total;
    let rank14teamname = body.standings.results[13].entry_name;

    //Rank 15
    let rank15name = body.standings.results[14].player_name;
    let rank15rank = body.standings.results[14].rank;
    let rank15point = body.standings.results[14].total;
    let rank15teamname = body.standings.results[14].entry_name;

    //For Twitter Tweet
    Twitter.post('statuses/update', { status: "Standing of LIGA : CHAPTER IV 🏆\n" + 
    "Rank " + rank11rank + " " + rank11teamname + " " + rank11point + " by " + rank11name + "\n" +
    "Rank " + rank12rank + " " + rank12teamname + " " + rank12point + " by " + rank12name + "\n" +
    "Rank " + rank13rank + " " + rank13teamname + " " + rank13point + " by " + rank13name + "\n" +
    "Rank " + rank14rank + " " + rank14teamname + " " + rank14point + " by " + rank14name + "\n" +
    "Rank " + rank15rank + " " + rank15teamname + " " + rank15point + " by " + rank15name + "\n" +
    "https://lunechain.com/Bot/FPLBot.html" }).then(result => {
      console.log("Standing of LIGA : CHAPTER IV Tweeted");

    }).catch(console.error);

    })
  }


  //FPL 16-20
  function FPL3(){
    request("https://fantasy.premierleague.com/api/leagues-classic/[yourleague]/standings/",{json : true}, async(err,res,body)=>{


    //Rank 16
    let rank16name = body.standings.results[15].player_name;
    let rank16rank = body.standings.results[15].rank;
    let rank16point = body.standings.results[15].total;
    let rank16teamname = body.standings.results[15].entry_name;

    //Rank 17
    let rank17name = body.standings.results[16].player_name;
    let rank17rank = body.standings.results[16].rank;
    let rank17point = body.standings.results[16].total;
    let rank17teamname = body.standings.results[16].entry_name;

    //Rank 18
    let rank18name = body.standings.results[17].player_name;
    let rank18rank = body.standings.results[17].rank;
    let rank18point = body.standings.results[17].total;
    let rank18teamname = body.standings.results[17].entry_name;

    //Rank 19
    let rank19name = body.standings.results[18].player_name;
    let rank19rank = body.standings.results[18].rank;
    let rank19point = body.standings.results[18].total;
    let rank19teamname = body.standings.results[18].entry_name;

    //Rank 20
    let rank20name = body.standings.results[19].player_name;
    let rank20rank = body.standings.results[19].rank;
    let rank20point = body.standings.results[19].total;
    let rank20teamname = body.standings.results[19].entry_name;

    //For Twitter Tweet
    Twitter.post('statuses/update', { status: "Standing of LIGA : CHAPTER IV 🏆\n" + 
    "Rank " + rank16rank + " " + rank16teamname + " " + rank16point + " by " + rank16name + "\n" +
    "Rank " + rank17rank + " " + rank17teamname + " " + rank17point + " by " + rank17name + "\n" +
    "Rank " + rank18rank + " " + rank18teamname + " " + rank18point + " by " + rank18name + "\n" +
    "Rank " + rank19rank + " " + rank19teamname + " " + rank19point + " by " + rank19name + "\n" +
    "Rank " + rank20rank + " " + rank20teamname + " " + rank20point + " by " + rank20name + "\n" +
    "https://lunechain.com/Bot/FPLBot.html" }).then(result => {
      console.log("Standing of LIGA : CHAPTER IV Tweeted");

    }).catch(console.error);

    })
  }




app.get("/fpl",(req,res)=>{
  FPL();//calling the function
  res.send("I'm tweeting your FPL Standings")//Giving a response back.
})

app.get("/fpl",(req,res)=>{
  FPL1();//calling the function
  res.send("I'm tweeting your FPL Standings")//Giving a response back.
})

app.get("/fpl",(req,res)=>{
  FPL2();//calling the function
  res.send("I'm tweeting your FPL Standings")//Giving a response back.
})

app.get("/fpl",(req,res)=>{
  FPL3();//calling the function
  res.send("I'm tweeting your FPL Standings")//Giving a response back.
})


app.listen(3000, function() {
  console.log('+RTB+ TWITTER BOT ACTIVATED 🐦')
  
})