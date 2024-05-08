/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the license file for more information.
 */

import { Shape } from './Shape'

export class Circle extends Shape {

    constructor(
        theX: number, theY: number,
        private _raduis: number){
            super(theX, theY)
    }

    public get raduis(): number {
        return this._raduis;
    }
    public set raduis(value: number) {
        this._raduis = value;
    }

    getInfo(): string {
        return super.getInfo() + `, raduis=${this._raduis}`;
    }
}