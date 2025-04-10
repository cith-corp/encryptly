export type TEdition = {
    id: string
    name: string
    price: number
}
export type TFeatureValue = {
    editionId: string
    isTickbox?: boolean
    value: any
}