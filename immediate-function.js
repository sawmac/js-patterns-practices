/* immediate function patter
   adapted from JavaScript Patterns by Stoyan Stefanov
   copyright 2010, O'Reilly
   pp 69-72

   Use this to create local variables and not pollute
   the global variable space

   Often used by bookmarklets to not interfere with 
   scope of HTML page

   used for self-contained modules
*/   

(function(){
  var day
      , today = new Date();
      msg;
  /* more code using those vars
}()); /* vars day, today and msg do not go into global space


/* often used in jQuery code to protect $ */
(function ($) {
   /* programming in here can use $
      without fear of colliding with a $
      in global space (like prototype) 
   */
}(jQuery));