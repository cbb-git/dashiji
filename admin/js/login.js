// // 第二

// function login() {
//     // 触发事件
//     $('.input_sub').on('click', function () {
      
//         const $name = $('.input_txt').val();
//         const $pass = $('.input_pass').val();

//         $.ajax({

//             url: aabb.user_login,
//             type: 'post',
//             dataType: 'json',
//             // data: $('.login_form').serialize(),
//             data: { username: $name, password: $pass },
//             success: (res) => {
//                 console.log(res);
//                 if (res.code == 200) {
//                     localStorage.setItem('dashijian_token', res.token);
//                     $('#myModal').modal();
//                 }

//             },

//         })


//     })
// }



// 第一
function login() {
    const $name = $('.input_txt').val();
    const $pass = $('.input_pass').val();
    $.ajax({
        type: 'post',
        // url: 'http://localhost:8080/api/v1/admin/user/login',
        url: aabb.user_login,
        data: { username: $name, password: $pass },
        success: (res) => {
            console.log(res);
            if (res.code == 200) {

                localStorage.setItem('dashijian_token', res.token);
                $('#myModal').modal()

                $('#myModal').on('hidden.bs.modal', function (e) {
                    if (co) {
                        location.href = 'index.html';
                    }

                });
            }
        },

    })

    //     // const $name = $('.input_txt').val();
    //     // const $pass = $('.input_pass').val();
    //     // $.post('http://localhost:8080/api/v1/admin/user/login', { username: $name, password: $pass }, (res) => {
    //     //     console.log(res);
    //     //     if (res.code == 200) {

    //     //         $('#myModal').modal()

    //     //         $('#myModal').on('hidden.bs.modal', function (e) {

    //     //                 location.href = 'index.html';
    //     //         });
    //     //     }
    //     // })
}


let co;
function affirm() {

    $('#myModal').modal('hide');
    co = true;
}
// function all() {

//     $('#myModal').modal('hide');
//     co = false;
// }






