let a = $('.flag').width();
for(let i=0;i<a;i++){
    let flagElement = $('<div class="flag-element"></div>');
    // flagElement.css('background-position', -i + "px 0");
    flagElement.css('animation-delay', `${1.5*i }ms`);
    flagElement.css("--displacement",`${i/60}px`)
    $('.flag').append(flagElement);
}
let d = new Date();
let independenceDay = new Date('1947/08/15');
let currentYear = d.getFullYear() 
let difference = (currentYear - independenceDay.getFullYear())+1;
// console.log(difference); 

  $(document).on("click", () => {
    // console.log("audio is playing");
    $('h1').html("INDIA's " +difference+ " <sup>th</sup> Independence Day");
    $('h1').addClass('text');
    const audio = $("#my_audio");
    // audio.volume = 0.2;
    audio.trigger('play');
  });



    

// let flag = $('.flag')
// const rows = 50;
// const columns = 80;


// const unitPxGenerator = (colNum) => {
//     let flagElement = $('<div class="flag-element"></div>');
//     flagElement.css('animation-delay', `${colNum*10 }ms`);
//     flagElement.css("--displacement",`${colNum/4}px`)
//     const col= $(`#column-${colNum}`);
//      col.append(flagElement);
// }

// for(let i=0;i<columns;i++){
//  flag.append(`<div class="column" id="column-${i}"></div>`);
//  for(let j=0;j<rows;j++){
//     unitPxGenerator(i);
//  }

// }
