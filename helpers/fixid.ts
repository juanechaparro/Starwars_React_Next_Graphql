export const fixid = (id: number) => {
    if(id > 17){
        return id + 1;
    }
     return id;
}