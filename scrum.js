const changeStep = (step) => {
    $('section').removeClass('active');
    $(`section.stage${step}`).addClass('active');
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

$(() => {
    filpCard();
});