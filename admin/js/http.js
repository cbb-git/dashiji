(function (w) {
    let baseURL = 'http://localhost:8080/api/v1';

    w.aabb = {
        user_login: baseURL + '/admin/user/login',
        user_info: baseURL + "/admin/user/info",
        user_detail: baseURL + '/admin/user/detail',
        user_edit: baseURL + '/admin/user/edit',
        category_list: baseURL + '/admin/category/list',
        category_add: baseURL + '/admin/category/add', //文章类别新增
        category_search: baseURL + '/admin/category/search', //文章类别搜索
        category_edit: baseURL + '/admin/category/edit', //文章类别编辑
        category_delete: baseURL + '/admin/category/delete', //文章类别删除
        article_query: baseURL + '/admin/article/query', //文章搜索
        article_publish: baseURL + '/admin/article/publish', //文章发布
        article_search: baseURL + '/admin/article/search', //文章信息查询
        article_edit: baseURL + '/admin/article/edit', //文章编辑
        article_delete: baseURL + '/admin/article/delete', //文章删除
        comment_search: baseURL + '/admin/comment/search', //文章评论列表
        comment_pass: baseURL + '/admin/comment/pass', //文章评论通过
        comment_reject: baseURL + '/admin/comment/reject', //文章评论不通过
        comment_delete: baseURL + '/admin/comment/delete', //文章评论删除
    }



})(window)