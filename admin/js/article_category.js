$(function () {
    // 请求地址：/admin/category/list

    // 请求方式：get

    // 请求参数：无

    // 返回数据：文章
    // 增加分类
    function data() {

        $.ajax({
            url: 'http://localhost:8080/api/v1/admin/category/list',
            type: 'get',
            success: (res) => {
                console.log(res);
                // 动态渲染
                let con = template('content', res);
                // 赋值
                $('tbody').html(con)
            },
            dataType: 'json',
            headers: {
                Authorization: localStorage.getItem('dashijian_token'),
            },

            error: (res) => {
                console.log(res);
                if (res.statusText == "Forbidden") {
                    alert(res.responseJSON.msg);
                    location.href = 'login.html'
                }
            },
        })

    }
    data();

    //    修改增加分类的页面
    $('#xinzengfenlei').on('click', function () {
        // 打开模拟矿
        if ($('#xinzengfenlei').text() == '新增分类') {
            $('.modal-title').text('增加');
            $('.btn-primary').text('确认');
            $('#recipient-name').val('');
            $('#message-text').val('');
        }
        $('#exampleModal').modal('show')
    })

    // 关闭模态框
    $('.btn-primary').on('click', function () {

        if ($(this).text() == '确认') {
            console.log(22);
            console.log($('form').serialize()),
                $.ajax({
                    url: aabb.category_add,
                    type: 'post',
                    dataType: 'json',
                    data: $('form').serialize(),

                    success: (res) => {
                        console.log(res);
                        data();
                        $('#exampleModal').modal('hide');
                    },
                    headers: {
                        // 设置请求头 找到我们的token
                        Authorization: localStorage.getItem('dashijian_token'),

                    },
                    error: (res) => {
                        console.log(res);
                        if (res.responseText.status == 403) {
                            alert(res.responseText.msg);
                            location.href = 'login.html';
                        }
                    },

                })
        }

    })


    // 点击编辑 模态框 切换到编辑页面

    $('tbody').on('click', '.btn-info', function () {



        $('.modal-title').text('分类编辑');
        $('.btn-primary').text('编辑');

        // 赋值
        //  这里的赋值  当你编辑的时候就赋值了
        let content = $(this).data();
        console.log(content);
        $('#recipient-name').val(content.name);
        $('#message-text').val(content.slug);
        let id = content.id;
        //  获取id
        $('.btn-primary').attr('id', id)


        $('#exampleModal').modal()
    });

    // 点击编辑修改信息
    $('.btn-primary').on('click', function () {

        if ($(this).text() == '编辑') {
            console.log(11);
            let id = $(this).attr('id');
            console.log(id);
            $.ajax({

                url: 'http://localhost:8080/api/v1/admin/category/edit',
                type: 'post',
                dataType: 'json',
                headers: {
                    Authorization: localStorage.getItem('dashijian_token'),
                },
                data: $('form').serialize() + '&id=' + id,

                success: (res) => {

                    console.log(res);
                    $('#exampleModal').modal('hide');
                    data();
                },
                error: (res) => {
                    console.log(res);
                    if (res.statusText == "Forbidden") {
                        alert(res.responseJSON.msg);
                        location.href = 'login.html'
                    }
                },

            })
        }



    })


    // 点击删除
    //   因为我们的删除键 是动态生成的所以需要我们的时间委托
    $('tbody').on('click', '.btn-danger', function () {

        //    获取id   我们需要自定义属性来调
        // 点击
        let id = $(this).data('id');
        // let id = $(this).data();  调用则需要点语法

        console.log(id);

        if (confirm('是否刪除')) {
            $.ajax({
                url: aabb.category_delete,
                type: 'post',
                dataType: 'json',
                data: { id: id },
                success: (res) => {
                    data();
                },
                headers: {
                    // 设置请求头 找到我们的token
                    Authorization: localStorage.getItem('dashijian_token'),

                },
                error: (res) => {
                    console.log(res);
                    if (res.responseText.status == 403) {
                        alert(res.responseText.msg);
                        location.href = 'login.html';
                    }
                },
            })
        }

    })
})
