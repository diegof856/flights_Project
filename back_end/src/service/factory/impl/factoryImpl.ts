import { IFlight } from "../../../mappers/MapperFlights";
import { IFlightTransformer, IHomePage, ICreateSold, ISoldTotal, ICreateFlightResponse, IFlightResponse } from "../factory";

export class factoryImpl implements IFlightTransformer, ICreateFlightResponse, ICreateSold {
    createResponse(flight: IFlight): IFlightResponse {
        return {
            id: flight.id,
            aircraft: flight.aircraft.name,
            bonus: this.formatterMissonBonus(flight.flightData.missionBonus),
            date: this.formetterDate(flight.flightData.date),
            totalEarnings: this.calculateTotalPointsDetails(flight.flightData.balance, flight.flightData.missionBonus),
            airline: flight.aircraft.airline,
            registration: flight.aircraft.registration,
            from: flight.flightData.route.from,
            to: flight.flightData.route.to,
            xp: flight.flightData.xp

        }
    }

    transformSingle(flight: IFlight): IHomePage {
        return {
            id: flight.id,
            aircraft: flight.aircraft.name,
            registration: flight.aircraft.registration,
            airline: flight.aircraft.airline,
            from: flight.flightData.route.from,
            to: flight.flightData.route.to,
            date: this.formetterDate(flight.flightData.date),
            sold: this.formatterBalance(flight.flightData.balance)
        }
    }
    // helper methods
    private formatterMissonBonus(missionBonus: number): string {
        return `${missionBonus}%`
    }
    private formetterDate(date: string): string {
        const dataObj = new Date(date + "T00:00:00");
        const dia = dataObj.getDate().toString().padStart(2, '0');
        const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
        const ano = dataObj.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
    private calculateTotalPointsDetails(balance: number, bonus: number): string {
        const total = balance + balance * bonus;
        return this.formatterBalance(total);
    }
    createSoldTotal(total: number, quantityObj: number): ISoldTotal {
        return {
            totalBalance: this.formatterBalance(total),
            totalFlights: quantityObj
        }
    }
    private formatterBalance(balance: number): string {
        return balance.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

} 