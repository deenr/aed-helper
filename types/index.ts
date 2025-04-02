type GeoPoint2D = {
    lon: number
    lat: number
}

type GeoShape = {
    type: 'Feature'
    geometry: {
        type: 'Point'
        coordinates: [number, number]
    }
    properties: Record<string, unknown>
}

export type AedLocation = {
    gid: string
    provider: string
    city: string
    street_name: string
    house_number: string
    additional_details: string | null
    geo_point_2d: GeoPoint2D
    geo_shape: GeoShape
    street_code: number
    icar_address_id: number
    created: string
    last_modified: string
    floor: string | null
    postal_code: number
    icar_street_id: number
}
