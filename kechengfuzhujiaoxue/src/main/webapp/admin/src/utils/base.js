const base = {
    get() {
        return {
            url : "http://localhost:8080/kechengfuzhujiaoxue/",
            name: "kechengfuzhujiaoxue",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/kechengfuzhujiaoxue/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "课程辅助教学网站"
        } 
    }
}
export default base
