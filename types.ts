// Interfaces

export interface Digimon {
id: string;
type: Attribute;
level: Level;
name: string;
description: string | null;
}

// Types

type Level = 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI' | 'VI+';
type Attribute = 'Vaccine' | 'Data' | 'Virus';