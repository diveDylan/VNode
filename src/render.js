/**
 * 
 * @param {*} vnode 
 * @param {*} container 
 */
export default function render(vnode, container) {
    const el = c(vnode)
    vnode.el = el
    const data = vnode.data
    if (data && vnode.tag) {
        for(let key in data) {
            switch(key) {
                case 'style': {
                    for(let k in data.style) {
                        el.style[k] = data.style[k]
                    }
                };
                case 'class': {
                    el.class = data.class
                }
                break
            }
        }
    }
    if (isArray(vnode.children)) {
        vnode.children.map(i => {
            render(i, el)
        })
    }
    container.appendChild(el)
}

const isArray = a => Array.isArray(a)

const c = t => t.tag ? document.createElement(t.tag) : document.createTextNode(t.children)