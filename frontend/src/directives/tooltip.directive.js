export default {
    bind(el, {value}){
        M.Tooltip.init(el, {html: value})
    },
    unbind(el){
       const Tooltip =  M.Tooltip.getInstance(el)

       if (Tooltip && Tooltip.destroy) {
           Tooltip.destroy()
       }
    }
};
