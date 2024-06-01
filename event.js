// document.querySelector("button").addEventListener('click',function(){
//       document.querySelector('#p1').innerHTML="You have clicked the button"
// })

$("#button1").click(function(){
      $('#p1').text("You have clicked the button")
      $('#p1').css({
            'background-color': 'green',
            'color':'yellow'
      });
      $('#p1').toggleClass('style1 style2');  //! addclass on first click and remove on second click
 })

 //! we can use any of listener such as click, mounseover, hover, mouseout etc etc...



//  var totalButtons=document.querySelectorAll('.myButton').length;
//  for (let i=0; i<totalButtons; i++){
//       document.querySelectorAll('.myButton')[i].addEventListener('click',function(){
//             var text=this.innerHTML;
//             document.querySelector("#p1").innerHTML=text+" is clicked...yaaay......"
//       })
//  }


      // $('.myButton').click(function(){
      //       var text=this.innerHTML;
      //       $('#p1').text(`${text} is clicked...`)
      // })

      
      $('.myButton').on('click',function(){
            var text=this.innerHTML;
            $('#p1').text(`${text} is clicked...`)
      })

