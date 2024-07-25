import React, { useState, useEffect } from 'react';
import PokemonTable from './pokemonTable';

interface Pokemon {
    number: number;
    name: string;
    type_one: string;
    type_two: string;
    total: number;
    hit_points: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
    generation: number;
    legendary: boolean;
}

function App() {
    const [data, setData] = useState<Pokemon[]>([]);
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${backendUrl}/data`);
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, [backendUrl]);

    return (
        <div className="App">
            <h1>Pokemon Table</h1>
            {data.length > 0 ? <PokemonTable data={data} /> : <p>Loading...</p>}
        </div>
    );
}

export default App;
