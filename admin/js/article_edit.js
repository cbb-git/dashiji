$(function () {


    //   下拉列表
    $.ajax({
        url: aabb.category_list,
        dataType: 'json',
        success: (res) => {

            console.log(res);
            $('.category').html(template('content1', res))
        }


    })

    // 实现图片预览
    $('#inputCover').on('change', function () {

        let imgurl = URL.createObjectURL(this.files[0]);
        // 赋值
        $('.article_cover').attr('src', imgurl);

    })

    // 获取时间
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

    console.log(location.search.split('='));
    let id = location.search.split('=')[1];

    $.ajax({
        url: aabb.article_search,
        type: 'get',
        dataType: 'json',
        // 参数  根据id生成
        data: { id: id },
        success: (res) => {
            console.log(res);
            $('#inputTitle').val(res.data.title);
            $('.article_cover').attr('src', res.data.cover);
            $('.category').val(res.data.categoryId);
            $('#indate').val(res.data.date);
            $('#mytextarea').val(res.data.content)
        }
    })
})