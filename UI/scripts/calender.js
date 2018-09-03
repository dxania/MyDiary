
                var today = new Date();
                var month = today.getMonth();
                //Using the Date prototype to assign our month names
                Date.prototype.getMonthNames = function() { return [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]; }
                //Getting the number of day in the month.
                Date.prototype.getDaysInMonth = function() 
                { return new Date( this.getFullYear(), this.getMonth() + 1, 0 ).getDate(); }
                Date.prototype.calendar = function()
                {  var numberOfDays = this.getDaysInMonth();
                //This will be the starting day to our calendar-->
                var startingDay = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
                //We will build the calendar_table variable then pass what we build back-->
                   var calendarTable = '<table summary="Calendar" class="calendar" width = 100% height = 300px style="text-align: center;">';
                calendarTable += '<caption style="color: white; text-transform: uppercase; padding: 35px 12.5px; border-radius: 5px; background: rgb(56, 63, 63);">' + this.getMonthNames()[this.getMonth()] + '<br><span style="font-size:18px">' + this.getFullYear() + '</span></caption>';
                calendarTable += '<tr><td colspan="14"></td></tr>';
                calendarTable += '<tr style="background-color: #ddd; color: #666;">';
                calendarTable += '<td><font color="#B42600">S</font></td>';
                calendarTable += '<td>M</td>';
                calendarTable += '<td>T</td>';
                calendarTable += '<td>W</td>';
                calendarTable += '<td>TH</td>';
                calendarTable += '<td>F</td>';
                calendarTable += '<td>S</td></tr>'; 
                //Lets create blank boxes until we get to the day which actually starts the month-->
                for ( var i = 0; i < startingDay; i++ ) 
                { calendarTable += '<td>&nbsp;</td>'; }
                //border is a counter, initialize it with the "blank"-->
                //days at the start of the calendar-->
                //Now each time we add new date we will do a modulus-->
                //7 and check for 0 (remainder of border/7 = 0)
                //if it's zero then it's time to make new row-->
                var border = startingDay;
                //For each day in the month, insert it into the calendar-->
                for ( var id = '',  i = 1; i <= numberOfDays; i++ ) 
                { if (( month == month ) && ( today.getDate() == i )) { id = 'id="current_day"'; } 
                else { id = ''; }
                calendarTable += '<td style = "background: #eee; font-size:12px; color: #777; list-style-type:none;"' + id + '><a href="#" style = "background: #eee; font-size:12px; color: #777; text-decoration:none;">' + i + '</a></td>'; border++;
                if ((( border % 7 ) == 0 ) && ( i < numberOfDays )) 
                { 
                //Time to make new row, if there are any days left.-->
                calendarTable += '<tr></tr>'; } } 
                //All the days have been used up, so pad the empty days until the end of calendar-->
                while(( border++ % 7)!= 0) 
                { calendarTable += '<td>&nbsp;</td>'; } 
                //Finish the table-->
                calendarTable += '</table>';
                //Return it-->
                return calendarTable; }
                //--> Let's add up some dynamic effect
                window.onload = function() {
                selected_month = '<form name="month_holder">';
                selected_month += '<select id="month_items" size="1" onchange="month_picker();">';
                for ( var x = 0; x <= today.getMonthNames().length; x++ ) { selected_month += '<option value="' + today.getMonthNames()[x] + ' 1, ' + today.getFullYear() + '">' + today.getMonthNames()[x] + '</option>'; }
                selected_month += '</select></form>';
                actual_calendar = document.getElementById('show_calendar');
                actual_calendar.innerHTML = today.calendar();
                var month_listing = document.getElementById('current_month');
                month_listing.innerHTML = selected_month;
                actual_month = document.getElementById('month_items');
                actual_month.selectedIndex = month;
                }
                //--> Month Picker <--\\
                function month_picker()
                { month_menu = new Date(actual_month.value);
                actual_calendar.innerHTML = month_menu.calendar();
                }
                // Done Hiding -->
