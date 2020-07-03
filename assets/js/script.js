const heart = document.getElementById('bullet-heart');
const checkbox = document.getElementsByTagName('input'); 

window.addEventListener("load", () => {



  const funct = () => {
    setTimeout(() => {
    if (activitiesReset()){
      console.log('true');
      heart.classList.add('bullet')
    } else {
      console.log('false');
    }
    }, 500)
  }
  document.addEventListener('click', funct);

  })




activitiesReset = () => { 
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      return true;
    }
  }
  return false;
}


