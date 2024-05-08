/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the LICENSE file for more information.
 */

import { Coach } from "./Coach";

export class CricketCoach implements Coach {


    getDailyWorkout(): string {
        return "Practice your spin bowling technique.";
    }

}