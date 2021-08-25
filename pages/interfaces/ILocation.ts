

export interface ILocation {
    location_area: {
        name: string
        url: string
    }
    version_details: [
        {
            encounter_details: [{
                chance: number
                condition_values: []
                max_level: number
                method: {
                    name: string
                    url: string
                }
                min_level: number,
                length: number
            }]
            max_chance: number
            version: {
                name: string,
                url: string
            }
        }
    ]
}