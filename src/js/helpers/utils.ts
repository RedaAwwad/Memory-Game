import data from "../helpers/data";
import { Block } from '../../types';

export const getRandomNumber = (max: number): number => {
    return Math.floor(Math.random() * (max + 1));
};

export const shuffleData = (): Block[] => {
    const orderedData: Block[] = [];
    const includedData: number[] = [];

    while (orderedData.length < 20) {
        let randomIndex = getRandomNumber(data.length);

        if (!includedData.includes(randomIndex)) {
            let blockData = data.find(b => b.id === randomIndex);

            if (blockData) {
                orderedData.push(blockData);
                includedData.push(blockData.id);
            }
        }
    }

    return orderedData;
};