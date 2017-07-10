$(document).ready(function() {
  // list of all the unique words
  $("#word-order").submit(function(event) {

    event.preventDefault();
    var blocks = $("#orders").val();
    var splits = blocks.split(' ');
    splits =splits.sort();
    var count = 0;
    var number = 1;
    splits.forEach(function(split){
      count +=1;
      if(split=== split[number]){
        count+=1;
        alert(count);
      } else {
        alert("keep trying")
      }

    });
  });


  //  and how many times they appeared
});
