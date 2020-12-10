import base from './base.js'
import array from './array.js'
import func from './function.js'
import datetime from './datetime.js'
import window from './window.js'
//将文档说明都集成此数组
const dataList = [
    base,
    array,
    func,
    datetime,
    window
]

//合成文档json结构,界面调用
export default () => {
    let docTree = []
    let docMapDemo = new Map()
    dataList.map(item => {
        let titleData = item.title;
        titleData.children = [];
        //创建demo示例Map组合
        item.children.map(itemchild => {
            titleData.children.push(itemchild.base);
            docMapDemo.set(itemchild.base.name, itemchild.demo);
        })
        //构建菜单组织树
        docTree.push(titleData);
    })

    return {
        docTree,
        docMapDemo
    };
}



/** 模板函数
const children = [{
    base: {
        name: "isBrowser",
        title: "是否浏览器环境",
        desc: "用于判断程序运行环境是否在浏览器，这有助于避免在node环境运行前端模块时出错。",
        parmInfo: "()"
    },
    demo: [""]
}]

const docData = {
    title: {
        label: "数组",
        value: "array",
        expand: true,
        testValue: "",
        testResult: "",
        children: []
    },
    children: children
}

export default docData; 

 */