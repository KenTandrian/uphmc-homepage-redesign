$(document).ready(function(){
    $('#business').click(function(){
        $('.programs__program-card-2').addClass('prog-unchecked').siblings().removeClass('prog-unchecked');       
    });
    $('#sistech').click(function(){
        $('.programs__program-card-1').addClass('prog-unchecked').siblings().removeClass('prog-unchecked');       
    });
});