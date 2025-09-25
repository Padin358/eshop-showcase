export const cartNumFunction = () => {
    const cartContent: string = localStorage.getItem("cartContent") !== null ? localStorage.getItem("cartContent") !: ""
    const parsed: any = cartContent ? JSON.parse(cartContent) : []

    console.log(parsed)

    const cartNow = [
        {name: "idk", price: "idk"},
        {name: "ajdontnou", price: "ajdontnou"}
    ]

    localStorage.setItem("cartContent", JSON.stringify(cartNow))

    const cartNum: number = Array.isArray(parsed) ? parsed.length : 0

    return cartNum
}