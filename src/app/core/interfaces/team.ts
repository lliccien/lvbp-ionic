export interface Team {
    id: number;
    logo: string;
    offical_name: string;
    tradename: string;
    founded: string;
    stadium: Stadium;
    president: string;
    manager: string;
    website: string;
    championships: number;
    runners_up: number;
    caribbean_series: number;
}

interface Stadium {
    name: string;
    capacity: number;
}

