//Garret and Sarah
const submitButtonKay = document.getElementById('submitKay');
const passwordInputKay = document.getElementById('passwordKay');
const contentKay = document.getElementById('scroll-contentKay');

//Andy and Gaylene
const submitButtonPage = document.getElementById('submitPage');
const passwordInputPage = document.getElementById('passwordPage');
const contentPage = document.getElementById('scroll-contentPage');

//Micheal and Deborah
const submitButtonNewman = document.getElementById('submitNewman');
const passwordInputNewman = document.getElementById('passwordNewman');
const contentNewman = document.getElementById('scroll-contentNewman');

//Parker
const submitButtonParker = document.getElementById('submitParker');
const passwordInputParker= document.getElementById('passwordParker');
const contentParker = document.getElementById('scroll-contentParker');

//Dressler
const submitButtonDressler = document.getElementById('submitDressler');
const passwordInputDressler= document.getElementById('passwordDressler');
const contentDressler = document.getElementById('scroll-contentDressler');

//Michelle
const submitButtonMichelle = document.getElementById('submitMichelle');
const passwordInputMichelle = document.getElementById('passwordMichelle');
const contentMichelle = document.getElementById('scroll-contentMichelle');

//Elizabeth
const submitButtonElizabeth = document.getElementById('submitElizabeth');
const passwordInputElizabeth= document.getElementById('passwordElizabeth');
const contentElizabeth = document.getElementById('scroll-contentElizabeth');

//Kohl
const submitButtonKohl = document.getElementById('submitKohl');
const passwordInputKohl = document.getElementById('passwordKohl');
const contentKohl = document.getElementById('scroll-contentKohl');

//Hide letter button
const buttonHideLetter = document.getElementById('hideLetter');

//General
//const submitButton = document.getElementById('submit');
const scrollContainer = document.getElementById('scroll-container');
//const passwordInput = document.getElementById('password');

submitButtonPage.addEventListener('click', () => {
  const password = passwordInputPage.value;
  if (password === 'wed0') {
    scrollContainer.classList.add('active');

    contentPage.style.display = "block";
    contentKay.style.display = "none";
    contentDressler.style.display = "none";
    contentElizabeth.style.display = "none";
    contentParker.style.display = "none";
    contentMichelle.style.display = "none";
    contentNewman.style.display = "none";
    contentKohl.style.display = "none";

  } else {
    alert('Incorrect password! Please make sure you are Andy or Gaylene and check your travel kit. Or contact Joseph');
  }
});

submitButtonParker.addEventListener('click', () => {
    const password = passwordInputParker.value;
    if (password === 'wed1') {
      scrollContainer.classList.add('active');

      contentPage.style.display = "none";
      contentKay.style.display = "none";
      contentDressler.style.display = "none";
      contentElizabeth.style.display = "none";
      contentParker.style.display = "block";
      contentMichelle.style.display = "none";
      contentNewman.style.display = "none";
      contentKohl.style.display = "none";

    } else {
      alert('Incorrect password! Please make sure you are Parker and check your travel kit. Or contact Joseph');
    }
  });

  submitButtonDressler.addEventListener('click', () => {
    const password = passwordInputDressler.value;
    if (password === 'wed2') {
      scrollContainer.classList.add('active');

      contentPage.style.display = "none";
      contentKay.style.display = "none";
      contentDressler.style.display = "block";
      contentElizabeth.style.display = "none";
      contentParker.style.display = "none";
      contentMichelle.style.display = "none";
      contentNewman.style.display = "none";
      contentKohl.style.display = "none";

    } else {
      alert('Incorrect password! Please make sure you are Steven or Shayla and check your travel kit. Or contact Joseph');
    }
  });

  submitButtonKay.addEventListener('click', () => {
    const password = passwordInputKay.value;
    if (password === 'wed3') {
      scrollContainer.classList.add('active');

      contentPage.style.display = "none";
      contentKay.style.display = "block";
      contentDressler.style.display = "none";
      contentElizabeth.style.display = "none";
      contentParker.style.display = "none";
      contentMichelle.style.display = "none";
      contentNewman.style.display = "none";
      contentKohl.style.display = "none";

    } else {
      alert('Incorrect password! Please make sure you are Garrit or Sarah and check your travel kit. Or contact Joseph');
    }
  });

  submitButtonMichelle.addEventListener('click', () => {
    const password = passwordInputMichelle.value;
    if (password === 'wed4') {
      scrollContainer.classList.add('active');

      contentPage.style.display = "none";
      contentKay.style.display = "none";
      contentDressler.style.display = "none";
      contentElizabeth.style.display = "none";
      contentParker.style.display = "none";
      contentMichelle.style.display = "block";
      contentNewman.style.display = "none";
      contentKohl.style.display = "none";

    } else {
      alert('Incorrect password! Please make sure you are Michelle and check your travel kit. Or contact Joseph');
    }
  });

  submitButtonNewman.addEventListener('click', () => {
    const password = passwordInputNewman.value;
    if (password === 'wed5') {
      scrollContainer.classList.add('active');

      contentPage.style.display = "none";
      contentKay.style.display = "none";
      contentDressler.style.display = "none";
      contentElizabeth.style.display = "none";
      contentParker.style.display = "none";
      contentMichelle.style.display = "none";
      contentNewman.style.display = "block";
      contentKohl.style.display = "none";

    } else {
      alert('Incorrect password! Please make sure you are Micheal or Deborah and check your travel kit. Or contact Joseph');
    }
  });

  submitButtonElizabeth.addEventListener('click', () => {
    const password = passwordInputElizabeth.value;
    if (password === 'wed6') {
      scrollContainer.classList.add('active');

      contentPage.style.display = "none";
      contentKay.style.display = "none";
      contentDressler.style.display = "none";
      contentElizabeth.style.display = "block";
      contentParker.style.display = "none";
      contentMichelle.style.display = "none";
      contentNewman.style.display = "none";
      contentKohl.style.display = "none";

    } else {
      alert('Incorrect password! Please make sure you are Elizabeth and check your travel kit. Or contact Joseph');
    }
  });

  submitButtonKohl.addEventListener('click', () => {
    const password = passwordInputKohl.value;
    if (password === 'wed7') {
      scrollContainer.classList.add('active');

      contentPage.style.display = "none";
      contentKay.style.display = "none";
      contentDressler.style.display = "none";
      contentElizabeth.style.display = "none";
      contentParker.style.display = "none";
      contentMichelle.style.display = "none";
      contentNewman.style.display = "none";
      contentKohl.style.display = "block";

    } else {
      alert('Incorrect password! Please make sure you are Jimmy and check your travel kit. Or contact Joseph');
    }
  });

  //hide Button function
  buttonHideLetter.addEventListener('click', () => {
    scrollContainer.classList.add('roll');
  });

  //animation end fucntion
  scrollContainer.addEventListener('animationend', () => {
    if (scrollContainer.classList.value === "active roll")
    {
       scrollContainer.classList.remove('active');
       scrollContainer.classList.remove('roll');
    }
  });

//Genral
/*
submitButton.addEventListener('click', () => {
    const password = passwordInput.value;
    if (password === 'wedding') {
      scrollContainer.classList.add('active');
    } else {
      alert('Incorrect password! Please check you travel kit. Or contact Joseph');
    }
  });
*/