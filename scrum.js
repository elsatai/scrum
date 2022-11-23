const changeStep = (step) => {
    $('section').removeClass('active');
    $(`section.stage${step}`).addClass('active');

    if(step == 4){
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

const step4fadeIn = () => {
    $('.stage4 .card').eq(0).delay(0).animate({"opacity": "1"}, 1000);
    $('.stage4 .card').eq(1).delay(700).animate({"opacity": "1"}, 1000);
    $('.stage4 .card').eq(2).delay(1400).animate({"opacity": "1"}, 1000);
}

$(() => {
    filpCard();
});