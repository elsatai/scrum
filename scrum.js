const changeStep = (step) => {
    $('section').removeClass('active');
    $(`section.stage${step}`).addClass('active');

    switch (step) {
        case '1-3':
            step13fadeIn();
            break;
        case '3-3':
            step33()
            break;
        case '4-2':
            step42()
            break;
        case '4-2-2':
            step422()
            break;
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

const step13fadeIn = async () => {
    await $('.stage1-3 .card').eq(0).animate({
        "opacity": "1"
    }, 600).promise();
    await $('.stage1-3 .card').eq(1).animate({
        "opacity": "1"
    }, 600).promise();
    await $('.stage1-3 .card').eq(2).animate({
        "opacity": "1"
    }, 600).promise();
    $('.stage1-3 .next-btn').removeClass('hidden');
}

const _stage32 = {
    drop: () => {
        const $drag = $('.stage3-2 .container .boxes .mosters'),
            $drop = $('.stage3-2 .container .boxes .inner');

        $drag.draggable({
            revert: "invalid"
        });
        $drop.droppable({
            drop: function (event, ui) {
                let this_monsters = ui.draggable;
                this_monsters.addClass('hit');

                _stage32.checkFirst($(event.target), ui.draggable);
            }
        });
    },
    checkFirst: (inner, moster) => {
        const innerIndex = $('.stage3-2 .container .boxes .inner').index(inner),
            mosterIndex = $('.stage3-2 .container .boxes .mosters').index(moster);

        if (innerIndex == 0 && mosterIndex != 3) {
            _stage32.showTips('false');
        } else {
            _stage32.checkAll();
        }
    },
    checkAll: (inner, moster) => {
        const $mosters = $('.stage3-2 .container .boxes .mosters.hit');
        if ($mosters.length > 3) {
            const m1 = $('.stage3-2 .container .boxes .mosters.hit').eq(0).position().left,
                m2 = $('.stage3-2 .container .boxes .mosters.hit').eq(1).position().left,
                m3 = $('.stage3-2 .container .boxes .mosters.hit').eq(2).position().left,
                m4 = $('.stage3-2 .container .boxes .mosters.hit').eq(3).position().left;

            if (m4 < m2 && m2 < m3 && m3 < m1) {
                _stage32.showTips('correct');
            } else if (m4 < m3 && m3 < m2 && m2 < m1) {
                _stage32.showTips('correct');
            } else {
                _stage32.showTips('goback');
            }
        }
    },
    showTips: (type) => {
        $('.stage3-2 .container .tips').fadeIn();

        switch (type) {
            case 'false':
                $('.stage3-2 .container .tips .tip.false').fadeIn();
                break;
            case 'goback':
                $('.stage3-2 .container .tips .tip.goback').fadeIn();
                break;
            case 'correct':
                $('.stage3-2 .container .tips .tip.correct').fadeIn();
                $('.stage3-2 .container .tips .mask').removeAttr('onclick');
                $('.stage3-2 .container .next-btn').removeClass('hidden');
                break;
        }
    },
    hideTips: () => {
        _stage32.resetLocation();
        $('.stage3-2 .container .tips').fadeOut();
        $('.stage3-2 .container .tips .tip').fadeOut();
    },
    resetLocation: () => {
        $('.stage3-2 .container .boxes .mosters').removeClass('hit');
        $('.stage3-2 .container .boxes .mosters').attr('style', 'position: relative;');
    }
};

const step33 = () => {
    setTimeout(() => {
        $('.stage3-3 .mask img').addClass('bigger')
    }, 200);
    setTimeout(() => {
        $('.stage3-3 .jira').addClass('bigger');
    }, 500);
    setTimeout(() => {
        $('.stage3-3 .jira-text').fadeIn();
    }, 1000);
    setTimeout(() => {
        $('.stage3-3 .next-btn').fadeIn();
    }, 1500);
}

const step42 = () => {
    typeWriter('#text-4-2-1', '我很會吃香蕉！根據我的經驗，香蕉怪應該打個兩下就掛了！')
        .then(() => {
            return typeWriter('#text-4-2-2', '香蕉怪看起來很強耶！我覺得應該要打個五下！');
        })
        .then(() => {
            return typeWriter('#text-4-2-3', '沒錯！皮蠻厚的，可能要個五六下才能打敗他！')
        })
        .then(() => {
            $('.stage4-2 .next-btn').removeClass('hidden');
        })
}

const step422 = () => {
    typeWriter('#text-4-2-2-1', '我也有打過幾次貓怪，我覺得還好耶！應該可以打三下就掛！')
        .then(() => {
            return typeWriter('#text-4-2-2-2', '我有攻擊貓怪的經驗，貓怪超難纏的，我看也要打他個四下！');
        })
        .then(() => {
            return typeWriter('#text-4-2-2-3', '我可以引開貓怪的注意，我想應該不難打敗他！')
        })
        .then(() => {
            $('.stage4-2-2 .next-btn').removeClass('hidden');
        })
}

const typeWriter = (el, text) => {
    return new Promise((resolve, reject) => {
        const typed = new Typed(el, {
            strings: [text],
            typeSpeed: 80,
            showCursor: false,
            fadeOut: true,
            onComplete: function () {
                resolve();
            }
        });
    });
}

$(() => {
    filpCard();
    _stage32.drop();
});