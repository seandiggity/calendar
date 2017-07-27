$(document).ready(function() {
	var filter = $("div#eventCalendar").attr("initialFilter");
	var URL = $("div#eventCalendar").attr("feed");

	function dayOfWeekAsString(dayIndex) {
		return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex];
	}

	function monthAsString(monthIndex) {
		return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][monthIndex];
	}

	function drawCalendar(document) {
		$("li.selected").removeClass("selected");
		$("ul.selectpicker li:contains(" + filter + ")").addClass("selected");
		$("#eventCalendar").find("div#eventsList").empty();
		counter = 0
		var xmlevents = $(document).find("item");
		xmlevents.sort(function(a, b) {
			a = $(a).find("startdate").text();
			b = $(b).find("startdate").text();
			return (a.localeCompare(b));
		});
		xmlevents.each(function() {
			title = $(this).find('title').text();
		});
		xmlevents.each(function(index, val) {
			if (filter == "All") {
				if (index > 2) {
					return false;
				}
				//Routine to write events    
				else {
					var eventDate = new Date(Date.parse($(this).find('event\\:startdate, startdate').text()));
					var endDate = new Date(Date.parse($(this).find('event\\:enddate, enddate').text()));
					var day = dayOfWeekAsString(eventDate.getDay());
					var month = monthAsString(eventDate.getMonth());
					var dayOfMonth = eventDate.getDate();
					var textDate = day + ", " + month + " " + dayOfMonth;
					var hour = eventDate.getHours();
					var minute = eventDate.getMinutes();
					if (minute == 0) {
						minute = "00"
					};
					if (dayOfMonth != endDate.getDate() && hour == endDate.getHours()) {
						startTime = "All Day"
						var endDay = dayOfWeekAsString(endDate.getDay());
						var endMonth = monthAsString(endDate.getMonth());
						var endDayOfMonth = endDate.getDate();
						eventDate.setTime(eventDate.getTime() + (1 * 86400000));
						day = dayOfWeekAsString(eventDate.getDay());
						month = monthAsString(eventDate.getMonth());
						dayOfMonth = eventDate.getDate();
						textDate = day + ", " + month + " " + dayOfMonth;
						var endTextDate = endDay + ", " + endMonth + " " + endDayOfMonth;
						if (textDate != endTextDate) {
							var textDate = textDate + " - " + endTextDate;
						};
					} else {
						if (hour == 12) {
							var startTime = hour + ":" + minute + " PM";
						} else if (hour < 13) {
							var startTime = hour + ":" + minute + " AM";
						} else {
							var startTime = hour - 12 + ":" + minute + " PM";
						}
					}
					// truncate string function
					function truncString(str, max, add) {
						add = add || '...';
						return (typeof str === 'string' && str.length > max ? str.substring(0, max) + add : str);
					};
					var eventTitle = $(this).find('title').text();
					var eventLink = $(this).find('link').text();
					var eventDesc = $(this).find('description').text();
					var eventLocation = $(this).find('location').text();
					var eventImage = $(this).find('media\\:content, content').attr('url');
					// Find the last URL in event description, which will be for the "Register Here" button.
					var registerURL = eventDesc.match(/(http:\/\/|https:\/\/|\swww\.)(?:.(?!\/\/))+$/igm);
					var registerText = eventDesc.match(/\b(REGISTER HERE |REGISTER HERE:|Register Here: |Register here: |Register Now: |Register now: |Register: |SIGN UP |SIGN UP: |Sign Up: |Sign up: |Sign Up Now: |Sign up now: |Join Here: |Join here: |Join Now: |Join now: |Join: |Volunteer Here: |Volunteer here: |Volunteer Now: |Volunteer now: |Volunteer: |Click Here: |Click here: |Buy Now: |Buy now: |Buy Tickets: |Buy tickets: |Tickets: |Purchase Here: |Purchase here: |Purchase: |Donate Here: |Donate here: |Donate Now: |Donate now: |Donate: |RSVP HERE: |RSVP Here: |RSVP here: |RSVP Now: |RSVP now: |RSVP: )+(http:\/\/|https:\/\/|www\.)([\w\.-]+\.)+[a-z]{2,}\/.+\b/gi);
					var eventDesc = eventDesc.replace(registerText, '');
					// Convert all http://, https://, www. URLs in description text to links
					var eventDesc = eventDesc.replace(/\b(http:\/\/|https:\/\/|\swww\.)([\w\.-]+\.)+[a-z]{2,}\/.+\b/gi, '<a href="$&">$&</a>');
					// Convert all e-mail addresses in description text to mailto: links
					var eventDesc = eventDesc.replace(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g, '<a href="mailto:$&">$&</a>');
					var eventTitle = truncString(eventTitle, 52, '...');
					// this is where all the reading and writing will happen
					$("#eventCalendar").find("div#eventsList").append('<td class="eventTableCell">' + '<div class="titleDiv"><h3 class="eventTitle"><a target="_blank" href="' + registerURL + '">' + eventTitle + '</a></h3></div>' + '<a class="eventImage" target="_blank" href="' + registerURL + '"><img class="eventImage" src="' + eventImage + '"></a>' + '<div class="buttonDiv"><a class="btn-lg btn-success" target="_blank" href="' + registerURL + '">Register Here</a></div>' + '<h2 class="eventDate">' + textDate + '<br><span class="eventTime">🕙 ' + startTime + '</span></h2>' + '</tr>');
				}
			}
			//End writing events
			else if ($(this).find('type, event\\:type').text() == filter) {
				counter++
				if (counter > 6) {
					return false;
				}
				//Routine to write events    
				else {
					var eventDate = new Date(Date.parse($(this).find('event\\:startdate, startdate').text()));
					var endDate = new Date(Date.parse($(this).find('event\\:enddate, enddate').text()));
					var day = dayOfWeekAsString(eventDate.getDay());
					var month = monthAsString(eventDate.getMonth());
					var dayOfMonth = eventDate.getDate();
					var textDate = day + ", " + month + " " + dayOfMonth;
					var hour = eventDate.getHours();
					var minute = eventDate.getMinutes()
					if (minute == 0) {
						minute = "00"
					};
					if (dayOfMonth != endDate.getDate() && hour == endDate.getHours()) {
						startTime = "All Day"
						var endDay = dayOfWeekAsString(endDate.getDay());
						var endMonth = monthAsString(endDate.getMonth());
						var endDayOfMonth = endDate.getDate();
						eventDate.setTime(eventDate.getTime() + (1 * 86400000));
						day = dayOfWeekAsString(eventDate.getDay());
						month = monthAsString(eventDate.getMonth());
						dayOfMonth = eventDate.getDate();
						textDate = day + ", " + month + " " + dayOfMonth;
						var endTextDate = endDay + ", " + endMonth + " " + endDayOfMonth;
						if (textDate != endTextDate) {
							var textDate = textDate + " - " + endTextDate;
						};
					} else {
						if (hour == 12) {
							var startTime = hour + ":" + minute + " PM";
						} else if (hour < 13) {
							var startTime = hour + ":" + minute + " AM";
						} else {
							var startTime = hour - 12 + ":" + minute + " PM";
						}
					}
					// this is where all the reading and writing will happen
					$("#eventCalendar").find("div#eventsList").append('<h4><span>' + textDate + '</span></h4>' + '<div class="event"><div class="time"><span>' + startTime + '</span></div>' + '<div class="content"><p><a href="' + $(this).find('link').text() + '">' + $(this).find('title').text() + '</a></p>' + '<p>' + $(this).find('location').text() + '</p></div></div>');
				}
			}
			//End writing events
		});
		$('ul.selectpicker li').click(function(event) {
			event.preventDefault();
			$("li.selected").removeClass("selected");
			$(this).addClass("selected");
			counter = 0;
			filter = $(this).text();
			$("#eventCalendar").find("div#eventsList").empty();
			$(document).find("item").each(function(index, val) {
				if (filter == "All") {
					if (index > 5) {
						return false;
					}
					//Routine to write events    
					else {
						var eventDate = new Date(Date.parse($(this).find('event\\:startdate, startdate').text()));
						var endDate = new Date(Date.parse($(this).find('event\\:enddate, enddate').text()));
						var day = dayOfWeekAsString(eventDate.getDay());
						var month = monthAsString(eventDate.getMonth());
						var dayOfMonth = eventDate.getDate();
						var textDate = day + ", " + month + " " + dayOfMonth;
						var hour = eventDate.getHours();
						var minute = eventDate.getMinutes()
						if (minute == 0) {
							minute = "00"
						};
						if (dayOfMonth != endDate.getDate() && hour == endDate.getHours()) {
							startTime = "All Day"
							var endDay = dayOfWeekAsString(endDate.getDay());
							var endMonth = monthAsString(endDate.getMonth());
							var endDayOfMonth = endDate.getDate();
							eventDate.setTime(eventDate.getTime() + (1 * 86400000));
							day = dayOfWeekAsString(eventDate.getDay());
							month = monthAsString(eventDate.getMonth());
							dayOfMonth = eventDate.getDate();
							textDate = day + ", " + month + " " + dayOfMonth;
							var endTextDate = endDay + ", " + endMonth + " " + endDayOfMonth;
							if (textDate != endTextDate) {
								var textDate = textDate + " - " + endTextDate;
							};
						} else {
							if (hour == 12) {
								var startTime = hour + ":" + minute + " PM";
							} else if (hour < 13) {
								var startTime = hour + ":" + minute + " AM";
							} else {
								var startTime = hour - 12 + ":" + minute + " PM";
							}
						}
						// this is where all the reading and writing will happen
						$("#eventCalendar").find("div#eventsList").append('<h4><span>' + textDate + '</span></h4>' + '<div class="event"><div class="time"><span>' + startTime + '</span></div>' + '<div class="content"><p><a href="' + $(this).find('link').text() + '">' + $(this).find('title').text() + '</a></p>' + '<p>' + $(this).find('location').text() + '</p></div></div>');
					}
				}
				//End writing events
				else if ($(this).find('type, event\\:type').text() == filter) {
					counter++
					if (counter > 6) {
						return false;
					}
					//Routine to write events    
					else {
						var eventDate = new Date(Date.parse($(this).find('event\\:startdate, startdate').text()));
						var endDate = new Date(Date.parse($(this).find('event\\:enddate, enddate').text()));
						var day = dayOfWeekAsString(eventDate.getDay());
						var month = monthAsString(eventDate.getMonth());
						var dayOfMonth = eventDate.getDate();
						var textDate = day + ", " + month + " " + dayOfMonth;
						var hour = eventDate.getHours();
						var minute = eventDate.getMinutes()
						if (minute == 0) {
							minute = "00"
						};
						if (dayOfMonth != endDate.getDate() && hour == endDate.getHours()) {
							startTime = "All Day"
							var endDay = dayOfWeekAsString(endDate.getDay());
							var endMonth = monthAsString(endDate.getMonth());
							var endDayOfMonth = endDate.getDate();
							eventDate.setTime(eventDate.getTime() + (1 * 86400000));
							day = dayOfWeekAsString(eventDate.getDay());
							month = monthAsString(eventDate.getMonth());
							dayOfMonth = eventDate.getDate();
							textDate = day + ", " + month + " " + dayOfMonth;
							var endTextDate = endDay + ", " + endMonth + " " + endDayOfMonth;
							if (textDate != endTextDate) {
								var textDate = textDate + " - " + endTextDate;
							};
						} else {
							if (hour == 12) {
								var startTime = hour + ":" + minute + " PM";
							} else if (hour < 13) {
								var startTime = hour + ":" + minute + " AM";
							} else {
								var startTime = hour - 12 + ":" + minute + " PM";
							}
						}
						// this is where all the reading and writing will happen
						$("#eventCalendar").find("div#eventsList").append('<h4><span>' + textDate + '</span></h4>' + '<div class="event"><div class="time"><span>' + startTime + '</span></div>' + '<div class="content"><p><a href="' + $(this).find('link').text() + '">' + $(this).find('title').text() + '</a></p>' + '<p>' + $(this).find('location').text() + '</p></div></div>');
					}
				}
				//End writing events
			});
		});
	}
	$.ajax({
		url: URL,
		dataType: "xmL",
		success: drawCalendar,
		error: function() {
			alert("Error: Something went wrong");
		}
	});
});
