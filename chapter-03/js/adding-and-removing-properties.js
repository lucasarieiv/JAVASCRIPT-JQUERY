var hotel = {
  name : 'Park',
  rooms : 120,
  booked : 77,
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

var elName = document.getElementById('hotelName');
elName.textContent = 'Hotel Name : ' + hotel.name;

var elPool = document.getElementById('pool');
elPool.textContent = 'Pool : ' + hotel.pool;

var elGym = document.getElementById('gym');
elGym.textContent = 'Gym : ' + hotel.gym;
