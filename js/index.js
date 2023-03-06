// 轮播图
window.addEventListener('load', function () {

    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var ol = document.querySelector('.move');
    var move_left = document.querySelector('.move_left');
    var move_right = document.querySelector('.move_right');
    var focusWidth = focus.offsetWidth;

    focus.addEventListener('mouseenter', function () {
        move_left.style.display = 'block';
        move_right.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function () {
        move_left.style.display = 'none';
        move_right.style.display = 'none';
        timer = setInterval(function () {
            move_right.click();
        }, 3000);
    });

    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('Date-index', i);
        ol.appendChild(li);
        li.addEventListener('mouseenter', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].style.backgroundColor = '';
            }
            this.style.backgroundColor = '#de0000';
            var index = this.getAttribute('Date-index');
            animate(ul, -index * focusWidth);
            num = index;
            circle = index;
        })
    }
    ol.children[0].style.backgroundColor = '#de0000';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;
    move_right.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].style.backgroundColor = '';
            }
            ol.children[circle].style.backgroundColor = '#de0000';
        }
    })

    move_left.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].style.backgroundColor = '';
            }
            ol.children[circle].style.backgroundColor = '#de0000';
        }
    })
    var timer = setInterval(function () {
        move_right.click();
    }, 3000);
})

// 侧边栏
window.addEventListener('load', function () {
    var aside = document.querySelector('.aside');
    var main = document.querySelector('.main');
    var recomment = document.querySelector('.recomment');
    var goBack = document.querySelector('.goBack');
    var recommentTop = recomment.offsetTop;
    var asideTop = document.querySelector('.asideTop');
    var search = document.querySelector('.search');
    var searchTop = search.offsetTop;
    var goTop = document.querySelector('.goTop');
    document.addEventListener('scroll', function () {
        // 又边栏
        aside.style.position = 'fixed'
        if (window.pageYOffset > recommentTop) {
            goBack.style.display = 'block';
            aside.style.height = 418 + 'px';
        } else {
            goBack.style.display = 'none';
            aside.style.height = 340 + 'px';
        }
        // 上边栏
        if (window.pageYOffset > searchTop) {
            asideTop.style.display = 'block';
            asideTop.style.position = 'fixed';
        } else {
            asideTop.style.display = 'none';
            asideTop.style.position = 'absolute';
        }
    })
    goTop.addEventListener('click', function () {
        var timer = setInterval(function () {
            if (document.documentElement.scrollTop <= 0) {
                clearInterval(timer);
            }
            document.documentElement.scrollTop = document.documentElement.scrollTop - 30
        }, 1)
    })
})




// tab栏切换
window.addEventListener('load', function () {
    var dd = document.querySelector('.dd');
    var lis = dd.querySelectorAll('li');
    var items = document.querySelectorAll('.items');
    var tab_con = document.querySelector('.tab_con');
    var body = document.body;
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('mouseover', function () {
            tab_con.style.display = 'block';
            var index = this.getAttribute('index');
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            items[index].style.display = 'block';
        })
        lis[i].addEventListener('mouseout', function () {
            tab_con.style.display = 'none';
        })

    }
    tab_con.addEventListener('mouseover', function () {
        tab_con.style.display = 'block';
    })
    tab_con.addEventListener('mouseout', function () {
        tab_con.style.display = 'none';
    })

})




// 倒计时特效
window.addEventListener("load", function () {
    var hour = document.querySelector('.hour');
    var minute = document.querySelector('.minute');
    var second = document.querySelector('.second');
    var inputTime = +new Date('2023-7-21 22:00:00');
    countDown();
    setInterval(countDown, 1000);
    function countDown() {
        var nowTime = +new Date();
        var times = (inputTime - nowTime) / 1000;
        var h = parseInt(times / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h;
        var m = parseInt(times / 60 % 60);
        m = m < 10 ? '0' + m : m;
        minute.innerHTML = m;
        var s = parseInt(times % 60);
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s;
    }
})
// 倒计时特效
