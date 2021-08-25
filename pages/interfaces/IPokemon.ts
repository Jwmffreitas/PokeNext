export interface IPokemon {
    height: number,
    id: number,
    location_area_encounters: string,
    name: string,
    order: number,
    past_types: [],
    species: {
        name: string,
        url: string
    },
    sprites : ISprites
        stats: IStats[],
        types: ITypes[],
        weight: number,
}

export interface ISprites {
    back_default: string,
    back_female?: string,
    back_shiny?: string,
    back_shiny_female?: null,
    front_default: string,
    front_female?: string,
    front_shiny?: string,
    front_shiny_female?: string,
    other: {
        "official-artwork": {
            front_default: string
        }
      dream_world: {
        front_default?: string,
        front_female?: string
      },
    },
}

export interface ITypes {
    type: {
      name: string,
      url: string
    }
}

export interface IStats {
    base_stat: number,
    effort: number,
    stat: {
      name: string,
      url: string
    }
}