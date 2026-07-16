'use client'

import React, { useState } from 'react';

interface Player {
    id: string;
    name: string;
}

export const TurnOrderOrganizer: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([
        { id: '1', name: '🍌 Banana' },
        { id: '2', name: '🛡️ Shield' },
        { id: '3', name: '🗑️ Trash' },
    ]);

    // Track the index of the item currently being dragged
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

    const handleDragStart = (index: number) => {
        setDraggedIndex(index);
    };

    const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
        // Necessary to allow dropping
        e.preventDefault();
    };

    const handleDrop = (targetIndex: number) => {
        if (draggedIndex === null || draggedIndex === targetIndex) return;

        // Reorder the array
        const updatedPlayers = [...players];
        const [draggedItem] = updatedPlayers.splice(draggedIndex, 1);
        updatedPlayers.splice(targetIndex, 0, draggedItem);

        setPlayers(updatedPlayers);
        setDraggedIndex(null);
    };

    return (
        <div style={{ maxWidth: '300px', margin: '20px auto' }}>
            <h3>Set Turn Order</h3>
            <ol style={{ padding: 0, listStyle: 'none' }}>
                {
                    players.map((player, index) => (
                        <li
                            key={player.id}
                            draggable
                            onDragStart={() => handleDragStart(index)}
                            onDragOver={handleDragOver}
                            onDrop={() => handleDrop(index)}
                            style={{
                                padding: '10px',
                                margin: '8px 0px',
                                backgroundColor: '#ffffff',
                                border: '2px solid #ccc',
                                borderRadius: '6px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                cursor: 'grab',
                                // Visual cue while dragging
                                opacity: draggedIndex === index ? 0.5 : 1,
                            }}
                        >
                            <span>
                                <strong>{index + 1}.</strong> {player.name}
                            </span>
                            {/* Grab handle visual indicator */}
                            <span style={{ color: '#888', userSelect: 'none' }}>
                                ⋮⋮
                            </span>
                        </li>
                    ))}
            </ol>
        </div>
    );
};