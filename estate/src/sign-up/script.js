const ID = 'userIdentity';
const PASSWORD = 'P!ssw0rd';
const EMAIL = 'email@email.com';
const AUTH_NUMBER = '1010';

let id = '', password = '', passwordCheck = '', email = '', authNumber = '';
let isDuplicate = true, isPasswordPattern = false, isEqualPassword = false, isEmail = false, isDuplicateEmail = true, isEqualAuthNumber = false;

const idInputElement = document.getElementById('id');
const passwordInputElement = document.getElementById('password');
const passwordCheckInputElement = document.getElementById('password-check');
const emailInputElement = document.getElementById('email');
const authNumberInputElement = document.getElementById('auth-number');

const checkDuplicateButtonElement = document.getElementById('check-duplication-button');
const checkEmailButtonElement = document.getElementById('check-email-button');
const checkAuthNumberButtonElement = document.getElementById('check-auth-number-button');

const idMessageElement = document.getElementById('id-message');
const passwordMessageElement = document.getElementById('password-message');
const passwordCheckMessageElement = document.getElementById('password-check-message');
const emailMessageElement = document.getElementById('email-message');
const authNumberMessageElement = document.getElementById('auth-number-message');

const signUpButtonElement = document.getElementById('sign-up-button');
const signInLinkElement = document.getElementById('sign-in-link');

function onIdInputHandler (event) {
    id = event.target.value;
    isDuplicate = true;

    if (id) checkDuplicateButtonElement.className = 'input-primary-button';
    else checkDuplicateButtonElement.className = 'input-disable-button';
}

function onPasswordInputHandler (event) {
    // 비밀번호 변수에 이벤트가 발생한 실제 요소의 value 값을 할당한다.
    password = event.target.value;

    // 비밀번호 패턴을 정규식으로 영문자와 숫자를 반드시 포함한 상태로 8~13자로 지정한다.
    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,13}$/;
    // 비빌번호 변수에 들어있는 값이 비밀번호 패턴과 일치하는지 확인한다.
    isPasswordPattern = passwordReg.test(password);

    // 비밀번호 패턴이 일치하지 않을 때
    if (!isPasswordPattern) {
        // passwordMessase 요소의 클래스명을 'input-message error'로 바꾼다.
        passwordMessageElement.className = 'input-message error';
        // passwordMessase 요소의 텍스트를 '영문, 숫자를 혼용하여 8 ~ 13자 입력해주세요'로 바꾼다.
        passwordMessageElement.textContent = '영문, 숫자를 혼용하여 8 ~ 13자 입력해주세요';
        // 변경 작업이 이뤄진 후 함수를 종료한다.
        return;
    }
    // 비밀번호 패턴이 일치할 경우에만 아래 코드가 실행됨

    // passwordMessase 요소의 클래스명을 'input-message'로 바꾼다.
    passwordMessageElement.className = 'input-message';
    // passwordMessase 요소의 텍스트를 빈문자열로 바꾼다.
    passwordMessageElement.textContent = '';
}

function onPasswordCheckInputHandler (event) {
    passwordCheck = event.target.value;

    isEqualPassword = password === passwordCheck;
    if (!isEqualPassword) {
        passwordCheckMessageElement.className = 'input-message error';
        passwordCheckMessageElement.textContent = '비밀번호가 일치하지 않습니다.';
        return;
    }
    passwordCheckMessageElement.className = 'input-message';
    passwordCheckMessageElement.textContent = '';
}

function onEmailInputHandler (event) {
    email = event.target.value;
    isEmail = false;
    isDuplicateEmail = true;

    if (email) checkEmailButtonElement.className = 'input-primary-button';
    else checkEmailButtonElement.className = 'input-disable-button';
}

function onAuthNumberInputHandler (event) {
    authNumber = event.target.value;
    isEqualAuthNumber = false;

    if (authNumber) checkAuthNumberButtonElement.className = 'input-primary-button';
    else checkAuthNumberButtonElement.className = 'input-disable-button';
}

idInputElement.addEventListener('input', function (event) {
    onIdInputHandler(event);
    setSignUpButton();
});

passwordInputElement.addEventListener('input', function (event) {
    onPasswordInputHandler(event);
    setSignUpButton();
});

passwordCheckInputElement.addEventListener('input', function (event) {
    onPasswordCheckInputHandler(event);
    setSignUpButton();
});

emailInputElement.addEventListener('input', function (event) {
    onEmailInputHandler(event);
    setSignUpButton();
});

authNumberInputElement.addEventListener('input', function (event) {
    onAuthNumberInputHandler(event);
    setSignUpButton();
});

function onCheckDuplicateClickHandler (event) {
    if (!id) return;

    isDuplicate = id === ID;
    if (isDuplicate) {
        idMessageElement.className = 'input-message error';
        idMessageElement.textContent = '이미 사용중인 아이디 입니다.';
        return;
    }
    
    idMessageElement.className = 'input-message primary';
    idMessageElement.textContent = '사용 가능한 아이디 입니다.';
}

function onCheckEmailClickHandler (event) {
    if (!email) return;

    const emailReg = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
    isEmail = emailReg.test(email);
    if (!isEmail) {
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이메일 형식이 아닙니다.';
        return;
    }

    isDuplicateEmail = email === EMAIL;
    if (isDuplicateEmail) {
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이미 사용중인 이메일 입니다.';
        return;
    }

    emailMessageElement.className = 'input-message primary';
    emailMessageElement.textContent = '인증번호가 전송되었습니다.';

}

function onCheckAuthNumberClickHandler (event) {
    if (!authNumber) return;

    isEqualAuthNumber = authNumber === AUTH_NUMBER;
    if (!isEqualAuthNumber) {
        authNumberMessageElement.className = 'input-message error';
        authNumberMessageElement.textContent = '인증번호가 일치하지 않습니다.';
        return;
    }
    
    authNumberMessageElement.className = 'input-message primary';
    authNumberMessageElement.textContent = '인증번호가 확인되었습니다.';
}

checkDuplicateButtonElement.addEventListener('click', function (event) {
    onCheckDuplicateClickHandler(event);
    setSignUpButton();
});
checkEmailButtonElement.addEventListener('click', function (event) {
    onCheckEmailClickHandler(event);
    setSignUpButton();
});
checkAuthNumberButtonElement.addEventListener('click', function (event) {
    onCheckAuthNumberClickHandler(event);
    setSignUpButton();
});

function onSignInLinkClickHandler (event) {
    window.location.href = '../sign-in';
}

signInLinkElement.addEventListener('click', onSignInLinkClickHandler);

function setSignUpButton () {

    const isPrimaryButton = 
        id && password && passwordCheck && email && authNumber && 
        !isDuplicate && isPasswordPattern && isEqualPassword && isEmail && !isDuplicateEmail && isEqualAuthNumber;

    if (isPrimaryButton) signUpButtonElement.className = 'primary-button full-width';
    else signUpButtonElement.className = 'disable-button full-width';

}