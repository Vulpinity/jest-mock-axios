/**
 * Based of https://github.com/axios/axios
 * Copyright (c) 2014-present Matt Zabriskie
 */
export declare class Cancel {
    message: string;
    __CANCEL__: boolean;
    constructor(message?: string);
    toString(): string;
}
export default Cancel;
