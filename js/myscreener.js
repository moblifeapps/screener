let theuseroption_link_to_open = "overwater";
let theuseroption_new_tab = true;
let theuseroption_keep_focus = true;
let one_string_for_all_coins_streams_1m = "";

    let thecoinslist = []; 

	  function SetFirstTimeStorage()
  {
      if(typeof(Storage) !== "undefined") 
      {
          localStorage.firsttimehere = '-';
      }
  }

  let ws_binance2= null;


 // $('body').on('click', 'a[target="_blank"]', function(e){
 //   e.preventDefault();
 //   chrome.tabs.create({url: $(this).prop('href'), active: false});
 //   return false;
//});
 
function add_all_the_streams_1m()
{
  
const ws_binance = new WebSocket("wss://fstream.binance.com/ws");

ws_binance.onerror = function() {
  console.log('ws_binance.onerror 1m: onerror.............................................................');
}

ws_binance.onclose = function() {
  console.log('ws_binance.onclose 1m: onclose.............................................................');
  add_all_the_streams_1m();
}


ws_binance.onping = function() { //Defines event handler for ping event
  console.log('ws_binance.onping 1m: pinggg.............................................................');
  ws_binance.pong(); //send pong frame
};



ws_binance.onopen = function() {
    try
    {
//    console.log('add_all_the_streams-one_string_for_all_coins_streams', one_string_for_all_coins_streams_1m);
  }
  catch (errrr) {
    console.log(errrr);
  }
  one_string_for_all_coins_streams_1m = one_string_for_all_coins_streams_1m.substring(0,one_string_for_all_coins_streams_1m.length-1);
  //one_string_for_all_coins_streams_5m =one_string_for_all_coins_streams_5m.substring(0,one_string_for_all_coins_streams_5m.length-1); //.replace("kline_1m","kline_5m"); //one_string_for_all_coins_streams_1m
  //one_string_for_all_coins_streams_15m = one_string_for_all_coins_streams_15m.substring(0,one_string_for_all_coins_streams_15m.length-1); 
  //var oneonestring = one_string_for_all_coins_streams_1m + ',' + one_string_for_all_coins_streams_5m;
  //var thelisttouse = oneonestring.split(',');
  var thelisttt_1m = one_string_for_all_coins_streams_1m.split(',');
  //  var thelistttt[] = one_string_for_all_coins_streams.split(',');
  //var thelisttt_1m = one_string_for_all_coins_streams_1m.split(',');
  //var thelisttt_5m = one_string_for_all_coins_streams_5m.split(',');
  //console.log('add_all_the_streams-thelisttt_5m:' ,thelisttt_5m);
  //console.log('add_all_the_streams-thelisttt:' ,thelisttt);
//var thelist_for_kline_5m = thelisttt.replace.replace('kline_1m','kline_5m');
//var thelisttouse = thelisttt + ',' + thelisttt_5m;
//var thelisttouse =  thelisttt_1m.unshift(thelisttt_5m);
//console.log('add_all_the_streams-thelisttouse:' ,thelisttouse);
////////////////////ws_binance.onopen = function() {
  //console.log('......................');
  try
  {
  ws_binance.send(
    JSON.stringify({
      method: "SUBSCRIBE",

        params: thelisttt_1m, // thelisttt_1m ,//,thelisttt_5m,
//      params: thelisttt,
      //thelisttouse
//////////////      params: [

//////////////          "btcusdt@kline_1m",
//////////////          "btcusdt@kline_5m",

//////////////      ],


      //      [
        //
  //      "btcusdt@aggTrade",
   //     "ethusdt@aggTrade",
    //    "yfiusdt@aggTrade",
    //    "bnbusdt@aggTrade",
   // thelisttt
  //    ],
//[
 // thelisttt,
//  thesymbollower + "@aggTrade",
//  thesymbollower +"@kline_1m"
//],
//      params: ["stream?streams=btcusdt@aggTrade/btcusdt@kline_1m"],
//      params: ["btcusdt@trade"],
      id: 2
    })
  );

}
catch (err) {
 console.log('add_all_the_streams-error:' ,err);
}
}
/* 

    Payload:

{
  "e": "kline",     // Event type
  "E": 1638747660000,   // Event time
  "s": "BTCUSDT",    // Symbol
  "k": {
    "t": 1638747660000, // Kline start time
    "T": 1638747719999, // Kline close time
    "s": "BTCUSDT",  // Symbol
    "i": "1m",      // Interval
    "f": 100,       // First trade ID
    "L": 200,       // Last trade ID
    "o": "0.0010",  // Open price
    "c": "0.0020",  // Close price
    "h": "0.0025",  // High price
    "l": "0.0015",  // Low price
    "v": "1000",    // Base asset volume
    "n": 100,       // Number of trades
    "x": false,     // Is this kline closed?
    "q": "1.0000",  // Quote asset volume
    "V": "500",     // Taker buy base asset volume
    "Q": "0.500",   // Taker buy quote asset volume
    "B": "123456"   // Ignore
  }
}
*/

//function formatAmount(a,b=2){if(!+a)return"0 $";const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1000));return`${parseFloat((a/Math.pow(1000,d)).toFixed(c))} ${["$","K $","M $","T $","TB","PB","EB","ZB","YB"][d]}`}

ws_binance.onmessage = function(event) {
////////////////////////////////  console.log(event.data)
   //let current_price_binance = JSON.parse(event.data);
   let stream_data = JSON.parse(event.data);
   try
   {

  
   ////////////console.log('stream_data:', stream_data.e);
   // kline
   // to parakatw douleuei gia na aggTrade:
   //if  (stream_data.e == "aggTrade")
   if  (stream_data.e == "kline")
   {
////     let thetime = Number(stream_data.k.T);
////     let aaaaa =  new Date(thetime);
////     console.log('________________________________________');
////     console.log('time:', aaaaa);
     let thelastprice = Number(stream_data.k.c);
 ///    let theticks_tf = Number(stream_data.k.n);
     let the_tf = String(stream_data.k.i);     
///     let thevol_tf = Math.floor(Number(stream_data.k.q)); // EINAI SE USDT (!) CORRECT ...
///     let the_base_asset_volume =Number(stream_data.k.Q); // EINAI MONO TA BUY's SE USDT (!) .... Taker buy base asset volume EINAI SE USDT (!) CORRECT ...
///     let thesells = thevol_tf - the_base_asset_volume; // EINAI TA SELL's (!)   // the_base_asset_volume - the_quote_asset_volume;
///     let thecvd_tf = Math.floor( the_base_asset_volume - thesells); // EINAI TA SELL's (!)   // the_base_asset_volume - the_quote_asset_volume;
     let thesymbol = stream_data.s // the symbol ..
////     console.log('________________________________________');
////     console.log('Price:', the_tf); // CORRECT (!)
////     console.log('Price:', thelastprice); // CORRECT (!)
////     console.log('Ticks so far in tf:',theticks_tf); // CORRECT (!)
////     console.log('VOLUME:', thevol_tf); // CORRECT (!) VOL IN USDT (!)
////     console.log('----------------------------------------');
////     console.log('Taker Buy BASE VOLUME:', the_base_asset_volume); // CORRECT (!) BUYS VOL IN USDT (!)
////     console.log('CVD:', thecvd_tf); // WRONG !!
  /////////////  console.log('the_tf:', the_tf);
     if (the_tf == "1m") {
      updatethepriceforasymbol(thesymbol,thelastprice);   
     }
  /////   updatethestatsforasymbol(thesymbol,theticks_tf,thevol_tf,thecvd_tf, the_tf);
     
     //ticksin1m
   //    console.log(thelastprice, ' ',thesymbol);
 /*      let therowindex = findtheindex(thesymbol);
//       therowindex = findtheindex(oneelement.s);

       console.log(thelastprice,thesymbol,therowindex);
       if (therowindex > -1)
       {

        myTable33.cell(therowindex, 1).data(thelastprice);
      }
   */
   }
   //  let stream_data222 = JSON.parse(stream_data);
   // if (stream_data222.e == "markPriceUpdate") 
   // {
   ///////////////// console.log('stream_data:', stream_data);
    // }
   
   //  console.log(event.data);
   // if (stream_data.e == "markPriceUpdate") 
   // {
   //  console.log('stream_data:', stream_data);
    //}
   }
   catch (ee) {
console.log('errorrr:' ,ee);

   }

}
//  console.log('add_all_the_streams--one_string_for_all_coins_streams meta');
 

}



function updatethepriceforasymbol(thesymbol,theprice)
{
  try
  {
  //let therowindex = findtheindex_Coin_List(thesymbol);
  let      therowindex = findtheindex(thesymbol);
  
  /////////////       console.log(theprice,thesymbol,therowindex);
         if (therowindex > -1)
         {
       //   thecoinslist[therowindex].symbollastprice = theprice; // = thepercent24hr;
          myTable33.cell(therowindex, 1).data(theprice);
        }
      }
      catch(errr2)
      {
        console.log(errr2);
      }
  
}


  function myFunctionOpenAnotherSymbol(thesymbol) {
	console.log('thesymbol: ' + thesymbol);
return;
	setCookie('symbol',thesymbol,300);
	//https://www.binance.com/en/futures/SOLUSDT
  
	//let newurl = window.location.origin;
	//let newurl = window.location.origin;
	let newurl = "https://overwater.mlapplications.com/remain.html"
//	newurl = "https://www.binance.com/en/futures/" + thesymbol
//	alert('newurl: ', newurl);
  //              newurl = newurl + '?symbol=' + thesymbol; //thesymb + '&interval=' +   interval;
			  //	alert('newurl2: ', newurl);
			//		 tvWidget.activeChart().symbol()
				//NeedsRedraw = true;
				  //thenewinterval = interval;
				////console.log('thenewinterval: ', thenewinterval);
				
				window.location.replace(newurl);
  
  } 
  
  function checkStorage() {
      if(typeof(Storage) !== "undefined") 
      {
          if (localStorage.firsttimehere) 
           {
              IsFirstTimeHere = 'false';
          }
          else
          {
              IsFirstTimeHere = 'true';	
          }
      }
    
  }
  
  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
	//console.log('getCookie: mpike sto getcookie');
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
///    return "";
		//console.log('getCookie: den brike !' , cname);
		return null;
  }
  
  
  function checkCookie() {
    var user=getCookie("firsttimehere");
    if (user != null) {
  
	//    if (user != "") {
    //  alert("Welcome again " + user);
  IsFirstTimeHere = 'false';
  SetFirstTimeStorage();
    } 
    
  }
  
  function checkCookieOLD() {
    var user=getCookie("firsttimehere");
    if (user != "") {
    //  alert("Welcome again " + user);
  IsFirstTimeHere = 'false';
    } else {
      // user = prompt("Please enter your name:","");
     //  if (user != "" && user != null) {
     //    setCookie("username", user, 300);
  IsFirstTimeHere = 'true';
       }
    
  }


/* Binance */
//let ws_binance = new WebSocket("wss://stream.binance.com:9443/ws");
//const { io } = require("socket.io-client");
//let ws_binance = new WebSocket("wss://stream.binance.com/ws");
//const e = require("cors");

//const { response } = require("express");
//<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.2/jquery.min.js"></script> 
let thePreviousFR_Price = -200;
let thePreviousFR_Time = -200;
let thePreviousOI_Price = -1;


let theMaximumOfUnplottingFundingRates = -1;
let theMaximumOfUnplottingLiquidations = -1;
let EinaiOratoToWatcher = true;
let thetradespinakas = []; 

var egineinitializetotable = false;

////////////////////////////let div_binance = document.getElementById("price_binance");
let last_price_binance = null;

// wss://fstream.binance.com/stream?streams=bnbusdt@aggTrade/btcusdt@markPrice
// wss://fstream.binance.com/ws/bnbusdt@aggTrade
let force_redraw_cache_now = false;


//let thefundingrates = [];
//let thefundingratespinakas = [];

//let theliquidations = [];
//let theliquidationspinakas = [];
//let theliqlevels = []; 
//let theliqlevelspinakas = [];

let myTable33 = $( "#example22" ); 

//let myTableLIQUIDATIONS = $( "#myTBLLiquidations" ); 

//$(DOMContentLoaded)
//PutTheRightHREF()

$(document).ready(function () {
 // alert('hereeeee');
  InitializeTheDTBL();
  


  //console.log('papariaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  //$( "[id^='b']" ).each(function(el){
 // $( '[id*=button_]' ).each(function(el){
  //  console.log(el);
//    el.val('Foo'); // do something with the input here.
 // });
 // console.log('papariaaaaaaaaaaaaaaaaaaaaaaaaaaa222');
/////////  InitializeTheDTBL_LIQUIDATIONS();
  });
 
function PutTheRightHREF()
{
  console.log('papariaaaaaaaaaaaaaaaaaaaaaaaaaaa');


//  const aaaaaa = document.querySelectorAll('[id*="button_coin_"]');
////console.log('search for buttons ....aaaaaa: ' + aaaaaa);

  //myTable33.row().every(function(){
    //console.log(this.data());
//});

  const matches = document.querySelectorAll("span");
  //console.log(matches);

  const thebuttons = document.querySelectorAll("[id^=button_coin_]");
  //console.log('thebuttons' + thebuttons);
  //console.log('thebuttons lenght:' + thebuttons.length);
  thebuttons.forEach(element => {
   // console.log(element);  
    var theiiiddd =element.id;  
   // console.log(theiiiddd);   
    BaleForOneCoin(theiiiddd);


  });

//  var textToWrite;
//for(var i in thebuttons){
//  theiiiddd = thebuttons.id;
 // console.log(i + ') ' + theiiiddd); // theiiiddd[i].value)
  //textToWrite = textBoxes[i].value;
   /* do your thing */
//}

//  console.log('papariaaaaaaaaaaaaaaaaaaaaaaaaaaa');
 // $( "[id^='b']" ).each(function(el){
 // $( '[id*=button_]' ).each(function(el){
 //   console.log(el);
//    el.val('Foo'); // do something with the input here.
 // });
 ////////////////////////console.log('papariaaaaaaaaaaaaaaaaaaaaaaaaaaa222');

//$('span[id^=button_coin_]').each(function() {
//////////  $( "input[name^='news']" ).val( "news here!" );
  //var xxx = this.id;
  //console.log('coin: ' + xxx);
///  var number = this.id.split('_').pop();
//});

}

function BaleForOneCoin(theiiiddd)
{
  const aaaaaaaendMessageId = document.getElementById(theiiiddd);
 // console.log('search for buttons ....,',theiiiddd);
  if (aaaaaaaendMessageId) {
  //  console.log('button found....',theiiiddd);
  
   
  
    aaaaaaaendMessageId.onclick = function() {
    //  console.log('button clicked 1....',theiiiddd);

      theiiiddd = theiiiddd.replace('button_coin_','');

  /////////    PutTheRightHREF();
  var wheretogolink = '';
  switch(theuseroption_link_to_open) {
    case 'overwater':
        wheretogolink = 'https://overwater.mlapplications.com/index.html?symbol=' + theiiiddd;
      // code block
      break;
    case 'binance_futures':
        // https://www.binance.com/en/futures/BTCUSDT
        wheretogolink = 'https://www.binance.com/en/futures/' + theiiiddd;
      break;
    case 'binance_spot':
        // https://www.binance.com/en/trade/ETH_USDT?type=spot
  //////      theiiiddd = theiiiddd.replace('USDT','_USDT');
        wheretogolink = 'https://www.binance.com/en/trade/' + theiiiddd;

        break;
      case 'tradingview':
        wheretogolink = 'https://www.tradingview.com/chart/PfJYZ7XZ/?symbol=BINANCE%3A' + theiiiddd + '.P';
      break;

        default:
          wheretogolink = 'https://overwater.mlapplications.com/index.html?symbol=' + theiiiddd;

      // code block
  }

    var newURL = wheretogolink; // "https://overwater.mlapplications.com/index.html";
    if (theuseroption_new_tab == true)
    {
      if (theuseroption_keep_focus == true)
          {
            chrome.tabs.create({ url: newURL , active: false });
          }        
        else
        {
          chrome.tabs.create({ url: newURL , active: true });

        }
    
      
    } //  telos tou     if (theuseroption_new_tab == true)
    else 
    {
      if (theuseroption_keep_focus == true)
          {
            chrome.tabs.update({url: newURL , active: false });


//            chrome.tabs.create({ url: newURL , active: false });
          }        
        else
        {
          chrome.tabs.update({url: newURL , active: true });
//          chrome.tabs.create({ url: newURL , active: true });

        }
   
    }

    };
  chrome.tabs
}}

let plithoscoins =0;

function my_invalidate_coins_list()
{
  var url2 = 'https://fapi.binance.com/fapi/v1/ticker/price' // Diabazw teleutaies times (!)
  return fetch(url2).then(res2 => {
    ////console.log(res2)
    ////console.log(res2.json)
    //        return fetch(this.binanceHost + '/api/v3/time').then(res => {
    //            return fetch(this.binanceHost + '/api/v1/exchangeInfo').then(res => {
            return res2.json()
        }).then(json2 => {
            ////console.log('Loipoooon !!! ...', json2)
            thecoinslist.forEach(element => {
                      let vrethike = false;
                     // for (let i =0; i< json2.symbols; i++)
                     json2.forEach(element2 => {
                      //////console.log('element.symbol:',element2.symbol);
                      if (element2.symbol == element.symbol)
                      {

                          ////console.log('To element pou exei timi:', element2.symbol);
                          vrethike = true;
                      }

                     }); 
                       if (vrethike == false)
                      {
                         ////console.log('To element pou den exei timi:', element.symbol);
                      }
                 });
                 
        });
  
}

function findtheindex(thesymbol)
{

  for (let i=0; i< plithoscoins;  i++)
  {
//      ////console.log(myTable33.row(i).data());
//      let row = table.row('#row-' + msg.id);
//let rowindex = row.index();      
  //  DataTable
    if (myTable33.row(i).data().symbol == thesymbol) // "BTCUSDT")
  //    alert('to brika!');
   // if (thecoinslist[i].symbol == "BTCUSDT")
    {
      return i;
    }
  }
}


function InitializeTheDTBL_LIQUIDATIONS()
{
  ////console.log('InitializeTheDTBL_LIQUIDATIONS');
  let theliqcolumns = [
    { "data" : "symbol", "title" : "Symbol" ,   "visible": false ,
  
     
  },
  { "data" : "timeinforce", "title" : "Time (ms)" ,"visible": false },
  { "data" : "timeinforce", "title" : "Event (!)" ,
  render: function ( data, type, row ) {

  var tigrafw= ""; // row.side;
  var thecolortouse = "red";
  if (row.side == "BUY") // that means forced buy, so a short liquidation happens and vice versa (!)
    {
      tigrafw = "SHORT";
      thecolortouse = "red";
//      thecolortouseICON =  "#C80000";  //red
  //    theiconnn = "0x2718"; // // 0x24C8 einai to S se kiklo (!)
    }
  else if (row.side == "SELL")
  {
    tigrafw = "LONG";
    thecolortouse = "green";
 //   thecolortouseICON = "#00C800";  // green
   // theiconnn = "0x2718"; //  einai to L se kiklo (!)
  }    
  var thedddtttt = row.thetimestamp.substring(0, 10);  // 2022-12-22 08:57:48.210
  var thettttttt = row.thetimestamp.substring(11, 23);
  var tigrafwasusdstr = String(row.averageprice * row.orderlastfilledquantity);
  var tigrafwasusd =  formatMoney(tigrafwasusdstr,2,'.',',') + " $";


  //let thetotalamountinusd = Number(the_o_bunch.ap) * Number(the_o_bunch.l);

//String(thetotalamountinusd);
//var tigrafwasusd =  formatMoney(tigrafwasusdstr,2,'.',',');
//String(tigrafwasusd) + ' $)'

//  row.thetimestamp.subcsa dsa
  return  "<span style='width:1px;display: none;  visibility: hidden;'>" + row.timeinforce +"</span> " +
  "<span style='margin: 2px; color: white; font-size: 12px; ' class='badge " + thecolortouse +"'>" + tigrafw + "</span><span style= 'padding-left: 5px; width:90px; font-size:12px; color: " + thecolortouse +";'  title='" + row.symbol +"')'>" + row.symbol + " </span><br>"+
  "<span style='margin: 2px; font-size:12px; color: black;' class='badge white'>"+row.averageprice + "</span><br>"+
  "<div style='margin-left: 5px; width: 75%; height: 1px; background-color: black '></div>" +
//  "<span style='margin-bottom: 2px; margin-top: 2px; color: " + thecolortouse + "; width:153px; background: rgba(255,255,255,0.2); font-size:12px; font-weight: bold;  display:block; text-align:center; '>"+tigrafwasusd+"</span>" +
  "<span style='margin-bottom: 2px; margin-top: 2px; color: " + thecolortouse + "; width:143px;  font-size:12px; font-weight: bold;  display:block; text-align:center; '>"+tigrafwasusd+"</span>" +
//  <span style='width:65px; font-size:10px; display:block; text-align:center; margin:0 auto;'>("+thedddtttt+")</span>" + 
  "<div style='margin-left: 5px; width: 75%; height: 1px; background-color: black '></div> " +
  
  "<span style='width:140px; font-size:10px; display:block; text-align:center; margin:0 auto;'><b>"+ thettttttt +  "</b> ("+thedddtttt+")</span>" +  
  "<div style='width: 100%; height: 2px; background-color: black '></div> ";
      
          //  "<span style='font-size:10px; color: black;' class='badge white'>"+row.averageprice + "</span><span>," + row.orderlastfilledquantity + "</span><br>"+
          //  "<span style='width:65px; font-size:10px; font-weight: bold;  display:block; text-align:center; margin:0 auto;'>"+thettttttt+"</span><span style='width:65px; font-size:10px; display:block; text-align:center; margin:0 auto;'>("+thedddtttt+")</span>"; 
           // "<span style='width:65px; font-size:10px; display:block; text-align:center; margin:0 auto;'>("+thedddtttt+")</span>"; 
}
  },

   
 ///////////////   { "data" : "averageprice", "title" : "Price !",
 /*   render: function (data, type) {
      var number = $.fn.dataTable.render
      .number(',', '.', 2, '')
    .display(data);
    
    if (type === 'display') {
    let color = 'black';
    if (data < 0) {
    color = 'red';
    } else if (data > 0) {
    color = 'green';
    }
    //https://s3-symbol-logo.tradingview.com/crypto/XTVCUSDT.svg
    return '<span style="color:' + color + '">' + number + ' %</span>';
    }
    
    return number;
    } */
  
  
  ////////} // telos tou symbol24hr
];
var xxxx = $(document).height();
var telikoscrolly = Number(xxxx) - 84 - 43 - 38 -47; 
//////console.log('InitializeTheDTBL_LIQUIDATIONS telikoscrolly:',telikoscrolly);
//////console.log('InitializeTheDTBL_LIQUIDATIONS 22');
//////console.log('InitializeTheDTBL_LIQUIDATIONS, theliquidations:' , theliquidations);
var thelength = theliquidations.length;
//////console.log('InitializeTheDTBL_LIQUIDATIONS, thelength :' , thelength );

if (theliquidations[thelength -1].symbol == '' )
{
  theliquidations.splice(-1);
}
thelength = theliquidations.length;
//////console.log('InitializeTheDTBL_LIQUIDATIONS, thelength :' , thelength );
//////console.log('InitializeTheDTBL_LIQUIDATIONS, theliquidations:' , theliquidations);

myTableLIQUIDATIONS = $('#myTBLLiquidations').DataTable({
  responsive: true,
  //paging: false,
  //  scrollY: '200px',
//   scrollCollapse: true,
//       paging: false,
//////////////////////////////////////////  pageLength:200,
scroller: {
  displayBuffer: 10
}, 
  scrollY: '100',
//scrollY: telikoscrolly ,
//    scrollY: '82vh',
//   scrollY: '80vh',
  scrollResize: true,
  scrollX: false,
//  scrollY: window.style.height - 85,    // calc((100% - 65 - 85)), // 100,
  scrollCollapse: true,
  paging: false,
  //lengthChange: false,
//  pageLength: 100
columnDefs: [{
  "targets": '_all',
  "createdCell": function (td, cellData, rowData, row, col) {
  $(td).css('padding', '0px')
  }
  }],
data : theliquidations,
columns : theliqcolumns,
//   columns: [
//      null,
//       {orderDataType: 'dom-text-numeric'},
//       {orderDataType: 'dom-text-numeric'},
   //   {orderDataType: 'dom-text-numeric'},
//   ],
  order: [[1, 'desc']],
  info: false,
  dom: 'lrt',
  search: ['']
});
egineinitializetotable = true;

////console.log('InitializeTheDTBL_LIQUIDATIONS just before...');
myTableLIQUIDATIONS.search(DefaultValueForSymbol).draw()
////console.log('InitializeTheDTBL_LIQUIDATIONS just after...');

///////////var t = $('#myTBLLiquidations').DataTable();

try
{
 // ////console.log('test1122');

//  const filteted = myTableLIQUIDATIONS.data().filter((item, index) => myids.includes(index));
  /*var filteredData = myTableLIQUIDATIONS
      .column( 0  )
      .data()
      .filter( function ( value, index ) {
          return value == 'BTCUSDT' ? true : false;
      } );
*/

  //myTableLIQUIDATIONS.filter( function ( value, index ) {
    //        return value == 'BTCUSDT' ? true : false;
 //  });
  /*  $('#myTBLLiquidations').dataTable( {
    "columns": [
    { "visible": false },
    { "visible": false },
    null
//    null,
    ] } );
    ////console.log('test1122 aaa');
    */
    /*
  ////console.log('test1122');
  var yyy = t.column('symbol').visible(false);
  yyy.visible(false);

  var www = t.column('timeinforce').visible(false);
  www.visible(false);

  var column = myTableLIQUIDATIONS.column($('#myTBLLiquidations').attr('symbol'));
  column.visible(false);

  var column22 = myTableLIQUIDATIONS.column($('#myTBLLiquidations').attr('timeinforce'));
  column22.visible(false);
*/
  // var yyy = t.column().attr('symbol');//.add(anewliquidation).draw(true);
  //yyy.visible(false);
  
 // var ttt = t.column().attr('timeinforce');//.add(anewliquidation).draw(true);
//  ttt.visible(false);
}
catch (er432)
{
  //console.log('er432 ', er432);

}



//myTableLIQUIDATIONS
/*var column = t.column($('#myTBLLiquidations').attr('symbol'));
column.visible(false);

// Toggle the visibility
//column.visible(!column.visible());


var column2 = t.column($('#myTBLLiquidations').attr('timeinforce'));

// Toggle the visibility
column2.visible(false);
*/


//var t = $('#myTBLLiquidations').DataTable();

/////////////var column3 = table.column($('#myTBLLiquidations').attr('symbol'));

//var t = $('#myTBLLiquidations').DataTable();

//for (i=0; i < theliquidations.length; i++)
//  {
//    //console.log('i: ' , i);
  //  t.row.add([theliquidations[i].symbol,theliquidations[i].timeinforce, theliquidations[i].averageprice]).draw(false);
//    t.row.add(theliquidations[i]).draw(false);
//  }
}


function CheckBoxSwitchLiqDataView(value)
{
	//mycheckforswitchliqdata
 //	alert('hahhahahahahha');
//	var tttttt = $('#myswitchliqdata').prop('checked');

	//$('#yourswitch').prop('checked', false);
//	//console.log(tttttt);

	let arxiko = $('#mycheckforswitchliqdata').prop('checked');
	//document.getElementById('myswitchliqdata'); // value;
     //console.log('arxiko,' , arxiko);
	if (arxiko == true)
	{
		//myTableLIQUIDATIONS.search('BTCUSDT').draw()
    // 
    myTableLIQUIDATIONS.search(DefaultValueForSymbol).draw()
	}
	else
	{
		myTableLIQUIDATIONS.search('').draw()
	}

}	
//const lalalala = document.getElementById("button_coin_");
//console.log('search for buttons ....lalalala: ' + lalalala);
console.log('hereeee11');
const TheSettingsId = document.getElementById("go-to-options");
console.log('hereeee22');
if (TheSettingsId) {
  TheSettingsId.onclick = function() {
  console.log('button clicked 1....');
  if (chrome.runtime.openOptionsPage) {
    console.log('hereeee33');
    chrome.runtime.openOptionsPage();
  } else {
    console.log('hereee44');
    window.open(chrome.runtime.getURL('options.html'));
  }
};
};

////////////document.addEventListener('DOMContentLoaded', restoreOptions);
const restoreOptions = () => {
  console.log('Mpike sto restoreOptions');
  chrome.storage.sync.get(
    { favoritewheretogo: 'overwater', linksinnewtab: true },
    (items) => {
      theuseroption_link_to_open = items.favoritewheretogo;
      theuseroption_new_tab = items.linksinnewtab;
      theuseroption_keep_focus = items.keepthefocus;
      console.log('restoreOptions:' , theuseroption_link_to_open);
      
      console.log('restoreOptions:' , theuseroption_new_tab);

//      document.getElementById('wheretogo').value = items.favoritewheretogo;
  //    document.getElementById('like').checked = items.likesColor;
    }
  );
};


/*
document.querySelector('#go-to-options').addEventListener('click', function() {
  console.log('hereeee');
  if (chrome.runtime.openOptionsPage) {
    console.log('hereeee22');
    chrome.runtime.openOptionsPage();
  } else {
    console.log('hereeee33');
    window.open(chrome.runtime.getURL('options.html'));
  }
});
*/
console.log('hereeee55');


//mlappslogo
const themlappslogoId = document.getElementById("mlappslogo");
//console.log('search for buttons ....');
if (themlappslogoId) {
  //console.log('button found....');

 

  themlappslogoId.onclick = function() {
    //console.log('button clicked 1....');
    //PutTheRightHREF();
  var newURL = "https://www.mlapplications.com";
    chrome.tabs.create({ url: newURL , active: true });
  };
}


const sendMessageId = document.getElementById("myadvancedbutton");
console.log('search for buttons ....');
if (sendMessageId) {
  console.log('button found....');

 

  sendMessageId.onclick = function() {
    console.log('button clicked 1....');
    PutTheRightHREF();
  var newURL = "https://overwater.mlapplications.com/index.html";
    chrome.tabs.create({ url: newURL , active: false });
  };
    
// $('body').on('click', 'a[target="_blank"]', function(e){
 //   e.preventDefault();
 //   chrome.tabs.create({url: $(this).prop('href'), active: false});
 //   return false;
//});
 
}
else
{
  console.log('button not found....');

}


function InitializeTheDTBL()
{
console.log('InitializeTheDTBL....')
  let thecoinscolumns = [
    { "data" : "symbol", "title" : "Symbol" ,
  
    render: function (data, type , row) {
        if (type === 'display') {
      let link = window.location.origin ; // 'https://datatables.net';
      //if (data[0] < 'H') {
      link = link + '?symbol=' + data; // 'http://cloudtables.com';
      // } else if (data[0] < 'S') {
      //     link = 'http://editor.datatables.net';
      // }
      let theiconlink = '';
      switch (data) {
        case 'BTCUSDT':  theiconlink = window.location.origin + '/css/pngsss/1.png'; break;
       case 'ETHUSDT':  theiconlink = window.location.origin + '/css/pngsss/1027.png'; break;
       case 'DOGEUSDT':  theiconlink = window.location.origin + '/css/pngsss/74.png'; break;
       case 'APEUSDT':  theiconlink = window.location.origin + '/css/pngsss/18876.png'; break;
       case 'XRPUSDT':  theiconlink = window.location.origin + '/css/pngsss/52.png'; break;
       case 'BNBUSDT':  theiconlink = window.location.origin + '/css/pngsss/1839.png'; break;
       case 'LTCUSDT':  theiconlink = window.location.origin + '/css/pngsss/2.png'; break;
       case 'AXSUSDT':  theiconlink = window.location.origin + '/css/pngsss/6783.png'; break;
       case 'MASKUSDT':  theiconlink = window.location.origin + '/css/pngsss/8536.png'; break;
       case 'OCEANUSDT':  theiconlink = window.location.origin + '/css/pngsss/3911.png'; break;
       case 'LINKUSDT':  theiconlink = window.location.origin + '/css/pngsss/1975.png'; break;
       case 'MATICUSDT':  theiconlink = window.location.origin + '/css/pngsss/3890.png'; break;
       case 'CHZUSDT':  theiconlink = window.location.origin + '/css/pngsss/4066.png'; break;
       case 'EOSUSDT':  theiconlink = window.location.origin + '/css/pngsss/1765.png'; break;
       case 'WAVESUSDT':  theiconlink = window.location.origin + '/css/pngsss/1274.png'; break;
       case 'SOLUSDT':  theiconlink = window.location.origin + '/css/pngsss/5426.png'; break;
       case 'DOTUSDT':  theiconlink = window.location.origin + '/css/pngsss/6636.png'; break;
       case 'ETCUSDT':  theiconlink = window.location.origin + '/css/pngsss/1321.png'; break;
       case 'ADAUSDT':  theiconlink = window.location.origin + '/css/pngsss/2010.png'; break;
       case 'FTMUSDT':  theiconlink = window.location.origin + '/css/pngsss/3513.png'; break;
       case 'DYDXUSDT':  theiconlink = window.location.origin + '/css/pngsss/11156.png'; break;
       case 'GMTUSDT':  theiconlink = window.location.origin + '/css/pngsss/18069.png'; break;
       case 'GRTUSDT':  theiconlink = window.location.origin + '/css/pngsss/6719.png'; break;
       case 'NEARUSDT':  theiconlink = window.location.origin + '/css/pngsss/6535.png'; break;
       case 'APTUSDT':  theiconlink = window.location.origin + '/css/pngsss/21794.png'; break;
       case 'AVAXUSDT':  theiconlink = window.location.origin + '/css/pngsss/5805.png'; break;
       case 'CRVUSDT':  theiconlink = window.location.origin + '/css/pngsss/6538.png'; break;
       case 'TRXUSDT':  theiconlink = window.location.origin + '/css/pngsss/1958.png'; break;
       case 'BCHUSDT':  theiconlink = window.location.origin + '/css/pngsss/1831.png'; break;
       case 'OPUSDT':  theiconlink = window.location.origin + '/css/pngsss/11840.png'; break;
       case 'BNXUSDT':  theiconlink = window.location.origin + '/css/pngsss/9891.png'; break;
       case 'SUSHIUSDT':  theiconlink = window.location.origin + '/css/pngsss/6758.png'; break;
       case 'LITUSDT':  theiconlink = window.location.origin + '/css/pngsss/6833.png'; break;
       case 'PEOPLEUSDT':  theiconlink = window.location.origin + '/css/pngsss/14806.png'; break;
       case 'FILUSDT':  theiconlink = window.location.origin + '/css/pngsss/2280.png'; break;
       case 'ATOMUSDT':  theiconlink = window.location.origin + '/css/pngsss/3794.png'; break;
       case 'BANDUSDT':  theiconlink = window.location.origin + '/css/pngsss/4679.png'; break;
       case 'ANTUSDT':  theiconlink = window.location.origin + '/css/pngsss/1680.png'; break;
       case 'SANDUSDT':  theiconlink = window.location.origin + '/css/pngsss/6210.png'; break;
       case 'RENUSDT':  theiconlink = window.location.origin + '/css/pngsss/2539.png'; break;
       case 'ALPHAUSDT':  theiconlink = window.location.origin + '/css/pngsss/7232.png'; break;
       case 'XMRUSDT':  theiconlink = window.location.origin + '/css/pngsss/328.png'; break;
       case 'CELOUSDT':  theiconlink = window.location.origin + '/css/pngsss/5567.png'; break;
       case 'DASHUSDT':  theiconlink = window.location.origin + '/css/pngsss/131.png'; break;
       case 'UNIUSDT':  theiconlink = window.location.origin + '/css/pngsss/7083.png'; break;
       case 'KNCUSDT':  theiconlink = window.location.origin + '/css/pngsss/1982.png'; break;
       case 'UNFIUSDT':  theiconlink = window.location.origin + '/css/pngsss/7672.png'; break;
       case 'YFIUSDT':  theiconlink = window.location.origin + '/css/pngsss/5864.png'; break;
       case 'ZRXUSDT':  theiconlink = window.location.origin + '/css/pngsss/1896.png'; break;
       case 'RLCUSDT':  theiconlink = window.location.origin + '/css/pngsss/1637.png'; break;
       case 'ALGOUSDT':  theiconlink = window.location.origin + '/css/pngsss/4030.png'; break;
       case 'CTSIUSDT':  theiconlink = window.location.origin + '/css/pngsss/5444.png'; break;
       case 'C98USDT':  theiconlink = window.location.origin + '/css/pngsss/10903.png'; break;
       case 'RUNEUSDT':  theiconlink = window.location.origin + '/css/pngsss/4157.png'; break;
       case 'QTUMUSDT':  theiconlink = window.location.origin + '/css/pngsss/1684.png'; break;
       case 'MANAUSDT':  theiconlink = window.location.origin + '/css/pngsss/1966.png'; break;
       case 'NEOUSDT':  theiconlink = window.location.origin + '/css/pngsss/1376.png'; break;
       case 'SNXUSDT':  theiconlink = window.location.origin + '/css/pngsss/2586.png'; break;
       case 'FLOWUSDT':  theiconlink = window.location.origin + '/css/pngsss/4558.png'; break;
       case 'THETAUSDT':  theiconlink = window.location.origin + '/css/pngsss/2416.png'; break;
       case 'GALAUSDT':  theiconlink = window.location.origin + '/css/pngsss/7080.png'; break;
       case 'ZECUSDT':  theiconlink = window.location.origin + '/css/pngsss/1437.png'; break;
       case '1INCHUSDT':  theiconlink = window.location.origin + '/css/pngsss/8104.png'; break;
       case 'KAVAUSDT':  theiconlink = window.location.origin + '/css/pngsss/4846.png'; break;
       case 'AAVEUSDT':  theiconlink = window.location.origin + '/css/pngsss/7278.png'; break;
       case 'EGLDUSDT':  theiconlink = window.location.origin + '/css/pngsss/6892.png'; break;
       case 'SFPUSDT':  theiconlink = window.location.origin + '/css/pngsss/8119.png'; break;
       case 'XLMUSDT':  theiconlink = window.location.origin + '/css/pngsss/512.png'; break;
       case 'JASMYUSDT':  theiconlink = window.location.origin + '/css/pngsss/8425.png'; break;
       case 'ENSUSDT':  theiconlink = window.location.origin + '/css/pngsss/13855.png'; break;
       case 'WOOUSDT':  theiconlink = window.location.origin + '/css/pngsss/7501.png'; break;
       case 'KSMUSDT':  theiconlink = window.location.origin + '/css/pngsss/5034.png'; break;
       case 'COMPUSDT':  theiconlink = window.location.origin + '/css/pngsss/5692.png'; break;
       case 'ARUSDT':  theiconlink = window.location.origin + '/css/pngsss/5632.png'; break;
       case 'TRBUSDT':  theiconlink = window.location.origin + '/css/pngsss/4944.png'; break;
       case 'ENJUSDT':  theiconlink = window.location.origin + '/css/pngsss/2130.png'; break;
       case 'XTZUSDT':  theiconlink = window.location.origin + '/css/pngsss/2011.png'; break;
       case 'LRCUSDT':  theiconlink = window.location.origin + '/css/pngsss/1934.png'; break;
       case 'ROSEUSDT':  theiconlink = window.location.origin + '/css/pngsss/7653.png'; break;
       case 'ZILUSDT':  theiconlink = window.location.origin + '/css/pngsss/2469.png'; break;
       case 'RSRUSDT':  theiconlink = window.location.origin + '/css/pngsss/3964.png'; break;
       case 'XEMUSDT':  theiconlink = window.location.origin + '/css/pngsss/873.png'; break;
       case 'REEFUSDT':  theiconlink = window.location.origin + '/css/pngsss/6951.png'; break;
       case 'KLAYUSDT':  theiconlink = window.location.origin + '/css/pngsss/4256.png'; break;
       case 'MKRUSDT':  theiconlink = window.location.origin + '/css/pngsss/1518.png'; break;
       case 'CHRUSDT':  theiconlink = window.location.origin + '/css/pngsss/3978.png'; break;
       case 'BELUSDT':  theiconlink = window.location.origin + '/css/pngsss/6928.png'; break;
       case 'HOTUSDT':  theiconlink = window.location.origin + '/css/pngsss/2682.png'; break;
       case 'NKNUSDT':  theiconlink = window.location.origin + '/css/pngsss/2780.png'; break;
       case 'OMGUSDT':  theiconlink = window.location.origin + '/css/pngsss/1808.png'; break;
       case 'HNTUSDT':  theiconlink = window.location.origin + '/css/pngsss/5665.png'; break;
       case 'ONTUSDT':  theiconlink = window.location.origin + '/css/pngsss/2566.png'; break;
       case 'SXPUSDT':  theiconlink = window.location.origin + '/css/pngsss/4279.png'; break;
       case 'LINAUSDT':  theiconlink = window.location.origin + '/css/pngsss/7102.png'; break;
       case 'VETUSDT':  theiconlink = window.location.origin + '/css/pngsss/3077.png'; break;
       case 'HBARUSDT':  theiconlink = window.location.origin + '/css/pngsss/4642.png'; break;
       case 'MTLUSDT':  theiconlink = window.location.origin + '/css/pngsss/1788.png'; break;
       case 'IOTAUSDT':  theiconlink = window.location.origin + '/css/pngsss/1720.png'; break;
       case 'ATAUSDT':  theiconlink = window.location.origin + '/css/pngsss/10188.png'; break;
       case 'ALICEUSDT':  theiconlink = window.location.origin + '/css/pngsss/8766.png'; break;
       case 'GALUSDT':  theiconlink = window.location.origin + '/css/pngsss/11877.png'; break;
       case 'ANKRUSDT':  theiconlink = window.location.origin + '/css/pngsss/3783.png'; break;
       case 'BALUSDT':  theiconlink = window.location.origin + '/css/pngsss/5728.png'; break;
       case 'CELRUSDT':  theiconlink = window.location.origin + '/css/pngsss/3814.png'; break;
       case 'STORJUSDT':  theiconlink = window.location.origin + '/css/pngsss/1772.png'; break;
       case 'INJUSDT':  theiconlink = window.location.origin + '/css/pngsss/7226.png'; break;
       case 'RVNUSDT':  theiconlink = window.location.origin + '/css/pngsss/2577.png'; break;
       case 'IMXUSDT':  theiconlink = window.location.origin + '/css/pngsss/10603.png'; break;
       case 'QNTUSDT':  theiconlink = window.location.origin + '/css/pngsss/3155.png'; break;
       case 'STMXUSDT':  theiconlink = window.location.origin + '/css/pngsss/2297.png'; break;
       case 'ZENUSDT':  theiconlink = window.location.origin + '/css/pngsss/1698.png'; break;
       case 'GTCUSDT':  theiconlink = window.location.origin + '/css/pngsss/10052.png'; break;
       case 'BATUSDT':  theiconlink = window.location.origin + '/css/pngsss/1697.png'; break;
       case 'ICXUSDT':  theiconlink = window.location.origin + '/css/pngsss/2099.png'; break;
       case 'STGUSDT':  theiconlink = window.location.origin + '/css/pngsss/18934.png'; break;
       case 'TOMOUSDT':  theiconlink = window.location.origin + '/css/pngsss/2570.png'; break;
       case 'BLZUSDT':  theiconlink = window.location.origin + '/css/pngsss/2505.png'; break;
       case 'BAKEUSDT':  theiconlink = window.location.origin + '/css/pngsss/7064.png'; break;
       case 'DGBUSDT':  theiconlink = window.location.origin + '/css/pngsss/109.png'; break;
       case 'FLMUSDT':  theiconlink = window.location.origin + '/css/pngsss/7150.png'; break;
       case 'DENTUSDT':  theiconlink = window.location.origin + '/css/pngsss/1886.png'; break;
       case 'ONEUSDT':  theiconlink = window.location.origin + '/css/pngsss/3945.png'; break;
       case 'OGNUSDT':  theiconlink = window.location.origin + '/css/pngsss/5117.png'; break;
       case 'COTIUSDT':  theiconlink = window.location.origin + '/css/pngsss/3992.png'; break;
       case 'IOSTUSDT':  theiconlink = window.location.origin + '/css/pngsss/2405.png'; break;
       case 'SKLUSDT':  theiconlink = window.location.origin + '/css/pngsss/5691.png'; break;
       case 'LPTUSDT':  theiconlink = window.location.origin + '/css/pngsss/3640.png'; break;
       case 'AUDIOUSDT':  theiconlink = window.location.origin + '/css/pngsss/7455.png'; break;
       case 'API3USDT':  theiconlink = window.location.origin + '/css/pngsss/7737.png'; break;
       case 'ARPAUSDT':  theiconlink = window.location.origin + '/css/pngsss/4039.png'; break;
       case 'IOTXUSDT':  theiconlink = window.location.origin + '/css/pngsss/2777.png'; break;
       case 'CTKUSDT':  theiconlink = window.location.origin + '/css/pngsss/4807.png'; break;
       case 'SPELLUSDT':  theiconlink = window.location.origin + '/css/pngsss/11289.png'; break;
       case 'DARUSDT':  theiconlink = window.location.origin + '/css/pngsss/11374.png'; break;
       case 'DUSKUSDT':  theiconlink = window.location.origin + '/css/pngsss/4092.png'; break;
       case 'DEFIUSDT':  theiconlink = window.location.origin + '/css/pngsss/4276.png'; break;
       case '1000LUNCUSDT':   theiconlink = window.location.origin + '/css/pngsss/1000LUNC.png'; break;
      case '1000SHIBUSDT':   theiconlink = window.location.origin + '/css/pngsss/1000SHIB.png'; break;
      case '1000XECUSDT':   theiconlink = window.location.origin + '/css/pngsss/1000XEC.png'; break;
      case 'BLUEBIRDUSDT':   theiconlink = window.location.origin + '/css/pngsss/BLUEBIRD.png'; break;
      case 'BTCDOMUSDT':   theiconlink = window.location.origin + '/css/pngsss/BTCDOM.png'; break;
      case 'BTSUSDT':   theiconlink = window.location.origin + '/css/pngsss/BTS.png'; break;
      case 'CVCUSDT':   theiconlink = window.location.origin + '/css/pngsss/CVC.png'; break;
      case 'CVXUSDT':   theiconlink = window.location.origin + '/css/pngsss/CVX.png'; break;
      case 'FOOTBALLUSDT':   theiconlink = window.location.origin + '/css/pngsss/FOOTBALL.png'; break;
      case 'FTTUSDT':   theiconlink = window.location.origin + '/css/pngsss/FTT.png'; break;
      case 'ICPUSDT':   theiconlink = window.location.origin + '/css/pngsss/ICP.png'; break;
      case 'LDOUSDT':   theiconlink = window.location.origin + '/css/pngsss/LDO.png'; break;
      case 'LUNA2USDT':   theiconlink = window.location.origin + '/css/pngsss/LUNA2.png'; break;
      case 'SCUSDT':   theiconlink = window.location.origin + '/css/pngsss/SC.png'; break;
      case 'SRMUSDT':   theiconlink = window.location.origin + '/css/pngsss/SRM.png'; break;
      case 'TLMUSDT':   theiconlink = window.location.origin + '/css/pngsss/TLM.png'; break;
      case 'RAYUSDT':   theiconlink = window.location.origin + '/css/pngsss/RAY.png'; break;
      default: theiconlink = window.location.origin + '/css/pngsss/unknown.png'; break;
       }
          

      // if (theiconlink.length > 1) 
//      return '<a href="' + link + '">' + data + '</a>';
       let thesttrrrrr = '<img src="'+ theiconlink +'" alt="' +  data + '.png" style="width: 32px; height: 32px;" /> ';
       return  "<span style='width: 200px;' class='waves-effect waves-blue blue-text text-darken-2 z-depth-1' title='" + data + "' id='button_coin_" + data + "' >" +thesttrrrrr + "<b>" + data +"</b></span>";
        //; " + data + "'
}
      
      return data;
      },
  },
    { "data" : "symbollastprice", "title" : "Price" },
    { "data" : "symbol24hrpercent", "title" : "24h %",
    render: function (data, type) {
      var number = $.fn.dataTable.render
      .number(',', '.', 2, '')
    .display(data);
    
    if (type === 'display') {
    let color = 'black';
    if (data < 0) {
    color = 'red';
    } else if (data > 0) {
    color = 'green';
    }
    //https://s3-symbol-logo.tradingview.com/crypto/XTVCUSDT.svg
    return '<span style="color:' + color + '">' + number + ' %</span>';
    }
    
    return number;
    }
  
  
  } // telos tou symbol24hr
  ,
  { "data" : "symbol24hrfromtop", "title" : "D24hH",
    render: function (data, type) {
      var number = $.fn.dataTable.render
      .number(',', '.', 2, '')
    .display(data);
    
    if (type === 'display') {
//    let color = 'black';
    let color = 'black';
 //   if (data < 1) {
 //   color = 'blue';
 //   }

    //  if (data < 0) {
  //  color = 'red';
  //  } else if (data > 0) {
  //  color = 'green';
  //  }
    //https://s3-symbol-logo.tradingview.com/crypto/XTVCUSDT.svg
    return '<span style="color:' + color + '">' + number + ' %</span>';
    }
    
    return number;
    }
  
  
  } //  telos tou symbol24hrfromtop
  ,
  { "data" : "symbol24hrfrombottom", "title" : "D24hL",
    render: function (data, type) {
      var number = $.fn.dataTable.render
      .number(',', '.', 2, '')
    .display(data);
    
    if (type === 'display') {
    let color = 'black';
  //  if (data > -1) {
  //  color = 'blue';
  //  }
  // else if (data > 0) {
  //  color = 'green';
  //  }
    //https://s3-symbol-logo.tradingview.com/crypto/XTVCUSDT.svg
    return '<span style="color:' + color + '">' + number + ' %</span>';
    }
    
    return number;
    }
  
  
  } //  telos tou symbol24hrfrombottom
];

    var url = 'https://fapi.binance.com/fapi/v1/ticker/price'
    return fetch(url).then(res => {
        return res.json()
    }).then(json => {
    json.forEach(element => {
    let thess =element.symbol; 
    let lastpr =  element.price;
    if (thess.endsWith('USDT') == true)
    {
      one_string_for_all_coins_streams_1m= one_string_for_all_coins_streams_1m + thess.toLowerCase() + "@kline_1m,"
     
      plithoscoins = plithoscoins+1;
      thecoinslist = [...thecoinslist, {
                     symbol: thess , //* 1000,Math.floor(Number(bar.time) / 1000),
                     symbollastprice: lastpr, // 0,
                     symbol24hrpercent: 0,
                     symbol24hrfromtop: 0,
                     symbol24hrfrombottom: 0,
                     //volume: Number(bar.volume)
                 }];
    }
  }); // telos tou for each ...

myTable33 = $('#example22').DataTable({
    responsive: true,
    //"fnInitComplete": function (oSettings, json) {
      fnInitComplete: function (oSettings, json) {
        PutTheRightHREF();
      },
    //paging: false,
    //  scrollY: '200px',
//   scrollCollapse: true,
//       paging: false,
    pageLength:200,
    scrollY: '200',
 //   scrollY: '80vh',
    scrollResize: true,
    scrollX: false,
  //  scrollY: window.style.height - 85,    // calc((100% - 65 - 85)), // 100,
    scrollCollapse: true,
    paging: false,
    //lengthChange: false,
  //  pageLength: 100
  columnDefs: [
    { width: 200, targets: 0 },
    {
    "targets": '_all',
    "createdCell": function (td, cellData, rowData, row, col) {
    $(td).css('padding', '0px');
    $(td).css('width', '200px');
    }
    },
    
  
  ],
    
  
    fixedColumns: true,

    
data : thecoinslist,
columns : thecoinscolumns,
 //   columns: [
  //      null,
 //       {orderDataType: 'dom-text-numeric'},
 //       {orderDataType: 'dom-text-numeric'},
     //   {orderDataType: 'dom-text-numeric'},
 //   ],
    order: [[2, 'desc']],

});
//"fnInitComplete": function (oSettings, json) {


//);
//myTable33.in
PutTheRightHREF();
restoreOptions();
add_all_the_streams_1m();
    })
}

 

function myFunctionOpenUrl(theurl) {
  // theurl = 'https://www.mlapplications.com' + theurl;
// var myWindow = window.open(theurl, "", "toolbar=yes, location=yes, directories=yes, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=yes, width=1024, height=768");
var myWindow = window.open(theurl, "", "toolbar=1, menubar=1, scrollbars=1, resizable=1, width=1024, height=768");

}
function getCookie(cname) {
	//console.log('getCookie: mpike sto getcookie');
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
///    return "";
		//console.log('getCookie: den brike !' , cname);
		return null;
  }

let DefaultValueForSymbol2 = getCookie('symbol') || "BTCUSDT"; // getParameterByName('symbol') || "BTCUSDT";
//let DefaultValueForSymbol2 = "BTCUSDT";


//console.log('DefaultValueForSymbol2 ',DefaultValueForSymbol2 );
//alert('DefaultValueForSymbol:',DefaultValueForSymbol2);

var thesymbollower = DefaultValueForSymbol2.toLowerCase();
//console.log('thesymbollower  ',thesymbollower );
//////////////////////////const ws_binance = new WebSocket("wss://fstream.binance.com/ws");
/*ws_binance.onopen = function() {
  //console.log('......................');
  ws_binance.send(
    JSON.stringify({
      method: "SUBSCRIBE",
      params:
[
  thesymbollower + "@aggTrade",
  thesymbollower +"@kline_1m"
],
//      params: ["stream?streams=btcusdt@aggTrade/btcusdt@kline_1m"],
//      params: ["btcusdt@trade"],
      id: 1
    })
  );
};

*/



function my_connect()
{
  console.log('my_connect....');
  ws_binance2 = new WebSocket("wss://fstream.binance.com/ws");

ws_binance2.onerror = function() {
  console.log('ws_binance2.onerror: onerror.............................................................')
};

ws_binance2.onclose = function() {
  console.log('ws_binance2.onclose: onclose.............................................................')
  my_connect();
///////////////  myheartbeat();
};

//ws_binance2.onping = function () { //Defines event handler for ping event
//  console.log('ws_binance2.onping: pinggg.............................................................')
//  ws_binance2.pong(); //send pong frame
//};

ws_binance2.onopen = function() {
  //console.log('......................');
  ws_binance2.send(
    JSON.stringify({
      method: "SUBSCRIBE",
      params:
[
//  "btcusdt@aggTrade",
//  "ethusdt@aggTrade",
//  "yfiusdt@aggTrade",

  //
//  "btcusdt@aggTrade",
//  "!aggTrade@arr",
  "!markPrice@arr@1s",
//  "!miniTicker@arr",
  "!ticker@arr",
/////  thesymbollower + "@aggTrade",
/////  thesymbollower + "@kline_1m",
"!forceOrder@arr",
//"btcusdt@forceOrder",
//////////////thesymbollower + "@markPrice",
//"!markPrice@arr"
////"!markPrice@arr@3s"
//"!forceOrder@arr"
],
//      params: ["stream?streams=btcusdt@aggTrade/btcusdt@kline_1m"],
//      params: ["btcusdt@trade"],
      id: 1
    })
  );
};

let grafeitwra = false;

ws_binance2.onmessage = function(event) {

 
  let stream_data = JSON.parse(event.data);
 

try
{
  

  ///////var myTable33 = $( "#example22" ); //.DataTable({});

//  var myTable33 = $('#example22');
  stream_data.forEach(oneelement => {
 ////console.log(oneelement);
    if (oneelement.e ==  "24hrTicker") // "24hrMiniTicker") //
    {
        if (EinaiOratoToWatcher == true)
        {
          let thelastprice = oneelement.c; // Close price ..
          let thesymbol = oneelement.s // the symbol ..
          let thepercent24hr = oneelement.P // the percentage last 24 hours (!)
          let thepercent24hrfromtop = 100 * (oneelement.h - thelastprice) / thelastprice;  
          let thepercent24hrfrombottom = 100 * (thelastprice - oneelement.l) / thelastprice;

//          let thedatatoupdate = [
  //          { "symbollastprice" : thelastprice, "symbol24hrpercent" : thepercent24hr } ];

          //  console.log('thesymbol:' , thesymbol,thelastprice,thepercent24hr,thepercent24hrfromtop,thepercent24hrfrombottom);

            let therowindex = findtheindex(thesymbol);

            if (therowindex > -1)
            {
    //////   console.log(' ----  ', therowindex,' - ',myTable33.row(therowindex).data().symbollastprice, ' - ', myTable33.row(therowindex).data().thepercent24hr);
          //  //console.log(' ----  ',myTable33.row(therowindex).data().thepercent24hr);
            //myTable33.cell(therowindex, 1).data(thelastprice);

     //       myTable33.row(therowindex).data(['symbol24hrfromtop']) = thepercent24hrfromtop;
      //      var thedata = myTable33.row(therowindex).data();
            //thedata[1] = thelastprice;
         //   console.log('thedata1', thedata['symbollastprice']);
        //    thedata['symbollastprice'] = thelastprice;
           // console.log('thedata1aaa', thedata['symbollastprice']);
       //     console.log(thelastprice,thepercent24hr,thepercent24hrfromtop,thepercent24hrfromtop);

//            console.log('thedata', thedata);
          //  thedata['symbol24hrpercent'] = thepercent24hr;
            //thedata['symbol24hrfromtop'] = thepercent24hrfromtop;
            //thedata['symbol24hrfrombottom'] = thepercent24hrfrombottom;
        //    let thedata2 = thedata;
        //    myTable33.row(therowindex).data(thedata2); //.draw(false);

       //     symbol24hrfrpercent
       //     symbol24hrfrombottom
       //     symbol24hrfromtop
            
       //     symbollastmarkprice
       //     symbol24hrpercent
            

      //      thepercent24hr
      //       thepercent24hrfromtop
      //       thepercent24hrfrombottom;
////////////////////////            myTable33.cell(therowindex, 1).data(thelastprice);
      
            //    myTable33.draw(false);

            
            /* */ 
         //   therowindex = findtheindex(thesymbol);
            //myTable33.cell(therowindex, 2).data(thepercent24hr);  
            myTable33.cell(therowindex, 2).data(thepercent24hr);

            therowindex = findtheindex(thesymbol);
//          myTable33.cell(therowindex, 3).data(thepercent24hrfromtop); // symbol24hrfromtop
            myTable33.cell(therowindex, 3).data(thepercent24hrfromtop); // symbol24hrfromtop

            therowindex = findtheindex(thesymbol);
//            myTable33.cell(therowindex, 4).data(thepercent24hrfrombottom); // symbol24hrfrombottom
            myTable33.cell(therowindex, 4).data(thepercent24hrfrombottom); // symbol24hrfrombottom
            
           // SWITCHING.....
       //     therowindex = findtheindex_Coin_List(thesymbol);
        //    thecoinslist[therowindex].symbol24hrpercent = thepercent24hr;
        //    thecoinslist[therowindex].symbol24hrfromtop = thepercent24hrfromtop;
        //    thecoinslist[therowindex].symbol24hrfrombottom = thepercent24hrfrombottom;



        } 
      } // Telos tou if (EinaiOratoToWatcher == true)
   
  
  } //
  else if (oneelement.e == "aggTrade")
  {
   

    console.log(stream_data);
    last_price_binance = Number(stream_data.p);
  

  }
  else if (oneelement.e == "markPriceUpdate")
  {
   // return;

///////////////////////////////////  console.log(oneelement.s,' ', oneelement.p, ' ', oneelement.P, ' ', oneelement.i);  
   // console.log("] ", oneelement.e," ",oneelement.E, " ", oneelement.s, " ", oneelement.p, " ",oneelement.r, " ", oneelement.T)
   // console.log('prin to CheckTheOITickBetweenTimes, oneelement.s:', oneelement.r);
    var thetime = Number(oneelement.E);
    var themarkpricenow = Number(oneelement.p);
    var thelatestfr = Number(oneelement.r);
  /////////////////////////////  var thelatesttradeprice = Number(oneelement.P);
    var thenextfundingtime = String(oneelement.T) // in utc, in msecs , e.g. 1707494400000 -> Friday, February 9, 2024 16:00:00
//]  markPriceUpdate   1707484148000   AIUSDT   1.14662312   0.00005876   1707494400000
//0.0059%
    var thelatestfrpercent = 100 * thelatestfr; // here the 0.00005876 -> 0.0059 
    //symbol24hrfrpercent
//    let therowindex = findtheindex(oneelement.s);
               // SWITCHING.....
      let therowindex = findtheindex_Coin_List(oneelement.s);
   
 ///////////////   if (therowindex > -1)
  ///////////////  {

  ///////////////  myTable33.cell(therowindex, 1).data(thelatesttradeprice);
 ///////////////   }      
 ///////////////   therowindex = findtheindex(oneelement.s);
    if (therowindex > -1)
    {
//   //console.log(' ----  ', therowindex,' - ',myTable33.row(therowindex).data().symbollastprice, ' - ', myTable33.row(therowindex).data().thepercent24hr);
  //  //console.log(' ----  ',myTable33.row(therowindex).data().thepercent24hr);
    myTable33.cell(therowindex, 1).data(thelastprice);
    // s":"SXPUSDT","p":"0.31315030","P":"0.31385070","i":"0.31327645"

  //  thecoinslist[therowindex].symbollastmarkprice = themarkpricenow; // = thepercent24hr;

  // myTable33.cell(therowindex, 2).data(themarkpricenow);
    }

/////////////////////    therowindex = findtheindex(oneelement.s);
  if (therowindex > -1)
  {
    thecoinslist[therowindex].symbol24hrfrpercent = thelatestfrpercent; // = thepercent24hr;
    thecoinslist[therowindex].timetofunding = thenextfundingtime; // = thepercent24hr;
   
  }
   
  }
});

  // .forEach(element => {
    
  //});
//  lalala = JSON.parse(stream_data);
  
}
catch (errrrrr ) {  
 //////////////////////////////// //console.log('errrrrr:', errrrrr);

}
 
if (stream_data.e == "forceOrder")
{
   ///////////////////////DrawA_NewLiquidation(stream_data.o);
   //console.log("Liquidation !!! :" + event.data);

   //document.getElementById("demoC").appendChild(list);

} 
else
{
//  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA " , stream_data.e);
////////////////////console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA " , stream_data);
}
}

}

my_connect();


// EDWWWWWW........................
 
let grafeitwra = false;

 
   
var someFunction = function() {

  // do something

}

 // https://stackoverflow.com/questions/66698013/how-to-parse-a-csv-file-on-node-express-from-an-axios-get-request
 function csvJSON(csvStr){
  var lines=csvStr.split("\n");
  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step 
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }

      result.push(obj);

  }
  return result; //JavaScript object
}
//let thetrades = []; 
 
  
    