let tagList = [
    'minappershortcode',
    'minapperad',
    'minappermap',
    'minapperglobalgoods',
    'minappergoods',
    'minappergallery'
    // #ifdef MP-weixin
    ,'baidupan',
    'minapperqqvideo',
    'minapperchannelsactivity',
    'minapperchannelsevent',
    'minapperchannels'
    // #endif
]
let tagListTxt = ',' + tagList.join(',') // 注意：这里最前面要自己拼一个逗号进去

export default {
    tagList,
    tagListTxt
}