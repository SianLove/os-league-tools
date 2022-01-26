import images from '../assets/images';

export const PASSIVE_RELICS = {
    unlockThresholds: [0, 10, 300, 1500, 3000, 7500, 15000],
    tiers: {
        1: {
            points: 0,
            expMultiplier: 5,
            expMultiplierIncrease: true,
            dropMultiplier: 1,
            dropMultiplierIncrease: false,
            extras: ['Free combat fragment'],
        },
        2: {
            points: 10,
            expMultiplier: 5,
            expMultiplierIncrease: false,
            dropMultiplier: 1,
            dropMultiplierIncrease: false,
            extras: ['Unlimited run energy', 'Stackable clues', 'Smooth Criminal fragment'],
        },
        3: {
            points: 300,
            expMultiplier: 8,
            expMultiplierIncrease: true,
            dropMultiplier: 1,
            dropMultiplierIncrease: false,
            extras: ['Double Kourend favour', 'Stackable clues', 'Random combat fragment'],
        },
        4: {
            points: 1500,
            expMultiplier: 8,
            expMultiplierIncrease: false,
            dropMultiplier: 2,
            dropMultiplierIncrease: true,
            extras: ['Random skilling fragment'],
        },
        5: {
            points: 3000,
            expMultiplier: 12,
            expMultiplierIncrease: true,
            dropMultiplier: 2,
            dropMultiplierIncrease: false,
            extras: ['Random combat fragment'],
        },
        6: {
            points: 7500,
            expMultiplier: 12,
            expMultiplierIncrease: false,
            dropMultiplier: 3,
            dropMultiplierIncrease: true,
            extras: ['Ability to choose slayer tasks'],
        },
        7: {
            points: 15000,
            expMultiplier: 16,
            expMultiplierIncrease: true,
            dropMultiplier: 3,
            dropMultiplierIncrease: false,
            extras: ['Random combat fragment'],
        },
    },
};

export const STATS = {
    Agility: {
        label: 'Agility',
        panelOrder: 4,
        icon: images['agility.gif'],
        iconMini: images['task-agility.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 5,
    },
    Attack: {
        label: 'Attack',
        panelOrder: 0,
        icon: images['attack.gif'],
        iconMini: images['task-attack.png'],
        isPossibleTutorialUnlock: true,
        unlockCost: 10,
    },
    Construction: {
        label: 'Construction',
        panelOrder: 21,
        icon: images['construction.gif'],
        iconMini: images['task-construction.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 15,
    },
    Cooking: {
        label: 'Cooking',
        panelOrder: 11,
        icon: images['cooking.gif'],
        iconMini: images['task-cooking.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 10,
    },
    Crafting: {
        label: 'Crafting',
        panelOrder: 13,
        icon: images['crafting.gif'],
        iconMini: images['task-crafting.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 15,
    },
    Defence: {
        label: 'Defence',
        panelOrder: 6,
        icon: images['defence.gif'],
        iconMini: images['task-defence.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 0,
    },
    Farming: {
        label: 'Farming',
        panelOrder: 20,
        icon: images['farming.gif'],
        iconMini: images['task-farming.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 10,
    },
    Firemaking: {
        label: 'Firemaking',
        panelOrder: 14,
        icon: images['firemaking.gif'],
        iconMini: images['task-firemaking.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 5,
    },
    Fishing: {
        label: 'Fishing',
        panelOrder: 8,
        icon: images['fishing.gif'],
        iconMini: images['task-fishing.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 0,
    },
    Fletching: {
        label: 'Fletching',
        panelOrder: 16,
        icon: images['fletching.gif'],
        iconMini: images['task-fletching.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 10,
    },
    Herblore: {
        label: 'Herblore',
        panelOrder: 7,
        icon: images['herblore.gif'],
        iconMini: images['task-herblore.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 15,
    },
    Hitpoints: {
        label: 'Hitpoints',
        panelOrder: 1,
        icon: images['hitpoints.gif'],
        iconMini: images['task-hitpoints.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 5,
    },
    Hunter: {
        label: 'Hunter',
        panelOrder: 22,
        icon: images['hunter.gif'],
        iconMini: images['task-hunter.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 5,
    },
    Magic: {
        label: 'Magic',
        panelOrder: 15,
        icon: images['magic.gif'],
        iconMini: images['task-magic.png'],
        isPossibleTutorialUnlock: true,
        unlockCost: 10,
    },
    Mining: {
        label: 'Mining',
        panelOrder: 2,
        icon: images['mining.gif'],
        iconMini: images['task-mining.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 5,
    },
    Prayer: {
        label: 'Prayer',
        panelOrder: 12,
        icon: images['prayer.gif'],
        iconMini: images['task-prayer.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 15,
    },
    Ranged: {
        label: 'Ranged',
        panelOrder: 9,
        icon: images['ranged.gif'],
        iconMini: images['task-ranged.png'],
        isPossibleTutorialUnlock: true,
        unlockCost: 10,
    },
    Runecraft: {
        label: 'Runecraft',
        panelOrder: 18,
        icon: images['runecraft.gif'],
        iconMini: images['task-runecraft.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 5,
    },
    Slayer: {
        label: 'Slayer',
        panelOrder: 19,
        icon: images['slayer.gif'],
        iconMini: images['task-slayer.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 15,
    },
    Smithing: {
        label: 'Smithing',
        panelOrder: 5,
        icon: images['smithing.gif'],
        iconMini: images['task-smithing.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 10,
    },
    Strength: {
        label: 'Strength',
        panelOrder: 3,
        icon: images['strength.gif'],
        iconMini: images['task-strength.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 10,
    },
    Thieving: {
        label: 'Thieving',
        panelOrder: 10,
        icon: images['thieving.gif'],
        iconMini: images['task-thieving.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 0,
    },
    Woodcutting: {
        label: 'Woodcutting',
        panelOrder: 17,
        icon: images['woodcutting.gif'],
        iconMini: images['task-woodcutting.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 5,
    },
    Overall: {
        label: 'Overall',
        panelOrder: 23,
        icon: images['task-total.png'],
        iconMini: images['task-total.png'],
        isPossibleTutorialUnlock: null,
        unlockCost: null,
    },
    QP: {
        label: 'Quest points',
        panelOrder: null,
        icon: images['tab-quests.png'],
        iconMini: images['task-quest.png'],
        isPossibleTutorialUnlock: null,
        unlockCost: null,
    },
    Combat: {
        label: 'Combat',
        panelOrder: null,
        icon: images['combat.png'],
        iconMini: images['task-combat.png'],
        isPossibleTutorialUnlock: null,
        unlockCost: null,
    },
};

export const DIFFICULTY = {
    BEGINNER: {
        label: 'Beginner',
        value: 5,
        renown: 1,
        icon: images['task-beginner.png'],
        sortOrder: 0,
    },
    EASY: {
        label: 'Easy',
        value: 5,
        renown: 1,
        icon: images['task-easy.png'],
        sortOrder: 1,
    },
    MEDIUM: {
        label: 'Medium',
        value: 25,
        renown: 2,
        icon: images['task-medium.png'],
        sortOrder: 2,
    },
    HARD: {
        label: 'Hard',
        value: 50,
        renown: 3,
        icon: images['task-hard.png'],
        sortOrder: 3,
    },
    ELITE: {
        label: 'Elite',
        value: 125,
        renown: 4,
        icon: images['task-elite.png'],
        sortOrder: 4,
    },
    MASTER: {
        label: 'Master',
        value: 250,
        renown: 5,
        icon: images['task-master.png'],
        sortOrder: 5,
    },
};

export const QUEST_DIFFICULTY = {
    NOVICE: {
        id: 0,
        label: 'Novice',
        icon: images['task-bronze-star.png'],
    },
    INTERMEDIATE: {
        id: 1,
        label: 'Intermediate',
        icon: images['task-silver-star.png'],
    },
    EXPERIENCED: {
        id: 2,
        label: 'Experienced',
        icon: images['task-gold-star.png'],
    },
    MASTER: {
        id: 3,
        label: 'Master',
        icon: images['task-two-stars.png'],
    },
    GRANDMASTER: {
        id: 4,
        label: 'Grandmaster',
        icon: images['task-three-stars.png'],
    },
};

export const QUEST_LENGTH = {
    VERY_SHORT: {
        id: 0,
        label: 'Very Short',
        icon: images['task-bronze-sword.png'],
    },
    SHORT: {
        id: 1,
        label: 'Short',
        icon: images['task-iron-sword.png'],
    },
    MEDIUM: {
        id: 2,
        label: 'Medium',
        icon: images['task-mith-sword.png'],
    },
    LONG: {
        id: 3,
        label: 'Long',
        icon: images['task-rune-sword.png'],
    },
    VERY_LONG: {
        id: 4,
        label: 'Very Long',
        icon: images['task-dragon-sword.png'],
    },
};

export const QUEST_SERIES = {
    CAMELOT: {
        id: 0,
        label: 'Camelot',
        icon: images['task-kandarin.png'],
    },
    DESERT: {
        id: 1,
        label: 'Desert',
        icon: images['task-kharidian.png'],
    },
    DORGESHUUN: {
        id: 2,
        label: 'Dorgeshuun',
        icon: images['task-bandos.png'],
    },
    GUILDS: {
        id: 3,
        label: 'Guilds / Dragonkin',
        icon: images['task-legend.png'],
    },
    ELEMENTAL: {
        id: 4,
        label: 'Elemental Workshop',
        icon: images['task-elemental.png'],
    },
    ELF: {
        id: 5,
        label: 'Elven',
        icon: images['task-tiranwnn.png'],
    },
    GNOME: {
        id: 6,
        label: 'Gnome',
        icon: images['task-gnome.png'],
    },
    FAIRY: {
        id: 7,
        label: 'Fairy Tale',
        icon: images['task-cosmic.png'],
    },
    FREMENNIK: {
        id: 8,
        label: 'Fremennik',
        icon: images['task-fremennik.png'],
    },
    KOUREND: {
        id: 9,
        label: 'Great Kourend',
        icon: images['task-xeric.png'],
    },
    KARAMJA: {
        id: 10,
        label: 'Karamja',
        icon: images['task-karamja.png'],
    },
    MAHJARRAT: {
        id: 11,
        label: 'Mahjarrat / Return of Zaros',
        icon: images['task-zaros.png'],
    },
    MYREQUE: {
        id: 12,
        label: 'Myreque',
        icon: images['task-morytania.png'],
    },
    OGRE: {
        id: 13,
        label: 'Ogre',
        icon: images['task-goblin.png'],
    },
    PIRATE: {
        id: 14,
        label: 'Pirate',
        icon: images['task-steel-scim.png'],
    },
    RED_AXE: {
        id: 15,
        label: 'Rise of the Red Axe',
        icon: images['task-dragon-baxe.png'],
    },
    TEMPLE_KNIGHT: {
        id: 16,
        label: 'Temple Knight / Sea Slug',
        icon: images['task-steel-kite.png'],
    },
    TROLL: {
        id: 17,
        label: 'Troll',
        icon: images['task-bossing.png'],
    },
};

export const QUEST_STATUS = {
    NOT_STARTED: 'NOT_STARTED',
    IN_PROGRESS: 'IN_PROGRESS',
    FINISHED: 'FINISHED',
};

export const DEFAULT_NOTES_TEXT = '(none)';
