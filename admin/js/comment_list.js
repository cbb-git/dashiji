$(function () {
    let page = 1;
    let perpage = 10

    //   动态的生成评论数据
    //   所以我们需要自调用函数
    function data() {

        $.ajax({

            url: aabb.comment_search,
            type: 'get',
            dataType: 'json',
            data: {
                page: page,
                perpage: perpage,
            },
            success: (res) => {
                console.log(res);
                $('tbody').html(template('content', res.data))
                setPage(res.data.totalPage)
            },
        })
    }
    data()

    // 分页
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
// 封装
    function result(url, id) {
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: { id: id },
            success: (res) => {
                console.log(res);
                if (res.code == 200) {
                    alert('操作成功');
                    data()
                }
            }
        })
    }



    $('tbody').on('click', '.btn-warning', function () {
        let id = $(this).data('ratify');
        result(aabb.comment_pass, id)

    });

    $('tbody').on('click', '.btn-success', function () {
        let id = $(this).data('rafuse');
        result(aabb.comment_reject, id)
    })
    $('tbody').on('click', '.btn-danger', function () {
        let id = $(this).data('dale');
        result(aabb.comment_delete, id)
    })
})