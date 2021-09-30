var month = "Jul";
var num_days = -1;

switch (month) {
    case 'Dec':
    case 'Jan':
    case 'Mar':
    case 'May':
    case 'Jul':
    case 'Aug':
    case 'Oct':
        num_days = 31;
        break;
    case 'Sep':
    case 'Nov':
    case 'Apr':
    case 'Jun':
        num_days = 30;
        break;
    case 'Feb':
        num_days = 28;
        break;
    default:
        num_days = -1;
        break;
}

if (num_days == -1) {
    console.log("A value that indicates that an error has occurred");
} else {
    console.log("The number of days in the month of " + month + " has " + num_days + " days.");
}