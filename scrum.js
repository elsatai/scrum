const changeStep = (step) => {
    $('section').removeClass('active');
    $(`section.stage${step}`).addClass('active');

    if (step == '1-3') {
        step4fadeIn();
    }
}

const filpCard = () => {
    $('.stage1-1 .card-box').on("click", function () {
        $(this).addClass('flip');

        let count = $('.stage1-1 .card-box.flip').length
        if (count == 3) {
            $('.stage1-1 .next-btn').removeClass('hidden');
        }
    });
}

const step4fadeIn = async () => {
    await $('.stage1-3 .card').eq(0).animate({
        "opacity": "1"
    }, 800).promise();
    await $('.stage1-3 .card').eq(1).animate({
        "opacity": "1"
    }, 800).promise();
    await $('.stage1-3 .card').eq(2).animate({
        "opacity": "1"
    }, 800).promise();
    $('.stage1-3 .next-btn').removeClass('hidden');
}

$(() => {
    filpCard();
});