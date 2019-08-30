import render from './render'

const element = {
    tag: 'div',
    data: {
        style: {
            background: '#000',
            color: '#fff'
        }
    },
    children: [
        {
            tag: '',
            children: '111'
        },
        {
            tag: 'li',
            children: [{
                tag: '',
                children: '1'
            }]
        }
    ]
}

render(element, document.getElementById('app'))