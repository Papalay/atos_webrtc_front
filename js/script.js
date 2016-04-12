
function loadFrame(url){

    jQuery('body').append( '<object id=myFrame data='+url+'></object>' );
    
    //$('object').css({'height':'390px'});   //h = 390, w = 310
    //$('object').css({'width':'310px'});
    $('object').css({'position':'absolute'});
    $('object').css({'right':'0px'});
    $('object').css({'bottom':'0px'});
    $('object').css({'scrolling':'no'});
    $('object').css({'border':'none'});
    $('object').css({'overflow': 'hidden'});
    $('object').css({'bottom' : '0'});
};

function loadPage(d){
    $('<iframe id="frame" />').prependTo('body');  
    var iframe = document.getElementsByTagName('iframe')[0];
    
   $('iframe').css({'height':'390px'});   //h = 390, w = 310
    $('iframe').css({'width':'310px'});
    $('iframe').css({'position':'absolute'});
    $('iframe').css({'right':'0px'});
    $('iframe').css({'bottom':'0px'});
    $('iframe').css({'scrolling':'no'});
    $('iframe').css({'border':'none'});
    $('iframe').css({'overflow': 'hidden'});
    $('iframe').css({'bottom' : '0'});
    $('iframe').attr('src', d);
    $('iframe').css({'-webkit-transform' :'scale(1)'});
    $('iframe').css({'-moz-transform' :'scale(1.5)'});
};
  

$('#minus').click(function(){    
    var h = $('#chat-space').height()+'px';
        //$('#chat-plus').slideToggle(function(){  
    $('#chat-plus').hide('Drop');
    $('#chat-space').height(h);
    $('#foot').show();
        //});
});
    
$('#minus-back').click(function(){
    var h = $('#chat-space').height()+'px';  
    $('#chat-plus-back').hide('Drop');
    $('#chat-space').height(h);
    $('#foot-back').show();
})
$('#plus').click( function(){    
    $("#chat-minus").slideToggle( function(){
        $('#chat-plus').show('Scale'); //clip
        });
});

function hideShowCompenents  (id){
    
     if(document.getElementById(id).style.visibility == 'hidden' ){
        
         document.getElementById(id).style.visibility ='visible';
            
        }
        else if (document.getElementById(id).style.display=='none' ){
        
            document.getElementById(id).style.display ='block'; 
        }
        else {
            document.getElementById(id).style.visibility = 'hidden';
        }
};

$(document).ready(function(){     
    //document.getElementById('chat-minus').style.display = 'none';
    $('#chat-plus').css({'display': 'none'});
    $('#foot').css({'display': 'block'});
    $('#foot-back').css({'display': 'none'});
    //$('#chat-minus' ).draggable({ containment: 'document' });
   // $('#chat-plus' ).draggable({ containment: 'document' });

     //$('#conversation-audio').css({'display': 'none'});
     //document.getElementById('conversation-video').style.display = 'none';
    
    $('#conversation-video').css({'display':'none'});
    $('#conversation-audio').css({'visibility':'hidden'});
    /*
    $('#text-input').keyup( function(e){
         if( $('#text-input').val().length !=1){
             if(e.keyCode ==13){
                $('#chat-messages').append('<li style="width: 150px; overflow:hidden; white-space:no-wrap; list-style: none; font-size:12px;">'+
                                   '<span class="left">'+$('#text-input').val()+'</span>'
                                   +'</li>');
                 
                 $('#chat-messages').animate({scrollTop: $('#chat-messages')[0].scrollHeight},2000)
                $('#text-input').val('');
            };    
        };
    });
    */   
});