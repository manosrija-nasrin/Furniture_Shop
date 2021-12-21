var month, dt = new Date(), yr=0, i;
            dt.setDate( dt.getDate() + 10 );
            if (dt.getDate()<11) {
                dt.setMonth( dt.getMonth() + 1 );
                if (dt.getMonth() == 1) {
                    dt.setFullYear( dt.getFullYear() + 1);
                    yr=1;
                }
            }
            switch (dt.getUTCMonth()-1) {
                case 0:
                    month = "Jan";
                    break;
                case 1:
                    month = "Feb";
                    break;
                case 2:
                    month = "Mar";
                    break;
                case 3:
                    month = "Apr";
                    break;
                case 4:
                    month = "May";
                    break;
                case 5:
                    month = "June";
                    break;
                case  6:
                    month = "Jul";
                    break;
                case  7:
                    month = "Aug";
                    break;
                case  8:
                    month = "Sep";
                    break;
                case  9:
                    month = "Oct";
                    break;
                case  10:
                    month = "Nov";
                    break;
                case  11:
                    month = "Dec";
                    break;
            }
            if (yr == 1) {
                for (i=0; i<document.getElementsByClassName('deliver').length; i++) {
                    dt.setDate( dt.getDate() - ((Math.floor((Math.random() * 10) + 1))%6 + 5) );
                    document.getElementsByClassName('deliver')[i].innerHTML = "Delivered by " + dt.getDate() + " " +
                                    month + ", " + dt.getFullYear();
                }
            }
            else {
                for (i=0; i<document.getElementsByClassName('deliver').length; i++) {
                    dt.setDate( dt.getDate() - ((Math.floor((Math.random() * 10) + 1))%6 + 5) );
                    document.getElementsByClassName('deliver')[i].innerHTML = "Delivered by " + dt.getDate() + " " + month;
                }
            }