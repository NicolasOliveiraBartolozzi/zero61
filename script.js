$(document).ready(function() {
    // Quando a página é carregada, verifique os checkboxes e marque-os corretamente
    updateCheckboxes();

    // Adiciona um evento de mudança para os checkboxes
    $('input[type="checkbox"]').change(function() {
        updateCheckboxes();
    });
});

function updateCheckboxes() {
    // Obtém o valor dos checkboxes 1 e 2
    const checkbox1 = $('#map1').prop('checked');
    const checkbox2 = $('#map2').prop('checked');

    // Obtém o valor dos checkboxes 3 e 4
    const checkbox3 = $('#map3').prop('checked');
    const checkbox4 = $('#map4').prop('checked');

    // Obtém o valor dos checkboxes 5 e 6
    const checkbox5 = $('#map5').prop('checked');
    const checkbox6 = $('#map6').prop('checked');

    // Obtém o valor dos checkboxes 7 e 8
    const checkbox7 = $('#map7').prop('checked');
    const checkbox8 = $('#map8').prop('checked');

    // Remove as classes previamente adicionadas
    $('li.map-item').removeClass('correct wrong');

    // Marca os checkboxes corretos com as classes e textos apropriados
    if (checkbox1 && checkbox2) {
        $('#map1').parent().addClass('correct');
        $('#map2').parent().addClass('correct');
    } else {
        $('#map1').parent().addClass('wrong');
        $('#map2').parent().addClass('wrong');
    }

    if (checkbox3 && checkbox4) {
        $('#map3').parent().addClass('correct');
        $('#map4').parent().addClass('correct');
    } else {
        $('#map3').parent().addClass('wrong');
        $('#map4').parent().addClass('wrong');
    }

    if (checkbox5 && checkbox6) {
        $('#map5').parent().addClass('correct');
        $('#map6').parent().addClass('correct');
    } else {
        $('#map5').parent().addClass('wrong');
        $('#map6').parent().addClass('wrong');
    }

    if (checkbox7) {
        $('#map7').parent().addClass('correct');
    } else {
        $('#map7').parent().addClass('wrong');
    }

    if (checkbox8) {
        $('#map8').parent().addClass('correct');
    } else {
        $('#map8').parent().addClass('wrong');
    }
}
