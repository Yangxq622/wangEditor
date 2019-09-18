/*
    menu - fontSize
*/

import $ from '../../util/dom-core.js'
import DropList from '../droplist.js'

// 构造函数
function FontSize(editor) {
    this.editor = editor
    this.$elem = $('<div class="w-e-menu"><i class="w-e-icon-text-heigh"></i></div>')
    this.type = 'droplist'

    // 当前是否 active 状态
    this._active = false

    // 初始化 droplist
    this.droplist = new DropList(this, {
        width: 160,
        $title: $('<p>字号</p>'),
        type: 'list', // droplist 以列表形式展示
        list: [
            { $elem: $('<span style="font-size: 12px;">12px</span>'), value: '1' },
            { $elem: $('<span style="font-size: 14px;">14px</span>'), value: '2' },
            { $elem: $('<span style="font-size: 16px;">16px</span>'), value: '3' },
            { $elem: $('<span style="font-size: 18px;">18px</span>'), value: '4' },
            { $elem: $('<span style="font-size: 20px;">20px</span>'), value: '5' },
            { $elem: $('<span style="font-size: 22px;">22px</span>'), value: '6' }
        ],
        onClick: (value) => {
            // 注意 this 是指向当前的 FontSize 对象
            this._command(value)
        }
    })
}

// 原型
FontSize.prototype = {
    constructor: FontSize,

    // 执行命令
    _command: function (value) {
        const editor = this.editor
        editor.cmd.do('fontSize', value)
    }
}

export default FontSize