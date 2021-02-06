function changeNum() {
    $('button').click(function() {
        var vaLue = $(this).text();
        $('#voting_output_span').text(vaLue);

        function timer(){	
            
            var obj=document.getElementById('submit_item');
            var regexp = /(\d+)/i;
            var RealTimer = regexp.exec(obj.innerHTML)[0];
            
            if (--RealTimer < 0) RealTimer = 0;
        
            obj.innerHTML = 'Отправить [ '+RealTimer+' ]';
            
            if (RealTimer==0) { 
                $('#submit_item').removeClass('disabled');
                $('#submit_item').removeAttr("disabled");
            }
            else { setTimeout(timer,1000); }
        }	
        setTimeout(timer,1000);
    })
    
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }