setInterval(Clock, 1000)
var format = 0
function changeFormat() {
    if (format == 0)
        format = 1
    else
        format = 0
    Clock()
}
function Clock() {
    var currentTime = new Date();
    var h = 0
    var m = 0
    var s = 0

    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    if (format == 0) {
        // Convert the hours component to 12-hour format if needed
        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    }
    // Convert an hours component of "0" to "12"
    if (format == 1) {
        currentHours = (currentHours == 0) ? 12 : currentHours;
    }
    // Compose the string for display
    var currentTimeString = "<b> " + currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay + "</b>";

    // Update the time display
    $(".digi_clock").html(currentTimeString)

    //position the clock handls 
    s = 6 * currentSeconds
    m = 6 * currentMinutes
    h = 30 * currentHours
    $("#sec").css("transform", "rotate(" + s + "deg)")
    $("#min").css("transform", "rotate(" + m + "deg)")
    $("#hour").css("transform", "rotate(" + h + "deg)")
}