// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.

import { resolveObjectURL } from "buffer";
import { readSync } from "fs";
import { updateIndexSignature } from "typescript";

export function deepDifferences(a: string[][], b: string[][])
{
    if (a.length != b.length)
        return (undefined);

    const allresult: ((string | undefined)[] | undefined)[] = [];    
    const result: (string | undefined)[] = [];
    for (let i = 0; i < a.length; i++)
    {
        if (a[i].length != b[i].length)
        {
            allresult.push(undefined);
            continue;
        }
        const result = [];
        for (let j = 0; j < a[i].length; j++)
        {
           result.push(a[i][j] === b[i][j] ? a[i][j]: undefined); 
        }
     allresult.push(result);
    }
 return (allresult);
}