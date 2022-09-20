$('#boton').click(() => {
    let lista =$('#lista');
     lista.empty();
    $.get(`http://localhost:5000/amigos`, respuesta =>{
       for (let i = 0; i < respuesta.length; i++) {
        let li = `<li>${respuesta[i].name}</li>`;
        lista.append(li);
       }
    });
});


$('#search').click(() => {
    let valorInput = $('#input').val();
    $.get(`http://localhost:5000/amigos/${valorInput}`, respuesta => {
        $('#amigo').text(respuesta.name);
    });
});


$('#delete').click(() => {
    let inputValor = $('#inputDelete').val();
    $.ajax({
        url: `http://localhost:5000/amigos/${inputValor}`,
        type: 'DELETE',
        success: () => {
            $('#success').text('Su amigo fue eliminado con exito')
        }
    })
});

