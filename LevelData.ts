export interface LevelData {
    Size: [number, number];    // Ou number[] si la taille peut varier
    Walls: [number, number][]; // Un tableau de paires [x,y]
    Doors: any[];              // Ajustez le type au besoin
    PressurePlates: any[];     // Ajustez le type
    EndPlates: [number, number];
    PlayersStart: [number, number][];
    // Ajoutez d'autres propriétés si nécessaire
}