/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the LICENSE file for more information.
 */

import { Coach } from "./Coach";

export class GolfCoach implements Coach {


    getDailyWorkout(): string {
        return "Hit 100 balls at the golf range.";
    }

}