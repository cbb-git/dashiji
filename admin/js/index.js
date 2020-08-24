$(function () {

    $.ajax({
        // url: 'http://localhost:8080/api/v1/admin/user/info',
        url: aabb.user_info,
        dataType: 'json',
        //   我们需要设置请求头 拿到token值

        success: (res) => {
            // 如果登录成功我们赋值
            console.log(res);
            // 都是服务器提供的
            $('.user_info > img').attr('src', res.data.userPic);
            $('.user_info > span').text(res.data.nickname);
            $('.user_img').attr('src', res.data.userPic)
        },
        // error: (res) => {
        //     console.log(res);
        //     if (res.statusText == "Forbidden") {
        //         alert(res.responseJSON.msg);
        //         location.href = 'login.html'
        //     }
        // },
        // headers: {
        //     Authorization: localStorage.getItem('dashijian_token')
        // },
    })

    //    左侧切换
    $('.level01').on('click', function () {
        // addclass 添加样式
        $(this).addClass('active').siblings().removeClass('active');

        let index = $(this).index();
        if (index == 1) {
            $('.level02').slideToggle();
            $(this).find('b').toggleClass('rotate0');


        } else {
            $('.level02').slideUp();
            $(this).find('b').removeClass('rotate0');
            $('.level02 > li').removeClass('active');
        }
    })

    // 展开的内容点击
    $('.level02 > li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
    })




})