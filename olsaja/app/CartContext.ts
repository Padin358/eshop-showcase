import { products } from "./data"

const cartAdder = (item: object, amount: number) => {
    const cartContent: string = localStorage.getItem("cartContent") !== null ? localStorage.getItem("cartContent") !: ""
    let parsed: any = cartContent ? JSON.parse(cartContent) : []

    parsed += item

    localStorage.setItem("cartContent", JSON.stringify(parsed))
}

export const addToCart = (item: string, amount: number) => {
    switch (item) {
        case "11":
            cartAdder(products[0], amount)
            break
        case "14":
            break
        case "13":
            break
        case "special":
            break
        case "S11":
            break
        case "Sspecial":
            break
    }
}