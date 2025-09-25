export const cartNumFunction = () => {
    let cartNum = 0

    let cartContent: any = localStorage.getItem("cartContent") !== null ? localStorage.getItem("cartContent") !: ""
    const parsed = JSON.parse(cartContent)
    console.log(parsed)

    if(cartContent) {
        cartContent.map(() => {
            cartNum++
        })
    }

    const cartNow = [{name: "idk", price: "idk"}, {name: "ajdontnou", price: "ajdontnou"}]

    localStorage.setItem("cartContent", JSON.stringify(cartNow))
}