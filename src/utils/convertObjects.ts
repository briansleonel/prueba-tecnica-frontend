import { IQuestionOptions } from "../types/question";

/**
 * Permite convertir un Objecto en un array, tomando cada una de sus propiedades
 * @param options un objeto
 * @returns un array con las propiedades de un objeto
 */
export const getObjectToArray = (options: IQuestionOptions) => {
    const opts: Array<string> = [];

    Object.entries(options).forEach((keyValue) => {
        opts.push(keyValue[1] as string);
    });
    return opts;
};
