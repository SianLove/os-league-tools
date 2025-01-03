import images from '../assets/images';

export const NONE_RELIC_ID = -1;

export const RELIC_UNLOCK_THRESHOLDS = [0, 750, 1500, 2500, 5000, 8000, 16000, 25000];

export const PASSIVE_RELICS = [
  {
    exp: {
      multiplier: 5,
      increased: true,
    },
    combatExp: {
      multiplier: 1,
      increased: false,
    },
    drops: {
      multiplier: 2,
      increased: true,
    },
    minigames: {
      multiplier: 4,
      increased: true,
    },
    extras: [
      'Farming Ticks will occur every minute instead of every five minutes.',
      'Minigame Points received are boosted by 4x',
      'Run energy is never drained whilst running.',
      'All Clue Scrolls will drop as Stackable Scroll Boxes, and Clue-step progress is saved between Clues.',
    ],
  },
  {
    exp: {
      multiplier: 8,
      increased: true,
    },
    combatExp: {
      multiplier: 1,
      increased: false,
    },
    drops: {
      multiplier: 2,
      increased: false,
    },
    minigames: {
      multiplier: 4,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 8,
      increased: false,
    },
    combatExp: {
      multiplier: 1,
      increased: false,
    },
    drops: {
      multiplier: 2,
      increased: false,
    },
    minigames: {
      multiplier: 4,
      increased: false,
    },
    extras: [
      'The "Bigger and badder" slayer unlock is unlocked for free.',
      "Slayer Points are 5x from Tasks and you aren't required required to complete 5 Tasks before earning Points.",
      'Slayer Superior rates are increased to a 1/50 chance to appear.',
    ],
  },
  {
    exp: {
      multiplier: 8,
      increased: false,
    },
    combatExp: {
      multiplier: 1,
      increased: false,
    },
    drops: {
      multiplier: 5,
      increased: true,
    },
    minigames: {
      multiplier: 8,
      increased: true,
    },
    extras: [
      'The Bigger and Badder slayer unlock is unlocked (If already purchased, 150 slayer reward points are refunded).',
      'Superior slayer monsters have a 1/50 chance to spawn.',
      'Slayer point rewards are increased by 5x and are no longer limited to a minimum of a 10-task streak.',
    ],
  },
  {
    exp: {
      multiplier: 12,
      increased: true,
    },
    combatExp: {
      multiplier: 2,
      increased: true,
    },
    drops: {
      multiplier: 5,
      increased: false,
    },
    minigames: {
      multiplier: 8,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 12,
      increased: false,
    },
    combatExp: {
      multiplier: 2,
      increased: false,
    },
    drops: {
      multiplier: 5,
      increased: false,
    },
    minigames: {
      multiplier: 8,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 16,
      increased: true,
    },
    combatExp: {
      multiplier: 2,
      increased: false,
    },
    drops: {
      multiplier: 5,
      increased: false,
    },
    minigames: {
      multiplier: 8,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 16,
      increased: false,
    },
    combatExp: {
      multiplier: 2,
      increased: false,
    },
    drops: {
      multiplier: 5,
      increased: false,
    },
    minigames: {
      multiplier: 8,
      increased: false,
    },
    extras: [],
  },
];

export const RELICS = [
  [
    {
      label: 'Power Miner',
      description: [
        '· Grants the Echo pickaxe, a non-degradable variant of the crystal equivalent with no requirements. When in your inventory or equipped, you gain the following benefits:',
        ' · On failing to mine a rock, you will have a separate 50% chance to succeed.',
        ' · The rock will not deplete until you have mined 4 ores. This stacks with the effects of Mining gloves.',
        ' · Fill your bank with bank fillers to have resources sent to your Inventory',
        '· You will be able to toggle the following effects on or off for the Pickaxe:',
        ' · Collected ores are automatically smelted and grant Smithing XP (regardless of your Smithing level).',
        ' · Gems gathered from mining are automatically cut and grant Crafting XP (regardless of your Crafting level).',
      ],
      icon: images['relic-power-miner.png'],
    },
    {
      label: 'Lumberjack',
      description: [
        '· Grants the Echo axe, a non-degradable variant of the crystal equivalent with no requirements. When in your inventory or equipped, you gain the following benefits:',
        ' · On failing to chop a tree, you will have a separate 50% chance to succeed.',
        ' · Items gathered from Woodcutting are automatically sent to your Bank.',
        '· You will be able to toggle the following effects on or off for the Axe: ',
        ' · Automatically burning logs for Firemaking XP (regardless of your Firemaking level).',
        ' · Automatically Fletching logs into arrowshafts for Fletching XP (regardless of your Fletching level).',
      ],
      icon: images['relic-lumberjack.png'],
    },
    {
      label: 'Animal Wrangler',
      description: [
        '· Grants the Echo harpoon, a non-degradable variant of the crystal equivalent with no requirements. When in your inventory or equipped, you gain the following benefits: ',
        ' · On failing to fish a spot, you will have a separate 50% chance to succeed.',
        ' · Items gathered from Fishing are automatically sent to your Bank.',
        ' · Fish caught have a 50% chance to be automatically cooked, granting Cooking experience regardless of level requirements.',
        ' · Attempt to catch fish 1 tick faster.',
        ' · Acts as a Net, Big net, Lobster pot or any Rod whilst fishing.',
        '· Alongside the Echo harpoon effects you will get the following benefits to Hunter: ',
        ' · Hunter traps will never fail.',
        ' · Box traps catch chinchompas faster and are doubled when caught, also giving double XP.',
        ' · Impling jars no longer break upon opening them.',
        '· You also never burn food while Cooking.',
      ],
      icon: images['relic-animal-wrangler.png'],
    },
  ],
  [
    {
      label: 'Corner Cutter',
      description: [
        "· Upon choosing this relic you will receive a pair of sage's greaves.",
        " · Whilst equipped, sage's Greaves will grant Agility experience based on your Agility level while you run.",
        '· Players will always succeed in performing actions for Agility.',
        '· Completing an Agility course grants two completion count and 25% bonus experience.',
        '· Marks of grace will also spawn with 10,000 coins.',
        '· Double the quantity of pyramid tops, hallowed marks, Brimhaven vouchers, and crystal shards (from the Prifddinas Agility Course).',
      ],
      icon: images['relic-corner-cutter.png'],
    },
    {
      label: 'Friendly Forager',
      description: [
        "· Upon choosing this relic you will receive the forager's pouch. The forager's pouch will provide the following benefits while in your inventory or equipped:",
        " · When you gather resources from Woodcutting, Fishing, Mining and Hunting, the forager's pouch will find and store a random grimy herb, limited to herbs your Herblore level + 25 can clean, whilst also providing a small amount of token experience when one is found.",
        " · The forager's Pouch will only find herbs it has room to store, but will always attempt to give you a herb you can receive.",
        " · The forager's pouch works just like a herb sack, and shares an inventory with it.",
        ' · Additionally, you gain the following benefits to Herblore when crafting potions:',
        '  · Secondary ingredients have a 90% chance to not be consumed. (This stacks additively with other sources)',
        '  · Created potions contain 4 doses instead of 3.',
      ],
      icon: images['relic-friendly-forager.png'],
    },
    {
      label: 'Dodgy Deals',
      description: [
        '· When choosing this relic, you gain the following benefits to Thieving:',
        ' · Pickpocketing an NPC will also pickpocket all NPCs of the same type in a 11x11 square, granting extra loot for each NPC pickpocketed.',
        ' · 100% success rate on all Thieving checks.',
        ' · Automatically re-pickpocket an NPC or stall until you can no longer do so.',
        ' · Items obtained from pickpocketing are noted.',
        ' · Maximum coin pouch count increased by 3x.',
        ' · Stalls never deplete.',
      ],
      icon: images['relic-dodgy-deals.png'],
    },
  ],
  [
    {
      label: 'Clue Compass',
      description: [
        '· Players are given a clue compass allowing teleport to any STASH unit, and to Falo the Bard',
        '· The compass can also teleport the player to their current clue step if they have one. It does not work on clue steps that require killing a certain NPC.',
        '· This item ignores wilderness teleport restrictions',
        '· This item cannot be used to teleport to an area which is not unlocked.',
        'As the player is given an item upon unlocking this relic, it must be unlocked in a bank. ',
      ],
      icon: images['relic-clue-compass.png'],
    },
    {
      label: 'Bank Heist',
      description: [
        "· Players are given a banker's briefcase allowing teleport to any deposit box, bank, or bank chest",
        '· This item ignores wilderness teleport restrictions',
        '· This item cannot be used to teleport to an area which is not unlocked',
        'As the player is given an item upon unlocking this relic, it must be unlocked in a bank.',
      ],
      icon: images['relic-bank-heist.png'],
    },
    {
      label: "Fairy's Flight",
      description: [
        '· Players are given a fairy mushroom which allows teleporting to any fairy ring, spirit tree, or tool leprechaun.',
        '· Unlocking this relic will autocomplete the Tree Gnome Village quest.',
        '· Can only teleport to locations within regions the player has unlocked.',
        '· This item ignores wilderness teleport restrictions.',
        'As the player is given an item upon unlocking this relic, it must be unlocked in a bank. ',
      ],
      icon: images['relic-fairys-flight.png'],
    },
  ],
  [
    {
      label: 'Golden God',
      description: [
        '· High and Low Alchemy spells have no rune cost or level requirements',
        '· Items give 15% more gold and have a 65% chance to not be consumed when the spell is cast',
        '· When Alchemy spells are cast on a stack of items, the spells will automatically be recast over time, until the stack is depleted or moved',
        '· You gain the following benefits to Prayer:',
        ' · 20,000 can be offered at Prayer altars in exchange for Prayer XP equivalent to using a dragon bone. This respects altar XP modifiers.',
        '· All items purchased from some select shops can be noted, provided the items can be noted at all.',
        ' · This effect can be toggled.',
      ],
      icon: images['relic-golden-god.png'],
    },
    {
      label: 'Reloaded',
      description: ['· Choose another relic from any previous tier.'],
      icon: images['relic-reloaded.png'],
    },
    {
      label: 'Equilibrium',
      description: [
        '· Each time the player gains experience, they will gain additional experience in the skill trained. The additional experience is equal to 10% of the players total level. (This is increased to 20% when training the skill the player has the least experience in.)',
        '· Additional experience given by this relic is not multiplied by the Leagues XP multiplier.',
        '· Tip: Equilibrium will trigger per instance of individiual XP provided, even if that is multiple times in a single tick. E.g. Production Master will trigger Equilibrium one time per item processed.',
      ],
      icon: images['relic-equilibrium.png'],
    },
  ],
  [
    {
      label: 'Treasure Arbiter',
      description: [
        '· Impling Jars and Creatures that drop Clue Scrolls have a 1/15 chance of dropping them.',
        '· Clue Geodes, Clue Nests and Clue Bottles are found 10x more often.',
        '· All Clue Scrolls have the lowest number of steps possible for their tier.',
        '· Every Clue Scroll casket will roll the max amount of rewards it can give (It can roll the same item more than once.):',
        ' · Beginner caskets will roll 3 times.',
        ' · Easy caskets will roll 4 times.',
        ' · Medium caskets will roll 5 times.',
        ' · Hard caskets will roll 6 times.',
        ' · Elite caskets will roll 6 times.',
        ' · Master caskets will roll 7 times.',
        '· Emote, Falo & Charlie Clue steps no longer have item requirements.',
      ],
      icon: images['relic-treasure-arbiter.png'],
    },
    {
      label: 'Production Master',
      description: [
        '· When doing the following Production activities, all items are processed at once: ',
        ' · Smelting ores, Smithing bars and making Cannonballs.',
        ' · Fletching logs, stringing Bows, making arrow shafts and cutting bolt tips.',
        ' · Making headless arrows, regular arrows, bolts and darts. (Capped at 10x the regular amount per action)',
        ' · Cleaning herbs and making Potions which do not have a stackable secondary ingredient.',
        ' · Cooking food, making pies or pizzas and making Jugs of Wine.',
        ' · Crafting leather, uncut gems, glassblowing, jewellery, pottery, Battlestaves and spinning flax or wool.',
      ],
      icon: images['relic-production-master.png'],
    },
    {
      label: 'Slayer Master',
      description: [
        '· Always on task for all eligible slayer monsters.',
        '· Unlock all slayer task perks for free.',
        '· Rune pouches, Herb sacks and Looting bags in the slayer point store are all free.',
        '· Skip and block tasks for free.',
        "· Gain 1000-15,000 bonus Slayer XP for the first time you kill the 100th of each unique slayer monster, scaled by the monster's slayer level requirement (XP stated is before multipliers).",
      ],
      icon: images['relic-slayer-master.png'],
    },
  ],
  [
    {
      label: 'Total Recall',
      description: [
        '· Players are given a crystal of echoes allowing the following: ',
        ' · Players can store any single coordinate, alongside their hitpoints, prayer, and special attack energy',
        ' · Players may teleport back to the coordinates at any later time, restoring their stats to the saved ones',
      ],
      icon: images['relic-total-recall.png'],
    },
    {
      label: "Banker's Note",
      description: [
        "· Players are given a banker's note which allows players to use note-able items on it to turn them into banknotes or unnote them. Items must be used on the banker's note.",
        `· The "Activate" option allows players to note and un-note items in one action with a quantity of the player's choosing. An item must first be used on the banker's note in order for this to work.`,
        "· Players can customise how many items the banker's note will note and unnote using the quantity options.",
      ],
      icon: images['relic-bankers-note.png'],
    },
  ],
  [
    {
      label: 'Pocket Kingdom',
      description: [
        'You will receive the Pocket kingdom.',
        '· This item allows full access to the Managing Miscellania feature from anywhere.',
        '· Workers will work for 50% less coins, always have max appeal, produce twice as many resources, and accrue resources every hour instead of every day.',
      ],
      icon: images['relic-pocket-kingdom.png'],
    },
    {
      label: 'Grimoire',
      description: [
        'You will receive the Arcane grimoire.',
        '· This item can be used to freely swap between spellbooks.',
        '· The Grimoire acts as a Book of the dead.',
        'Additionally, when you select this relic, you will unlock access to all Prayers and spells, regardless of area, quest, or diary requirements.',
      ],
      icon: images['relic-grimoire.png'],
    },
    {
      label: 'Overgrown',
      description: [
        "· Grants the Leprechaun's vault, which allows access to the Seed vault from anywhere in the world.",
        '· You gain the following benefits to Farming:',
        ' · Crops will never die.',
        ' · When planting a seed, it has a 75% chance to not be consumed.',
        ' · When a seed fully grows, if your Seed Vault has another seed of the same type it will harvest the patch for you, then replant the seed.',
        ' · Automatically replanted seeds have Ultracompost added, whether or not you have any available.',
      ],
      icon: images['relic-overgrown.png'],
    },
  ],
  [
    {
      label: 'Specialist',
      description: [
        '· You gain the following benefits to special attacks:',
        ' · All special attacks cost 20% and have +100% accuracy.',
        ' · For each failed accuracy roll with a special attack, gain 10% Special Attack Energy.',
        ' · Whenever you kill an NPC, restore 15% Special Attack Energy.',
      ],
      icon: images['relic-specialist.png'],
    },
    {
      label: 'Guardian',
      description: [
        '· Upon choosing this relic you will receive the Guardian horn.',
        ' · This item will allow you to summon a powerful Guardian Thrall, lasting 30 minutes.',
        ' · The guardian will attack your target with whatever style it is weak to.',
        ' · When you are in multi-combat it will cast an AoE attack if the target is weak to range or magic.',
        " · The Guardian's stats are:",
        '  · Min hit: 5',
        '  · Max hit: 13',
        '  · Attack Speed: 4',
        '  · Accuracy: 45000',
        ' · The Guardian does not work in PvP.',
        ' · This relic will also work inside The Gauntlet',
        "· The axe's attack range is 6 tiles (7 tiles on longrange).",
        'The Guardian horn can be retrieved from the Sage if lost.',
      ],
      icon: images['relic-guardian.png'],
    },
    {
      label: 'Last Stand',
      description: [
        '· You gain the Last Stand ability, which works as follows:',
        ' · If damage would reduce you to 0 hp, you are reduced to 1 hp instead.',
        ' · Your combat stats are instantly boosted to 255 but begin draining rapidly (16 every tick) back down to your base level + 15.',
        ' · For the next 16 ticks after this ability is activated, you cannot be reduced to 0 hp.',
        ' · When the effect ends, all incoming damage is nullified and the player is healed based on the damage they dealt over the last 16 ticks.',
        '· Once this ability is used, it cannot be used again until you die or 3 minutes have passed.',
      ],
      icon: images['relic-last-stand.png'],
    },
  ],
];
