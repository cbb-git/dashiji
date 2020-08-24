$(function () {



    // 实现图片预览
    $('#inputCover').on('change', function () {

        let imgurl = URL.createObjectURL(this.files[0]);
        // 赋值
        $('.article_cover').attr('src', imgurl);

    })



    $.ajax({
        url: aabb.category_list,
        dataType: 'json',
        success: (res) => {

            console.log(res);
            $('.category').html(template('content1', res))
        }


    })

    $(function () {
        //或者为这样的
        jeDate("#indate", {
            trigger: "click",
            format: "YYYY-MM-DD",
            isTime: false,
            festival: true,
            theme: { bgcolor: "pink", color: "#ffffff", pnColor: "#00CCFF" },
            minDate: "2014-09-19 00:00:00"
        })
    });
    // // 获取数



    // //   富文本框
    tinymce.init({
        selector: '#mytextarea',
        language: 'zh_CN',
        // directionality: 'rtl',
        browser_spellcheck: true,
        contextmenu: false,
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste imagetools wordcount",
            "code"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",

    });


    //    发布

    function pinglun(con) {
        let formdata = new FormData($('#form')[0])
        console.log(...formdata)
        formdata.append('content', tinymce.activeEditor.getContent())
        formdata.append('state', con);

        $.ajax({
            url: aabb.article_publish,
            type: 'post',
            data: formdata,
            typeData: 'json',
            contentType: false,
            processData: false,
            success: (res) => {
                console.log(res);
                if (res.code == 200) {

                    alert(res.msg);
                    location.href = 'article_list.html'
                    $('.level02 >li:eq(0)', window.parent.document).addClass('active').siblings().removeClass('active');

                }
            }
        })
    }

    $('.btn-release').on('click', function () {
        pinglun('已发布')
    })

    $('.btn-draft').on('click', function () {
        pinglun('草稿')
    })


})













