class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler);
    addressForm.addEventListener('click', this.findAddressHandler);
  }

  locateUserHandler() {}

  findAddressHandler() {}
}