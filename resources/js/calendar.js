var evt = [
    { title: "Eu vou te ver", date: new Date('2023-06-23T22:00:00') },
    { title: "Você vem me visitar", date: new Date('2023-06-30T15:00:00') },
];

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: evt      
    });
    calendar.render();
});
