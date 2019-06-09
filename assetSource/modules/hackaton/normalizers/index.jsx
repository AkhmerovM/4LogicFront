function normPostList (list) {
    return list.reduce((sum, post) => {
        return {
            ...sum,
            [post.id]: { ...post }
        };
    }, {});
}

export { normPostList };
