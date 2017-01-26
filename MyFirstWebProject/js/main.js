/**
 * Created by Soudehm on 2017-01-25.
 */

//alert(skillset);

$(document).ready(main);
//Selecting element in plain javaScript
//var skillset = document.getElementsByClassName('skillset');
//Selecting element in jQuery
function main() {
    //var $skillset=$('.skillset');
    //alert($skillset);
    $('.skillset').hide();
    $('.skillset').fadeIn(1000);
    $('.projects').hide();
    $('.projects-button').on('click', function(){
        //$('.projects').show();
        // $(this).next().toggle();
        $(this).next().slideToggle(400);
        //$('.projects-button').toggleClass('active');
        $(this).toggleClass('active');
        $(this).text('Projects Viewed');
    });
};

