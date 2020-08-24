// 获取我们用户的默认信息
$(function () {
    $.ajax({
        url: 'http://localhost:8080/api/v1/admin/user/detail',
        type: 'get',
        headers: {
            // 设置请求头 找到我们的token
            Authorization: localStorage.getItem('dashijian_token'),

        },
        success: (res) => {
            console.log(res);
            // 找到我们的标签
            if (res.code == 200) {
                $('#inputEmail1').val(res.data.username);
                $('#inputEmail2').val(res.data.nickname);
                $('#inputEmail3').val(res.data.email);
                $('.user_pic').attr('src', res.data.userPic);
                $('#inputEmail4').val(res.data.password);
            }
        },
        //  当没有权限的时候
        error: (res) => {
            console.log(res);
            if (res.responseText.status == 403) {
                alert(res.responseText.msg);
                location.href = 'login.html';
            }
        },
    })

    // 本地浏览图片 1
    // $('#exampleInputFile').on('change', function () {
    //     let url = this.files[0];
    //     let newurl = window.URL.createObjectURL(url);
    //     console.log(newurl);
    //     $('.user_pic').attr('src', newurl)
    // })


})
//  本地浏览图片 2
function upload() {
    let url = $('#exampleInputFile')[0].files[0];

    console.log(url);

    let newurl = window.URL.createObjectURL(url);
    console.log(newurl);
    // 赋值
    $('.user_pic').attr('src', newurl)
}

// 上传到服务器
// 因为我们的内容有图片 所以 我们要用fromdata
function amend() {
                             
    const fromdata = new FormData($('#form')[0]);

    // fromdata 可以取到文件地址
     
    console.log(...fromdata);

    $.ajax({
        url: 'http://localhost:8080/api/v1/admin/user/edit',
        type: 'post',
        data: fromdata,
        headers: {
            Authorization: localStorage.getItem('dashijian_token'),
        },
        success: (res) => {
            console.log(res);
            if (res.code == 200) {
                alert(res.msg);
                // 我们需要刷新页面;
                window.parent.location.href = 'index.html';
            }
        },
        dataType: 'json',
        processData: false,
        contentType: false,

        error: (res) => {
            console.log(res);
            if (res.responseText.status == 403) {
                alert(res.responseText.msg);
                location.href = 'login.html';
            }
        },

    })

}

