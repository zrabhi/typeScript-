// Write your class and interface here! ✨
// You'll need to export it so the tests can run it.
export interface PuppyInTheWindow 
{
    readonly colors: string[];
    readonly furriness: number;
    readonly owner: string | undefined;
}

export class Puppy implements PuppyInTheWindow
{
    colors: string[];
    furriness: number;
    owner: string | undefined;

    constructor(_color: string[], _furriness: number)
    {
        this.colors = _color;
        this.furriness = _furriness;
    }
    adopt(_owner: string)
    {
        this.owner = _owner;
    }
}