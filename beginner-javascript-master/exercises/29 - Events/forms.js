const wes = document.querySelector('.wes');
wes.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('You clicked it!!');
  const shouldChangePage = confirm(
    'This website might be malicious, do you wish to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
  console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bro');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
