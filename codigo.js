let parrafo = $('#miParrafo');
parrafo.css('font-size','50px')

parrafo.click(function(){
    $(this).slideUp('slow').slideDown('slow'); //efecto deslizar
})


let titulo = $('.titulo');

titulo.click(function(){
    $(this).fadeOut('slow'); //efecto desvanecido
})


titulo.css("color","red");

let contenido = $('.caja');
contenido.css(
    {
        'background-color': 'pink',
        'padding':'2rem',
        'text-transform':'uppercase'
    }
)
contenido.dblclick(function(){
    $(this).css('background-color','green')
    $(this).slideUp('slow').slideDown('slow');
})
 
contenido.dblclick(function(){
    $(this).css('background-color','green')
    $(this).animate({deg:360},{
        duration:3000,
        step:function(now) {
            $(this).css({
                transform:'rotate('+ now + 'deg)'
            })
        }
    })
})