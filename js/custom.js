// $(document).scroll(function() {
//     var y = $(this).scrollTop();
//     if (y > 200) {
//         $('#main-navigation').addClass("sticky");
//     } 
//     else{
//         $('#main-navigation').removeClass("sticky");
//     }
// });




function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12
    const timeString = `${formattedHours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
    document.getElementById('tm').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();


function display_ct5() {
    var x = new Date();

    var day = x.getDate();
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = monthNames[x.getMonth()];
    var year = x.getFullYear();

    var formattedDate = day + " " + month + " " + year;

    document.getElementById("dt").innerHTML = formattedDate;
    display_c5();
}

var world = document.querySelectorAll(".active-country");
for (var i = 0; i < world.length; i++) {
	var country = world[i];
	country.setAttribute("data-toggle", "tooltip");
	country.setAttribute("data-placement", "top");
	country.setAttribute("title", country.getAttribute("id"));
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(".close-jackethead").on('click', function(e){
    $(this).parent().parent().parent().fadeOut()
})

$(".jacket-head").on('click', function(e){
    if (e.target.nodeName !== 'IMG') {
        $(this).fadeOut();
    }
})

$('.premium-dropdown-item').hover(
    function() {
     $(this).find('.premium-dropdownmenu').show()
    },
    function() {
        $(this).find('.premium-dropdownmenu').hide()
    }
  );



  const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.8; // between 0 and 1

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);


function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(
    Math.pow(diffX, 2) + Math.pow(diffY, 2)
  );
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);
  
  pos.x += diffX * speed;
  pos.y += diffY * speed;
  
  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);
  
  const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
  const rotate = 'rotate(' + angle +'deg)';
  const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};
window.addEventListener('scroll', updateCursor);
function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);



const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
  curosrModifier.addEventListener('mouseenter', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.add(className);
  });
  
  curosrModifier.addEventListener('mouseleave', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.remove(className);
  });
});

$(".mylink h6").on('click', function(e){
    $(".mylink").toggleClass("show-connect")
})

// Get today's date
let today = new Date();

// Create an array of month names
const monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

// Get the month, day, and year
let month = monthNames[today.getMonth()];
let day = today.getDate();
let year = today.getFullYear();

// Format the date as "Month day, year"
let formattedDate = `${day} ${month} ${year}`;

// Display the formatted date
document.getElementById("day-date").innerText = formattedDate;