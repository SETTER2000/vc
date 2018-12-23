import React from 'react';
import {Component} from 'react'
import Tree from 'react-d3-tree';

const data = [
    {
        name: 'Sire: Poale Ell Adam',
        attributes: {
            Breeder: 'Petrova O. (POALE ELL, Russian Federation)',
            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
        },
        children: [
            {
                name: 'Sire: Zlato Dinastii Neron',
                attributes: {
                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                    Owner: 'Leonteva Olga (Bratsk)'
                },
                children: [
                    {
                        name: 'Sire: Sasquehanna (fci) Ekier',
                        attributes: {
                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                            Owner: 'Leonteva Olga (Bratsk)'
                        },
                        children: [
                            {
                                name: 'Sire: Sasquehanna Zachod',
                                attributes: {
                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                    Owner: 'Leonteva Olga (Bratsk)'
                                },
                                children: [
                                    {
                                        name: 'Sire: Sasquehanna Piechur',
                                        attributes: {
                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                            Owner: 'Leonteva Olga (Bratsk)'
                                        },
                                        children: [
                                            {
                                                name: 'Sire: Gingery\'s Blackberry Dynomite',
                                                attributes: {
                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                },
                                                children: [
                                                    {
                                                        name: 'Sire: Gingery\'s Dynomite',
                                                        attributes: {
                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                        },
                                                        children: [
                                                            {
                                                                name: 'Sire: Gingery\'s Lion King SOM',
                                                                attributes: {
                                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                                },
                                                                children: [
                                                                    {
                                                                        name: 'Sire: Gingery\'s White Lion Of Oz SOM',
                                                                        attributes: {
                                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                                        },
                                                                        children: [
                                                                            {
                                                                                name: 'Sire: Victory\'s Flasher',
                                                                                attributes: {
                                                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                                                },

                                                                                children: [
                                                                                    {
                                                                                        name: 'Sire: Gipez\'s Ying Ming Of Mordor',
                                                                                        attributes: {
                                                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                                                        },
                                                                                        children: [
                                                                                            {
                                                                                                name: 'Sire: Tod-Mar\'s Double Trouble Of Mordor',
                                                                                                attributes: {
                                                                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                                                                },
                                                                                                children: [
                                                                                                    {
                                                                                                        name: 'Sire: Mordor L\'Ono',
                                                                                                        attributes: {
                                                                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                                                                        },
                                                                                                        children: [
                                                                                                            {
                                                                                                                name: 'Sire: Hey-Der Of Crest Haven',
                                                                                                                attributes: {
                                                                                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                                                                                },
                                                                                                                children: [
                                                                                                                    {
                                                                                                                        name: 'Sire: Allo Of Crest Haven',
                                                                                                                        attributes: {
                                                                                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                                                                                        },
                                                                                                                        children: [
                                                                                                                            {
                                                                                                                                name: 'Sire: Mar\'bo Of Crest Haven',
                                                                                                                                attributes: {
                                                                                                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                                                                                                },
                                                                                                                                children: [
                                                                                                                                    {
                                                                                                                                        name: 'Sire: To\'no of Crest Haven',
                                                                                                                                        attributes: {
                                                                                                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        name: 'Dam: Milya Of Crest Haven',
                                                                                                                                        attributes: {
                                                                                                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                ],
                                                                                                                            },
                                                                                                                            {
                                                                                                                                name: 'Dam: Trixie Of Crest Haven',
                                                                                                                                attributes: {
                                                                                                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                    {
                                                                                                                        name: 'Dam: Fusa Of Crest Haven',
                                                                                                                        attributes: {
                                                                                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                                                        },
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                            {
                                                                                                                name: 'Dam: Mordor Lisa',
                                                                                                                attributes: {
                                                                                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                                                },
                                                                                                            },
                                                                                                        ],
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'Dam: Lucky Crest\'s Huni Lotus Of Rivercrest',
                                                                                                        attributes: {
                                                                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                            {
                                                                                                name: 'Dam: Mordor Melissa Rose',
                                                                                                attributes: {
                                                                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                                },
                                                                                            },
                                                                                        ],
                                                                                    },
                                                                                    {
                                                                                        name: 'Dam: Mordor Marina Of Gipez',
                                                                                        attributes: {
                                                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                        },
                                                                                    },
                                                                                ],
                                                                            },
                                                                            {
                                                                                name: 'Dam: Eric\'s Gingery Rainbow of Oz',
                                                                                attributes: {
                                                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                    {
                                                                        name: 'Dam: Gipez\'s Mei-Ling DOM',
                                                                        attributes: {
                                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                name: 'Dam: Gingery\'s Licorice',
                                                                attributes: {
                                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        name: 'Dam: Victory\'s Cairngorm DOM',
                                                        attributes: {
                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                        },
                                                    },
                                                ],
                                            },
                                            {
                                                name: 'Dam: Sasquehanna Plisa',
                                                attributes: {
                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        name: 'Dam: Sasquehanna Zagrobla',
                                        attributes: {
                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                        },
                                        children: [
                                            {
                                                name: 'Sire: Pahlavi Wile E Coyote',
                                                attributes: {
                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                },
                                                children: [
                                                    {
                                                        name: 'Sire: Goodacres Xerox N\'Co',
                                                        attributes: {
                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                        },
                                                        children: [
                                                            {
                                                                name: 'Sire: Sun-A-Ra\'s Special Edition',
                                                                attributes: {
                                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                                },
                                                            },
                                                            {
                                                                name: 'Dam: Goodacre\'s Lucita',
                                                                attributes: {
                                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        name: 'Dam: Pahlavi Tiramisu',
                                                        attributes: {
                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                        },
                                                    },
                                                ],
                                            },
                                            {
                                                name: 'Dam: Sasquehanna Penicylina',
                                                attributes: {
                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: 'Dam: Sasquehanna Elandra',
                                attributes: {
                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                },
                                children: [
                                    {
                                        name: 'Sire: Gingery\'s Sasquehanna Goblin',
                                        attributes: {
                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                            Owner: 'Leonteva Olga (Bratsk)'
                                        },
                                    },
                                    {
                                        name: 'Dam: Sasquehanna Emilda',
                                        attributes: {
                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Dam: Zlato Dinastii Aleksandriya',
                        attributes: {
                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                        },
                        children: [
                            {
                                name: 'Sire: Sasquehanna Zachwyt',
                                attributes: {
                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                    Owner: 'Leonteva Olga (Bratsk)'
                                },
                            },
                            {
                                name: 'Dam: Vivat Sunrise Dinasty',
                                attributes: {
                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                },
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Dam: Sasquehanna (FCI) Ella',
                attributes: {
                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                },
                children: [
                    {
                        name: 'Sire: Sasquehanna (fci) PIAFF',
                        attributes: {
                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                            Owner: 'Leonteva Olga (Bratsk)'
                        },
                    },
                    {
                        name: 'Dam: Sasquehanna (fci) Satyna',
                        attributes: {
                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                        },
                    },
                ],
            },
            {
                name: 'Sire: Poale Ell Adam',
                attributes: {
                    Breeder: 'Petrova O. (POALE ELL, Russian Federation)',
                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                },
                children: [
                    {
                        name: 'Sire: Zlato Dinastii Neron',
                        attributes: {
                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                            Owner: 'Leonteva Olga (Bratsk)'
                        },
                        children: [
                            {
                                name: 'Sire: Sasquehanna (fci) Ekier',
                                attributes: {
                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                    Owner: 'Leonteva Olga (Bratsk)'
                                },
                                children: [
                                    {
                                        name: 'Sire: Sasquehanna Zachod',
                                        attributes: {
                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                            Owner: 'Leonteva Olga (Bratsk)'
                                        },
                                        children: [
                                            {
                                                name: 'Sire: Sasquehanna Piechur',
                                                attributes: {
                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                },
                                                children: [
                                                    {
                                                        name: 'Sire: Gingery\'s Blackberry Dynomite',
                                                        attributes: {
                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                        },
                                                        children: [
                                                            {
                                                                name: 'Sire: Gingery\'s Dynomite',
                                                                attributes: {
                                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                                },
                                                                children: [
                                                                    {
                                                                        name: 'Sire: Gingery\'s Lion King SOM',
                                                                        attributes: {
                                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                                        },
                                                                        children: [
                                                                            {
                                                                                name: 'Sire: Gingery\'s White Lion Of Oz SOM',
                                                                                attributes: {
                                                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        name: 'Sire: Victory\'s Flasher',
                                                                                        attributes: {
                                                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                                                        },

                                                                                        children: [
                                                                                            {
                                                                                                name: 'Sire: Gipez\'s Ying Ming Of Mordor',
                                                                                                attributes: {
                                                                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                                                                },
                                                                                                children: [
                                                                                                    {
                                                                                                        name: 'Sire: Tod-Mar\'s Double Trouble Of Mordor',
                                                                                                        attributes: {
                                                                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                                                                        },
                                                                                                        children: [
                                                                                                            {
                                                                                                                name: 'Sire: Mordor L\'Ono',
                                                                                                                attributes: {
                                                                                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                                                                                },
                                                                                                                children: [
                                                                                                                    {
                                                                                                                        name: 'Sire: Hey-Der Of Crest Haven',
                                                                                                                        attributes: {
                                                                                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                                                                                        },
                                                                                                                        children: [
                                                                                                                            {
                                                                                                                                name: 'Sire: Allo Of Crest Haven',
                                                                                                                                attributes: {
                                                                                                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                                                                                                },
                                                                                                                                children: [
                                                                                                                                    {
                                                                                                                                        name: 'Sire: Mar\'bo Of Crest Haven',
                                                                                                                                        attributes: {
                                                                                                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                                                                                                        },
                                                                                                                                        children: [
                                                                                                                                            {
                                                                                                                                                name: 'Sire: To\'no of Crest Haven',
                                                                                                                                                attributes: {
                                                                                                                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                                                                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                name: 'Dam: Milya Of Crest Haven',
                                                                                                                                                attributes: {
                                                                                                                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                                                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                        ],
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        name: 'Dam: Trixie Of Crest Haven',
                                                                                                                                        attributes: {
                                                                                                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                ],
                                                                                                                            },
                                                                                                                            {
                                                                                                                                name: 'Dam: Fusa Of Crest Haven',
                                                                                                                                attributes: {
                                                                                                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                    {
                                                                                                                        name: 'Dam: Mordor Lisa',
                                                                                                                        attributes: {
                                                                                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                                                        },
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                            {
                                                                                                                name: 'Dam: Lucky Crest\'s Huni Lotus Of Rivercrest',
                                                                                                                attributes: {
                                                                                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                                                },
                                                                                                            },
                                                                                                        ],
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'Dam: Mordor Melissa Rose',
                                                                                                        attributes: {
                                                                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                            {
                                                                                                name: 'Dam: Mordor Marina Of Gipez',
                                                                                                attributes: {
                                                                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                                },
                                                                                            },
                                                                                        ],
                                                                                    },
                                                                                    {
                                                                                        name: 'Dam: Eric\'s Gingery Rainbow of Oz',
                                                                                        attributes: {
                                                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                        },
                                                                                    },
                                                                                ],
                                                                            },
                                                                            {
                                                                                name: 'Dam: Gipez\'s Mei-Ling DOM',
                                                                                attributes: {
                                                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                    {
                                                                        name: 'Dam: Gingery\'s Licorice',
                                                                        attributes: {
                                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                name: 'Dam: Victory\'s Cairngorm DOM',
                                                                attributes: {
                                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        name: 'Dam: Sasquehanna Plisa',
                                                        attributes: {
                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                        },
                                                    },
                                                ],
                                            },
                                            {
                                                name: 'Dam: Sasquehanna Zagrobla',
                                                attributes: {
                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                },
                                                children: [
                                                    {
                                                        name: 'Sire: Pahlavi Wile E Coyote',
                                                        attributes: {
                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                        },
                                                        children: [
                                                            {
                                                                name: 'Sire: Goodacres Xerox N\'Co',
                                                                attributes: {
                                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                                },
                                                                children: [
                                                                    {
                                                                        name: 'Sire: Sun-A-Ra\'s Special Edition',
                                                                        attributes: {
                                                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                                            Owner: 'Leonteva Olga (Bratsk)'
                                                                        },
                                                                    },
                                                                    {
                                                                        name: 'Dam: Goodacre\'s Lucita',
                                                                        attributes: {
                                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                name: 'Dam: Pahlavi Tiramisu',
                                                                attributes: {
                                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        name: 'Dam: Sasquehanna Penicylina',
                                                        attributes: {
                                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                        },
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        name: 'Dam: Sasquehanna Elandra',
                                        attributes: {
                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                        },
                                        children: [
                                            {
                                                name: 'Sire: Gingery\'s Sasquehanna Goblin',
                                                attributes: {
                                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                                    Owner: 'Leonteva Olga (Bratsk)'
                                                },
                                            },
                                            {
                                                name: 'Dam: Sasquehanna Emilda',
                                                attributes: {
                                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: 'Dam: Zlato Dinastii Aleksandriya',
                                attributes: {
                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                },
                                children: [
                                    {
                                        name: 'Sire: Sasquehanna Zachwyt',
                                        attributes: {
                                            Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                            Owner: 'Leonteva Olga (Bratsk)'
                                        },
                                    },
                                    {
                                        name: 'Dam: Vivat Sunrise Dinasty',
                                        attributes: {
                                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Dam: Sasquehanna (FCI) Ella',
                        attributes: {
                            Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                            Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                        },
                        children: [
                            {
                                name: 'Sire: Sasquehanna (fci) PIAFF',
                                attributes: {
                                    Breeder: ['Julia Sova (Zlato Dinastii, Russian Federation)', 'Zaripova M. (LAISAN ISLAND, Russian Federation)'],
                                    Owner: 'Leonteva Olga (Bratsk)'
                                },
                            },
                            {
                                name: 'Dam: Sasquehanna (fci) Satyna',
                                attributes: {
                                    Breeder: 'Malgorzata Supronowicz (Sasquehanna, Poland)',
                                    Owner: 'Petrova O. (POALE ELL, Russian Federation)'
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    }
];

export default class MyTree extends Component {
    constructor() {
        super();
        this.powa = this.powa.bind(this)
    }

    powa() {
        alert('Ho!')
    }

    render() {
        const {powa} = this;
        return (

            <div id="treeWrapper" style={{width: '100em', height: '100em'}}>
                <Tree data={data} onClick={powa}/>
            </div>
        )
    }
}

