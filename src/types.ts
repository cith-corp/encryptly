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

export type TFeature = {
    displayName: string
    values: any
   
    }