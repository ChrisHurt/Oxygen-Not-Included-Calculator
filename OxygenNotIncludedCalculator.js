// Power Units: Watts
// Material flow rates: g/s


var buildings = {
    deodorizer: {
        io: {
            filtrationMedium: -133.33,
            pollutedOxygen: -100.00,
            clay: 143.33,
            oxygen: 90.00
        }
    },
    carbonSkimmer: {
        io: {
            power: -120,
            water: -1000.00,
            carbonDioxide: -300.00,
            pollutedWater: 1000.00
        }
    },
    electrolyzer: {
        io: {
            power: 120,
            water: -1000.00,
            oxygen: 888.00,
            hydrogen: 112.00
        }
    },
    rustDeoxidizer: {
        io: {
            power: -60,
            rust: -750.00,
            salt: -250.00,
            oxygen: 570.00,
            chlorine: 30.00,
            ironOre: 400.00
        }
    },
    hydrogenGenerator: {
        io: {
            power: 800,
            hydrogen: -100.00,
        }
    },
    naturalGasGenerator: {
        io: {
            power: 800,
            naturalGas: -90.00,
            pollutedWater: 67.5,
            carbonDioxide: 22.5
        }
    },
    petroleumGenerator: {
        io: {
            power: 2000,
            petroleumOrEthanol: -2000.00,
            carbonDioxide: 500.00,
            pollutedWater: 750.00
        }
    },
    steamTurbine: {
        io: {
            // Add this section later
            // Temperature-sensitive calculations involved
            // A function is required rather than a value
        }
    },
    waterSieve: {
        io: {
            power: -120,
            filtrationMedium: -1000.00,
            pollutedWater: -5000.00,
            water: 5000.00,
            pollutedDirt: 200.00
        }
    },
    desalinatorWithSaltWater :{
        io: {
            power: -480,
            saltWater: -5000.00,
            water: 4650.00,
            salt: 350.00
        }
    },    
    desalinatorWithBrine :{
        io: {
            power: -480,
            saltWater: -5000.00,
            water: 3500.00,
            salt: 1500.00
        }
    },
    fertilizerSynthesizer :{
        io: {
            power: -120,
            pollutedWater: -39.00,
            dirt: -65.00,
            phosphorite: -26.00,
            fertilizer: 120.00,
            naturalGas: 10.00
        }
    },
    algaeDistiller :{
        io: {
            power: -120,
            slime: -600.00,
            algae: 200.00,
            pollutedWater: 400.00
        }
    },
    ethanolDistiller:{
        io: {
            power: -240,
            lumber: -1000.00,
            ethanol: 500.00,
            pollutedDirt: 333.33,
            carbonDioxide: 166.67
        }
    },
    oilRefinery: {
        io: {
            power: -480,
            crudeOil: -10000,
            petroleum: 5000,
            naturalGas: 90
        }
    },
    polymerPress: {
        io: {
            power: -240,
            petroleum: -833.33,
            plastic: 500.00,
            steam: 8.33,
            carbonDioxide: 8.33
        }
    },
    oxyliteRefinery: {
        io: {
            power: -1200,
            oxygen: -600.00,
            gold: -3.00,
            oxylite: 600.00
        }
    },
    oxygenDiffuser: {
        io: {
            power: -120,
            algae: -550.00,
            oxygen: 500.00
        }
    },
    algaeTerrarium: {
        io: {
            algae: -30,
            water: -300,
            oxygen: {
                min: 40.00,
                max: 44.00
            },
            carbonDioxide: -0.33333,
            pollutedWater: 290.33
        }
    }
}

buildingList = {
    carbonSkimmer: 3,
    waterSieve: 1,
    hydrogenGenerator: 2
}

var sumOfBuildingIOs = (givenBuildings) => {
    materialFlow = {}
    buildingList = {}


    Object.keys(buildings).forEach((buildingKey)=>{
        if(givenBuildings != undefined && givenBuildings[buildingKey] != undefined){
            buildingList[buildingKey] = givenBuildings[buildingKey];
            for(var i = 0; i < givenBuildings[buildingKey]; i++){
                Object.keys(buildings[buildingKey].io).forEach((materialKey)=>{
                    if(materialFlow[materialKey] != undefined && typeof(buildings[buildingKey].io[materialKey]) != 'number'){
                        materialFlow[materialKey]['min'] += buildings[buildingKey].io[materialKey]['min']
                        materialFlow[materialKey]['max'] += buildings[buildingKey].io[materialKey]['max']
                    } else if(materialFlow[materialKey] != undefined){
                        materialFlow[materialKey] += buildings[buildingKey].io[materialKey]
                    } else {
                        materialFlow[materialKey] = buildings[buildingKey].io[materialKey]
                    }
                })
            }
        }
    })
    return {materialFlow: materialFlow,buildingList: buildingList};
}

var geysersVentsVolcanoes = {

}