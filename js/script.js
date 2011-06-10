$(function(){
  $('.project_img > img').each(function(){
    var src = $(this).attr('alt');
    $(this).after(src);
  });
});