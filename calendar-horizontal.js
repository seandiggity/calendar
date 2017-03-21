$(document).ready(function() {	
	var filter=$("div#lawCalendar").attr("initialFilter");
	var URL=$("div#lawCalendar").attr("feed");
	
	function dayOfWeekAsString(dayIndex) {
  return ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex];
}
function monthAsString(monthIndex) {
  return ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][monthIndex];
}	

function drawCalendar (document) {
$("div.events-list li.active").removeClass("active");
$("a.filterButton:contains("+filter+"), a#filter_all:contains("+filter+")").parent("li").addClass("active");
$("#lawCalendar").find("ul.event-list").empty();	
counter=0	
	
	
	var xmlevents = $(document).find("item");
    xmlevents.sort(function(a,b){
     a = $(a).find("startdate").text();
     b = $(b).find("startdate").text();
     return (a.localeCompare(b));
    });
	
	xmlevents.each(function () {
      title = $(this).find('title').text();
	  startdate = $(this).find('startdate').text();
	  enddate = $(this).find('enddate').text();
	  
		
           
        });
	


  xmlevents.each(function(index,val){
	  

	
	
  	if (filter =="All") {
  	 if (index > 3) {
               return false;
        }	
     else  
     	{
			
     		var eventDate= new Date(Date.parse($(this).find('event\\:startdate, startdate').text()));
			var endDate = new Date(Date.parse($(this).find('event\\:enddate, enddate').text()));
			
			
			
	var dayOfMonth=eventDate.getDate();
			if (dayOfMonth != endDate.getDate()) {
				eventDate.setTime(eventDate.getTime() + (1 * 86400000)); //In the feed, multi-day events start one day early
				dayOfMonth=eventDate.getDate();
			}	
	var day=dayOfWeekAsString(eventDate.getDay());
	var month=monthAsString(eventDate.getMonth());
	
	  
     // this is where all the reading and writing will happen
	 var eventTitle = $(this).find('title').text();
	 if (eventTitle.length>65) {
		 eventTitle=eventTitle.replace(/^(.{60}[^\s]*).*/, "$1")+"...";
	 };
	 $("#lawCalendar").find("ul.event-list").append(
	 '<li><div class="date"><span class="day">'+day+'</span>'+
	 '<span class="month">'+month+'</span>'+
	 '<span class="num">'+dayOfMonth+'</span></div>'+
	 '<div class="content"><p><a href="'+$(this).find('link').text()+'">'+eventTitle+'</a></p></div></li>'
	);
     	}
    }    
	else if ($(this).find('type, event\\:type').text()==filter) {
		counter++ 
	 if (counter > 4) {
               return false;
        }	
	else  
     	{
    		var eventDate= new Date(Date.parse($(this).find('event\\:startdate, startdate').text()));
			var endDate = new Date(Date.parse($(this).find('event\\:enddate, enddate').text()));
			
	var dayOfMonth=eventDate.getDate();
			if (dayOfMonth != endDate.getDate()) {
				eventDate.setTime(eventDate.getTime() + (1 * 86400000)); //In the feed, multi-day events start one day early
				dayOfMonth=eventDate.getDate();
			}	
	var day=dayOfWeekAsString(eventDate.getDay());
	var month=monthAsString(eventDate.getMonth());
	  
     // this is where all the reading and writing will happen
	var eventTitle = $(this).find('title').text();
	 if (eventTitle.length>65) {
		 eventTitle=eventTitle.replace(/^(.{60}[^\s]*).*/, "$1")+"...";
	 };
	 $("#lawCalendar").find("ul.event-list").append(
	 '<li><div class="date"><span class="day">'+day+'</span>'+
	 '<span class="month">'+month+'</span>'+
	 '<span class="num">'+dayOfMonth+'</span></div>'+
	 '<div class="content"><p><a href="'+$(this).find('link').text()+'">'+eventTitle+'</a></p></div></li>'
	);
	}
  }
 });
 
 	$('a.filterButton, a#filter_all').click (function(event) {
 	event.preventDefault();
 	$("div.events-list li.active").removeClass("active");
 	$(this).parent("li").addClass("active");
 	
 	
 	counter=0;
 	filter=$(this).text();
 	
 	$("#lawCalendar").find("ul.event-list").empty();	
	
 	
  xmlevents.each(function(index,val){

		if (filter =="All") {
			
  	 if (index > 3) {
               return false;
        }	
     else  
     	{
		var eventDate= new Date(Date.parse($(this).find('event\\:startdate, startdate').text()));
			var endDate = new Date(Date.parse($(this).find('event\\:enddate, enddate').text()));
			
	var dayOfMonth=eventDate.getDate();
			if (dayOfMonth != endDate.getDate()) {
				eventDate.setTime(eventDate.getTime() + (1 * 86400000)); //In the feed, multi-day events start one day early
				dayOfMonth=eventDate.getDate();
			}	
	var day=dayOfWeekAsString(eventDate.getDay());
	var month=monthAsString(eventDate.getMonth());
	  
     // this is where all the reading and writing will happen
	var eventTitle = $(this).find('title').text();
	 if (eventTitle.length>65) {
		 eventTitle=eventTitle.replace(/^(.{60}[^\s]*).*/, "$1")+"...";
	 };
	 $("#lawCalendar").find("ul.event-list").append(
	 '<li><div class="date"><span class="day">'+day+'</span>'+
	 '<span class="month">'+month+'</span>'+
	 '<span class="num">'+dayOfMonth+'</span></div>'+
	 '<div class="content"><p><a href="'+$(this).find('link').text()+'">'+eventTitle+'</a></p></div></li>'
	);
     	
     	}    	
	}
	else if ($(this).find('type, event\\:type').text()==filter) {
		counter++

	  
	 if (counter > 4) {
               return false;
        }	
	 else  
     	{
			var eventDate= new Date(Date.parse($(this).find('event\\:startdate, startdate').text()));
			var endDate = new Date(Date.parse($(this).find('event\\:enddate, enddate').text()));
			
	var dayOfMonth=eventDate.getDate();
			if (dayOfMonth != endDate.getDate()) {
				eventDate.setTime(eventDate.getTime() + (1 * 86400000)); //In the feed, multi-day events start one day early
				dayOfMonth=eventDate.getDate();
			}	
	var day=dayOfWeekAsString(eventDate.getDay());
	var month=monthAsString(eventDate.getMonth());
	  
     // this is where all the reading and writing will happen
	var eventTitle = $(this).find('title').text();
	 if (eventTitle.length>65) {
		 eventTitle=eventTitle.replace(/^(.{60}[^\s]*).*/, "$1")+"...";
	 };
	 $("#lawCalendar").find("ul.event-list").append(
	 '<li><div class="date"><span class="day">'+day+'</span>'+
	 '<span class="month">'+month+'</span>'+
	 '<span class="num">'+dayOfMonth+'</span></div>'+
	 '<div class="content"><p><a href="'+$(this).find('link').text()+'">'+eventTitle+'</a></p></div></li>'
	);
	}
	
	
  }
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