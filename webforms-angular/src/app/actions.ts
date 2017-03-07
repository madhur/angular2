import {CricketService} from './cricket-service.service';

export const FETCH_CRICKET='FETCH_CRICKET';
export const FETCH_CRICKET_SUCCESS=FETCH_CRICKET + '_FULFILLED';
export const FETCH_CRICKET_PENDING=FETCH_CRICKET + '_PENDING';
import { Injectable } from '@angular/core';

@Injectable()
export class CricketActions
{
	constructor(private cricketService: CricketService) {

	}

	getCricket(matchId)
	{


		return (dispatch) => {
            this.cricketService.getCricketData(matchId)
                .subscribe(res => {
                    dispatch(this.setCricketData(res));
                }, err => {
                    console.log(err);
                })
        }
	}

    setCricketData(data: any) {

		return {
            type: FETCH_CRICKET_SUCCESS,
            payload: data
        }

	}

};