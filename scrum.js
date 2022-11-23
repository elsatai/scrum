const changeStep = (step) => {
    $('section').removeClass('active');
    $(`section.stage${step}`).addClass('active');

    if (step == 4) {
        step4fadeIn();
    }
}

const filpCard = () => {
    $('.stage3 .card-box').on("click", function () {
        $(this).addClass('flip');

        let count = $('.stage3 .card-box.flip').length
        if (count == 3) {
            $('.stage3 .next-btn').removeClass('hidden');
        }
    });
}

const step4fadeIn = async () => {
    await $('.stage4 .card').eq(0).animate({
        "opacity": "1"
    }, 800).promise();
    await $('.stage4 .card').eq(1).animate({
        "opacity": "1"
    }, 800).promise();
    await $('.stage4 .card').eq(2).animate({
        "opacity": "1"
    }, 800).promise();
    $('.stage4 .next-btn').removeClass('hidden');
}

$(() => {
    filpCard();
});