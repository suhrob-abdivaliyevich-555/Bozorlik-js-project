
var ProductName = [];
var UserProductInput = document.querySelector('.user-product-input');
var UserUnshiftButton = document.querySelector('.user-unshift-button');
var UserPushButton = document.querySelector('.user-push-button');
var ElUserText = document.querySelector('.user-text')

UserUnshiftButton.addEventListener('click' , function(){
    if(UserProductInput.value){
        if (ProductName.indexOf(UserProductInput.value) > - 1) {
            alert('Iltimos, boshqa narsa kiriting bu narsa ro\'yxatda bor ekan?');
        } else{
            ProductName.unshift(UserProductInput.value);
            // ElUserText.innerHTML = ProductName.join('<br>');
            ElUserText.innerHTML = ProductName.join('<br>');
            UserProductInput.focus();
        }
    }else{
        confirm('Mahsulot nomini kiritasizmi?');
    }
});

UserPushButton.addEventListener('click' , function(){
    if(UserProductInput.value){
        if (ProductName.indexOf(UserProductInput.value) > -1) {
            alert('Iltimos, boshqa narsa kiriting bu narsa ro\'yxatda bor ekan?');
        }else{
            ProductName.push(UserProductInput.value);
            ElUserText.innerHTML = ProductName.join('<br>');
            UserProductInput.focus();
        }
    }else{
        confirm('Siz hech nima kiritmadingiz kiritish niyatingiz bormi?');
    }
});