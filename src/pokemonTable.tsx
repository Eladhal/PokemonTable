import React from 'react';

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

interface PokemonTableProps {
    data: Pokemon[];
}

const PokemonTable: React.FC<PokemonTableProps> = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(data[0]).map((key) => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {Object.values(row).map((value, i) => (
                            <td key={i}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PokemonTable;
