function changeTheme() {
  let body = document.querySelector('body');
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
  } else {
    body.classList.add('dark-theme');
  }
}

function learnMore() {
  let userName = prompt('What is your name?');
  if (userName === null) {
    alert('Prompt was cancelled.');
    return;
  }

  let email = prompt('What is your email?');
  if (email === null) {
    alert('Prompt was cancelled.');
    return;
  }

  if (userName === '' || email === '') {
    alert('Please enter your info.');
  } else {
    alert(
      'Hi ' +
        userName +
        '! Thank you for contacting us. We will reach you via email🛹'
    );
  }
}

let themeButton = document.querySelector('.theme-button');
themeButton.addEventListener('click', changeTheme);

let btn = document.querySelector('.btn');
btn.addEventListener('click', learnMore);
