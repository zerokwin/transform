'use strict';

var data = {
    list: [{
        id: '日本的大学',
        class: 'jp_univ',
        href: '/univ.html',
        imgUrl: 'assets/images/jp_univ.png'
    }, {
        id: '我们的课程',
        class: 'our_courses',
        href: '/our-course.html',
        imgUrl: 'assets/images/courses.png'
    }, {
        id: '在线评估',
        class: 'online_assessment',
        href: '#',
        imgUrl: 'assets/images/online_assessment.png'
    }, {
        id: '关于我们',
        class: 'about_us',
        href: 'javascript:void(0)',
        imgUrl: 'assets/images/about_us.png',
        subListClass: 'nav-list-sec',
        subList: [{
            id: '经营理念',
            href: '#'
        }, {
            id: '经营历程',
            href: '/history.html'
        }, {
            id: '评资力量',
            href: '#'
        }, {
            id: '学员心声',
            href: '/student-voices.html'
        }]
    }, {
        id: '师资力量',
        class: 'our_team',
        href: '#',
        imgUrl: 'assets/images/our_team.png'
    }]
};

var navHtml = template('nav', data);
document.querySelector('.nav').querySelector('.container').innerHTML = navHtml;