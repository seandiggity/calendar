$(document).ready(function() {
var filter=$("div#lawCalendar2").attr("initialFilter");
var URL=$("div#lawCalendar2").attr("feed");
	
function dayOfWeekAsString(dayIndex) {
  return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex];
}
function monthAsString(monthIndex) {
  return ["January","February","March","April","May","June","July","August","September","October","November","December"][monthIndex];
}

function drawCalendar (document) {
$("li.selected").removeClass("selected");
$("ul.selectpicker li:contains("+filter+")").addClass("selected");
$("#lawCalendar2").find("div#eventsList").empty();	
counter=0	
	var xmlevents = $(document).find("item");
    xmlevents.sort(function(a,b){
     a = $(a).find("startdate").text();
     b = $(b).find("startdate").text();
     return (a.localeCompare(b));
    });
	
	xmlevents.each(function () {
      title = $(this).find('title').text();
   
        });


  xmlevents.each(function(index,val){
  	
  	if (filter =="All") {
  	 if (index > 5) {
               return false;
        }	
     //Routine to write events    
     else  
     	{
    	
    var eventDate= new Date(Date.parse($(this).find('event\\:startdate, startdate').text()));
    var endDate = new Date(Date.parse($(this).find('event\\:enddate, enddate').text()));
	var day=dayOfWeekAsString(eventDate.getDay());
	var month=monthAsString(eventDate.getMonth());
	var dayOfMonth=eventDate.getDate();
	var textDate = day+", "+month+" "+dayOfMonth;
	var hour = eventDate.getHours();
	var minute = eventDate.getMinutes();
	if (minute ==0) {minute="00"};
	
	if (dayOfMonth != endDate.getDate() && hour == endDate.getHours()) {
		startTime = "All Day"
		var endDay=dayOfWeekAsString(endDate.getDay());
		var endMonth=monthAsString(endDate.getMonth());
		var endDayOfMonth=endDate.getDate();
		eventDate.setTime(eventDate.getTime() + (1 * 86400000));
		day=dayOfWeekAsString(eventDate.getDay());
		month=monthAsString(eventDate.getMonth());
		dayOfMonth=eventDate.getDate();
		textDate = day+", "+month+" "+dayOfMonth;
		var endTextDate = endDay+", "+endMonth+" "+endDayOfMonth;
		if (textDate != endTextDate) {
			var textDate = textDate+" - "+endTextDate;
		};
	}
	else {	
		if (hour==12) {
			var startTime = hour+":"+minute+" PM";
			
		}
		else if (hour<13) {
			var startTime = hour+":"+minute+" AM";
			}
			
		else {
			var startTime = hour-12+":"+minute+" PM";
		}
	  }
     // this is where all the reading and writing will happen
	 $("#lawCalendar2").find("div#eventsList").append(
	 '<h4><span>'+textDate+'</span></h4>'+
	 '<div class="event"><div class="time"><span>'+startTime+'</span></div>'+
	 '<div class="content"><p><a href="'+$(this).find('link').text()+'">'+$(this).find('title').text()+'</a></p>'+
	 '<p>'+$(this).find('location').text()+'</p></div></div>'
	);
     	}
    }    
	//End writing events
    
    
    
    
	else if ($(this).find('type, event\\:type').text()==filter) {
		counter++ 
	 if (counter > 6) {
               return false;
        }	
	   //Routine to write events    
     else  
     	{
    	
    var eventDate= new Date(Date.parse($(this).find('event\\:startdate, startdate').text()));
    var endDate = new Date(Date.parse($(this).find('event\\:enddate, enddate').text()));
	var day=dayOfWeekAsString(eventDate.getDay());
	var month=monthAsString(eventDate.getMonth());
	var dayOfMonth=eventDate.getDate();
	var textDate = day+", "+month+" "+dayOfMonth;
	var hour = eventDate.getHours();
	var minute = eventDate.getMinutes()
	if (minute ==0) {minute="00"};
	
	if (dayOfMonth != endDate.getDate() && hour == endDate.getHours()) {
		startTime = "All Day"
		var endDay=dayOfWeekAsString(endDate.getDay());
		var endMonth=monthAsString(endDate.getMonth());
		var endDayOfMonth=endDate.getDate();
		eventDate.setTime(eventDate.getTime() + (1 * 86400000));
		day=dayOfWeekAsString(eventDate.getDay());
		month=monthAsString(eventDate.getMonth());
		dayOfMonth=eventDate.getDate();
		textDate = day+", "+month+" "+dayOfMonth;
		var endTextDate = endDay+", "+endMonth+" "+endDayOfMonth;
		if (textDate != endTextDate) {
			var textDate = textDate+" - "+endTextDate;
		};
	}
	else {	
		if (hour==12) {
			var startTime = hour+":"+minute+" PM";
			
		}
		else if (hour<13) {
			var startTime = hour+":"+minute+" AM";
			}
			
		else {
			var startTime = hour-12+":"+minute+" PM";
		}
	  }
     // this is where all the reading and writing will happen
	 $("#lawCalendar2").find("div#eventsList").append(
	 '<h4><span>'+textDate+'</span></h4>'+
	 '<div class="event"><div class="time"><span>'+startTime+'</span></div>'+
	 '<div class="content"><p><a href="'+$(this).find('link').text()+'">'+$(this).find('title').text()+'</a></p>'+
	 '<p>'+$(this).find('location').text()+'</p></div></div>'
	);
     	}
    }    
	//End writing events
 });
 
 	$('ul.selectpicker li').click (function(event) {
 	event.preventDefault();
 	$("li.selected").removeClass("selected");
 	$(this).addClass("selected");
 	
 	
 	counter=0;
 	filter=$(this).text();
 	
 	$("#lawCalendar2").find("div#eventsList").empty();	
 		
	$(document).find("item").each(function(index,val){
		if (filter =="All") {
  	 if (index > 5) {
               return false;
        }	
      //Routine to write events    
     else  
     	{
    	
    var eventDate= new Date(Date.parse($(this).find('event\\:startdate, startdate').text()));
    var endDate = new Date(Date.parse($(this).find('event\\:enddate, enddate').text()));
	var day=dayOfWeekAsString(eventDate.getDay());
	var month=monthAsString(eventDate.getMonth());
	var dayOfMonth=eventDate.getDate();
	var textDate = day+", "+month+" "+dayOfMonth;
	var hour = eventDate.getHours();
	var minute = eventDate.getMinutes()
	if (minute ==0) {minute="00"};
	
	if (dayOfMonth != endDate.getDate() && hour == endDate.getHours()) {
		startTime = "All Day"
		var endDay=dayOfWeekAsString(endDate.getDay());
		var endMonth=monthAsString(endDate.getMonth());
		var endDayOfMonth=endDate.getDate();
		eventDate.setTime(eventDate.getTime() + (1 * 86400000));
		day=dayOfWeekAsString(eventDate.getDay());
		month=monthAsString(eventDate.getMonth());
		dayOfMonth=eventDate.getDate();
		textDate = day+", "+month+" "+dayOfMonth;
		var endTextDate = endDay+", "+endMonth+" "+endDayOfMonth;
		if (textDate != endTextDate) {
			var textDate = textDate+" - "+endTextDate;
		};
	}
	else {
		if (hour==12) {
			var startTime = hour+":"+minute+" PM";
			
		}
		else if (hour<13) {
			var startTime = hour+":"+minute+" AM";
			}
		else {
			var startTime = hour-12+":"+minute+" PM";
		}
	  }
     // this is where all the reading and writing will happen
	 $("#lawCalendar2").find("div#eventsList").append(
	 '<h4><span>'+textDate+'</span></h4>'+
	 '<div class="event"><div class="time"><span>'+startTime+'</span></div>'+
	 '<div class="content"><p><a href="'+$(this).find('link').text()+'">'+$(this).find('title').text()+'</a></p>'+
	 '<p>'+$(this).find('location').text()+'</p></div></div>'
	);
     	}
    }    
	//End writing events
	else if ($(this).find('type, event\\:type').text()==filter) {
		counter++

	  
	 if (counter > 6) {
               return false;
        }	
	  //Routine to write events    
     else  
     	{
    	
     var eventDate= new Date(Date.parse($(this).find('event\\:startdate, startdate').text()));
    var endDate = new Date(Date.parse($(this).find('event\\:enddate, enddate').text()));
	var day=dayOfWeekAsString(eventDate.getDay());
	var month=monthAsString(eventDate.getMonth());
	var dayOfMonth=eventDate.getDate();
	var textDate = day+", "+month+" "+dayOfMonth;
	var hour = eventDate.getHours();
	var minute = eventDate.getMinutes()
	if (minute ==0) {minute="00"};
	
	if (dayOfMonth != endDate.getDate() && hour == endDate.getHours()) {
		startTime = "All Day"
		var endDay=dayOfWeekAsString(endDate.getDay());
		var endMonth=monthAsString(endDate.getMonth());
		var endDayOfMonth=endDate.getDate();
		eventDate.setTime(eventDate.getTime() + (1 * 86400000));
		day=dayOfWeekAsString(eventDate.getDay());
		month=monthAsString(eventDate.getMonth());
		dayOfMonth=eventDate.getDate();
		textDate = day+", "+month+" "+dayOfMonth;
		var endTextDate = endDay+", "+endMonth+" "+endDayOfMonth;
		if (textDate != endTextDate) {
			var textDate = textDate+" - "+endTextDate;
		};
	}
	else {	
		if (hour==12) {
			var startTime = hour+":"+minute+" PM";
			
		}
		else if (hour<13) {
			var startTime = hour+":"+minute+" AM";
			}
			
		else {
			var startTime = hour-12+":"+minute+" PM";
		}
	  }
     // this is where all the reading and writing will happen
	 $("#lawCalendar2").find("div#eventsList").append(
	 '<h4><span>'+textDate+'</span></h4>'+
	 '<div class="event"><div class="time"><span>'+startTime+'</span></div>'+
	 '<div class="content"><p><a href="'+$(this).find('link').text()+'">'+$(this).find('title').text()+'</a></p>'+
	 '<p>'+$(this).find('location').text()+'</p></div></div>'
	);
     	}
    }    
	//End writing events
 });		
});	
}
	$.ajax({
	url: URL,
	dataType: "xmL",
	success:drawCalendar,
	error: function(){alert("Error: Something went wrong");}
	
	}); 
});