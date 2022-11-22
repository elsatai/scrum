const changeStep = (step) => {
    $('section').removeClass('active');
    $(`section.stage${step}`).addClass('active');
}