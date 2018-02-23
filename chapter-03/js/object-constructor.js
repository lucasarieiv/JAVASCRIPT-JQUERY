var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 48;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;
}

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
