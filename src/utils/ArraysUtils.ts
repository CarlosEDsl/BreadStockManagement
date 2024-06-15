export class ArraysUtils {

    static arrayEquals(ar1:string[], ar2:string[]): boolean {
        if(ar1.length !== ar2.length)
            return false;
        for(let i=0; i < ar2.length; i++) {
            if (ar1[i] !== ar2[i])
                return false;
        }
        return true;
    }

}
