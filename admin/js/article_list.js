$(function () {

    let page = 1;
    let perpage = 10;


    // 文章列表的模版
    function data() {

        $.ajax({
            url: aabb.article_query,
            type: 'get',
            dataType: 'json',


            data: {
                perpage,
                page,
                type: $('#selCategory').val(),
                state: $('#selStatus').val(),
            },
            success: (res) => {
                console.log(res);
                $('tbody').html(template('content', res.data))
                setPage(res.data.totalPage)
            }
        })
    }
    data()

    // function init() {
    $.ajax({
        url: aabb.category_list,
        type: 'get',
        dataType: 'json',
        success: (res) => {
            console.log(res);
            $('#selCategory').html(template('content1', res))
        }

    })
    // }

    // init()


    $('.btn-sm').on('click', function (e) {
        e.preventDefault()
        console.log($('#selCategory').val());

        page = 1;
        data()
    })


    function setPage(yeshu) {
        $(".pagination").bootstrapPaginator({
            //设置版本号
            bootstrapMajorVersion: 3,
            // 显示第几页
            currentPage: page,
            // 总页数
            totalPages: yeshu == 0 ? 1 : yeshu,
            //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
            onPageClicked: function (event, originalEvent, type, cpage) {
                // 把当前点击的页码赋值给currentPage, 调用ajax,渲染页面
                page = cpage
                data();
            }
        })
    }


    $('#release_btn').on('click', function () {

        console.log($('.level02 >li:eq(1)', window.parent.document));

        $('.level02 >li:eq(1)', window.parent.document).addClass('active').siblings().removeClass('active');

        location.href = 'article_release.html';


    })

    $('tbody').on('click', '.delete', function () {
        console.log(1);
        let id = $(this).data('id')
        console.log(id);

        $.ajax({
            url: aabb.article_delete,
            type: 'post',
            data: { id: id },
            dataType: 'json',
            success: (res) => {
                console.log(res);
                if (res.code == 204) {
                    alert(res.msg)
                    data();
                }
            }
        })
    })
})