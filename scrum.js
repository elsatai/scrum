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
        case '5-3':
            step53()
            break;
        case '6-2-1':
            step621()
            break;
        case '6-2-2':
            step622()
            break;
        case '6-2-3':
            step623()
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

const step53 = () => {
    typeWriter('#text-5-3-1', '珍奶怪要打八下才行，我昨天打了他兩下，今天應該可以再打到一下！')
        .then(() => {
            return typeWriter('#text-5-3-2', '那個要打三下的香蕉怪我打他兩下他就跑了！看來要再多花一些時間找他！');
        })
        .then(() => {
            return typeWriter('#text-5-3-3', '我昨天打到珍奶怪一下，今天會先跟狗狗去找香蕉怪！')
        })
        .then(() => {
            $('.stage5-3 .next-btn').removeClass('hidden');
        })
}

const _stage44 = {
    drop: () => {
        const $drag = $('.stage4-4 .container .boxes .mosters'),
            $drop = $('.stage4-4 .container .boxes .inner');

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
        const innerIndex = $('.stage4-4 .container .boxes .inner').index(inner),
            mosterIndex = $('.stage4-4 .container .boxes .mosters').index(moster);

        if (innerIndex == 0 && mosterIndex != 3) {
            _stage32.showTips('false');
        } else {
            _stage32.checkAll();
        }
    },
    checkAll: (inner, moster) => {
        const $mosters = $('.stage4-4 .container .boxes .mosters.hit');
        if ($mosters.length > 3) {
            const m1 = $('.stage4-4 .container .boxes .mosters.hit').eq(0).position().left,
                m2 = $('.stage4-4 .container .boxes .mosters.hit').eq(1).position().left,
                m3 = $('.stage4-4 .container .boxes .mosters.hit').eq(2).position().left,
                m4 = $('.stage4-4 .container .boxes .mosters.hit').eq(3).position().left;

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
        $('.stage4-4 .container .tips').fadeIn();

        switch (type) {
            case 'false1':
                $('.stage4-4 .container .tips .tip.false1').fadeIn();
                break;
            case 'false2':
                $('.stage4-4 .container .tips .tip.false2').fadeIn();
                break;
            case 'goback':
                $('.stage4-4 .container .tips .tip.goback').fadeIn();
                break;
            case 'correct':
                $('.stage4-4 .container .tips .tip.correct').fadeIn();
                $('.stage4-4 .container .tips .mask').removeAttr('onclick');
                $('.stage4-4 .container .next-btn').removeClass('hidden');
                break;
        }
    },
    hideTips: () => {
        _stage32.resetLocation();
        $('.stage4-4 .container .tips').fadeOut();
        $('.stage4-4 .container .tips .tip').fadeOut();
    },
    resetLocation: () => {
        $('.stage4-4 .container .boxes .mosters').removeClass('hit');
        $('.stage4-4 .container .boxes .mosters').attr('style', 'position: relative;');
    }
};

const step621 = () => {
    typeWriter('#text-6-2-1-1', '我們打敗珍奶怪後，你們的小孩體重狀況怎麼樣呢？')
        .then(() => {
            return typeWriter('#text-6-2-1-2', '熱量攝取正常很多，但好像還是很愛吃雞排耶！真傷腦筋！');
        })
        .then(() => {
            $('.stage6-2-1 .next-btn').removeClass('hidden');
        })
}

const step622 = () => {
    typeWriter('#text-6-2-2-1', '這樣啊！那我們可能也要打敗雞排怪才行～')
        .then(() => {
            return typeWriter('#text-6-2-2-2', '熱量攝取正常很多，但好像還是很愛吃雞排耶！真傷腦筋！');
        })
        .then(() => {
            $('.stage6-2-2 .next-btn').removeClass('hidden');
        })
}

const step623 = () => {
    typeWriter('#text-6-2-3-2', '貓怪變少後，我兒子終於願意工作不會在家狂吸貓了呢！')
        .then(() => {
            return typeWriter('#text-6-2-3-1', '那真是太好了！除了貓怪以外，也吸不帶珍奶怪了喔！');
        })
        .then(() => {
            $('.stage6-2-3 .next-btn').removeClass('hidden');
        })
}

$(() => {
    filpCard();
    _stage32.drop();
    _stage44.drop();
});