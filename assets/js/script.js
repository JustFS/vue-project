// set little red dot above icons nav
window.addEventListener("load", () => {
  let checkbox = document.getElementsByTagName('input'); 
  let notif = document.getElementById('nav-not');

  // check if at least one of the checkboxes on the DOM is checked
  const checkboxCheck = () => { 
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        return true;
      }
    }
    return false;
  }

  // set red dot
  const setNotif = () => {
    if (checkboxCheck()){
      // console.log('true');
      notif.style.visibility = 'visible';
      notif.style.opacity = '1';
    } else {
      // console.log('false');
      notif.style.visibility = 'hidden';
      notif.style.opacity = '0';
    }
  }
  
  // check once if red dot is needed
  setNotif();

  // watch any change
  document.addEventListener('click', setNotif);

});

