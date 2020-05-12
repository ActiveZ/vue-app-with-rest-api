class MeteoActuel {
    constructor (
        date,
        heure,
        temperature,
        vitesse_vent,
        vitesse_rafale,
        direction_vent,
        pression,
        humidite,
        condition,
        icon_http_small,
        icon_http_big
        )
        {
        this.date=date,
        this.heure=heure,
        this.temperature=temperature,
        this.vitesse_vent=vitesse_vent,
        this.vitesse_rafale=vitesse_rafale,
        this.direction_vent=direction_vent,
        this.pression=pression,
        this.humidite=humidite,
        this.condition=condition,
        this.icon_http_small=icon_http_small,
        this.icon_http_big=icon_http_big          
    }
}
