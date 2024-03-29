var langArray = [];

// Saves options to chrome.storage
const saveOptions = () => {

  const wheretogo = $('.btn-select').attr('value');
 //////////////// console.log('exei dialeksei to.....' + wheretogo);
  //    const wheretogo = document.getElementById('wheretogo').value;
    const linksinnewtab = document.getElementById('linksinnewtab').checked;
    const keepthefocus = document.getElementById('keepthefocus').checked;
  //keepthefocus
    chrome.storage.sync.set(
      { favoritewheretogo: wheretogo, linksinnewtab: linksinnewtab , keepthefocus: keepthefocus },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';  
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }
    );
  };
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {
    LoadTheList();
    chrome.storage.sync.get(
      { favoritewheretogo: 'overwater', linksinnewtab: true , keepthefocus: true },
      (items) => {
   /////////////////////////     document.getElementById('wheretogo').value = items.favoritewheretogo;

        switch(items.favoritewheretogo)
        {
          case 'overwater':
            $('.btn-select').html(langArray[0]);
            $('.btn-select').attr('value', 'overwater');
      //    wheretogolink = 'https://overwater.mlapplications.com/index.html?symbol=' + theiiiddd;
          // code block
          break;
          case 'binance_futures':
            $('.btn-select').html(langArray[1]);
            $('.btn-select').attr('value', 'binance_futures');
            break;
          case 'binance_spot':
            $('.btn-select').html(langArray[2]);
            $('.btn-select').attr('value', 'binance_spot');
            break;
          case 'tradingview':
            $('.btn-select').html(langArray[3]);
            $('.btn-select').attr('value', 'tradingview');
            break;
            
        }
        //Set the button value to the first el of the array


        document.getElementById('linksinnewtab').checked = items.linksinnewtab;
        document.getElementById('keepthefocus').checked = items.keepthefocus;
        
      }
    );
  };
  
  function LoadTheList2222() {
    console.log('LoadTheList');
    var placeholder = document.getElementById('placeholder');
    var dropdown = document.getElementById('custom-select');
  
    
    placeholder.addEventListener('click', function() {
      console.log('LoadTheList _ 22');
      if(dropdown.classList.contains('active')) {
            dropdown.classList.remove('active')
        } else {
            dropdown.classList.add('active')
        }
    })
    
  }

  function LoadTheList() {
    console.log('LoadTheList');
 
$('.vodiapicker option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
  langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
/////////////////////$('.btn-select').html(langArray[0]);
/////////////////////$('.btn-select').attr('value', 'overwater');

//change button stuff on click
$('#a li').click(function(){
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value');
   var text = this.innerText;
   var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".b").toggle();
  //console.log(value);
});

$(".btn-select").click(function(){
        $(".b").toggle();
    });

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('overwater');
  console.log(langIndex);
  $('.btn-select').html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}

  }


  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);