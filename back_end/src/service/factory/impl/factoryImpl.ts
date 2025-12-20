import { IFlight } from "../../../mappers/MapperFlights";
import { IFlightTransformer, IHomePage, ICreateSold, ISoldTotal, ICreateFlightResponse, IFlightResponse } from "../factory";

export class factoryImpl implements IFlightTransformer, ICreateFlightResponse, ICreateSold {
    createResponse(flight: IFlight): IFlightResponse {
        return {
            id: flight.id,
            aeronave: flight.aircraft.name,
            bonus: this.formatterMissonBonus(flight.flightData.missionBonus),
            data: this.formetterDate(flight.flightData.date),
            ganhosTotais: this.calculateTotalPointsDetails(flight.flightData.balance, flight.flightData.missionBonus),
            linhaAerea: flight.aircraft.airline,
            matricula: flight.aircraft.registration,
            ondeEsta: flight.flightData.route.from,
            paraOndeVai: flight.flightData.route.to,
            xp: flight.flightData.xp

        }
    }

    transformSingle(flight: IFlight): IHomePage {
        return {
            id: flight.id,
            aeronave: flight.aircraft.name,
            matricula: flight.aircraft.registration,
            linhaAerea: flight.aircraft.airline,
            ondeEsta: flight.flightData.route.from,
            paraOndeVai: flight.flightData.route.to,
            data: this.formetterDate(flight.flightData.date),
            saldo: this.formatterBalance(flight.flightData.balance)
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
            saldoTotal: this.formatterBalance(total),
            quantidadeVoosSomados: quantityObj
        }
    }
    private formatterBalance(balance: number): string {
        return balance.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

} 